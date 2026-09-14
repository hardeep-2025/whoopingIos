"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const API_URL =
  "https://whoppingseo.com/old/wp-json/wp/v2/posts";

export default function BlogSingleClient({ slug }) {
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
  |--------------------------------------------------------------------------
  | Fetch Single Blog
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);


        
        
       const res = await fetch(
  `${API_URL}?slug=${encodeURIComponent(slug)}&_embed&_fields=id,slug,content,title,_links,_embedded`
 
);


        if (!res.ok) {
          throw new Error("Failed to fetch blog");
        }

        const data = await res.json();

        const currentPost =
          Array.isArray(data) && data.length > 0
            ? data[0]
            : null;

        setPost(currentPost);

        /*
        |--------------------------------------------------------------------------
        | Fetch all posts for Previous / Next
        |--------------------------------------------------------------------------
        */

        // const allPostsRes = await fetch(
        //   `${API_URL}?per_page=100`,
        //   {
        //     cache: "no-store",
        //   }
        // );

        const allPostsRes = await fetch(
  `${API_URL}?per_page=100&_fields=id,slug`,
  {
    cache: "no-store",
  }
);

        if (allPostsRes.ok) {
          const allPostsData =
            await allPostsRes.json();

          setAllPosts(
            Array.isArray(allPostsData)
              ? allPostsData
              : []
          );
        }
      } catch (error) {
        console.error(
          "Error fetching single blog:",
          error
        );

        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  /*
  |--------------------------------------------------------------------------
  | Loading
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div className="container mx-auto py-20 text-center text-white">
        Loading blog...
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Not Found
  |--------------------------------------------------------------------------
  */

 

  if (!post) {
    return (
      <div className="container mx-auto py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-5">
          Post Not Found
        </h2>

        <Link
          href="/blog"
          className="text-blue-500 no-underline"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Blog Data
  |--------------------------------------------------------------------------
  */

  const image =
    post?._embedded?.["wp:featuredmedia"]?.[0]
      ?.source_url;

  const author =
    post?._embedded?.author?.[0];

 const tags =
  post?._embedded?.["wp:term"]
    ?.flat()
    ?.filter((term) => term.taxonomy === "post_tag") ?? [];

  /*
  |--------------------------------------------------------------------------
  | Previous / Next
  |--------------------------------------------------------------------------
  */

  const currentIndex = allPosts.findIndex(
    (item) => item.slug === post.slug
  );

  const prevPost =
    currentIndex !== -1 &&
    currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : null;

  const nextPost =
    currentIndex > 0
      ? allPosts[currentIndex - 1]
      : null;

       

  return (
   
    <div>
   
      {/* Featured Image */}

      {image && (
        <img
          src={image}
          alt={
            post.title?.rendered || "Blog"
          }
          className="
            w-full
            h-[700px]
            object-cover
            rounded-2xl
            mb-8
          "
        />
      )}

      <div className="container mx-auto py-10!">

        {/* Title */}

        <h1
          className="
            text-[35px]!
            md:text-6xl
            font-extrabold!
            mb-10!
            leading-tight
          "
          dangerouslySetInnerHTML={{
            __html:
              post.title?.rendered || "",
          }}
        />

        {/* Blog Content */}

        <div
          className="
            singleBlog
            prose
            prose-invert
            max-w-none
            [&_p:not(:last-of-type)]:!mb-[2rem]
            [&_h1]:!mb-[2rem]
            [&_h2]:!mb-[2rem]
            [&_h3]:!mb-[2rem]
            [&_h3]:!mt-[5rem]
            [&_h4]:!mb-[2rem]
            [&_h5]:!mb-[2rem]
            [&_h6]:!mb-[2rem]
          "
          dangerouslySetInnerHTML={{
            __html:
              post.content?.rendered || "",
          }}
        />

        {/* Tags */}

        <div className="flex flex-wrap gap-3 mb-[2rem]!">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="
                px-4
                py-2
                rounded-md
                bg-[#2B2B2B]
                border
                border-gray-600
                text-sm
              "
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Author + Previous / Next */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-10
            mt-16
            border-t
            border-gray-700
            pt-6
            pb-[8rem]!
          "
        >

          {/* Author */}

          <div className="flex items-center gap-4">

            <img
              src={
                author?.avatar_urls?.["96"] ||
                "/default-avatar.png"
              }
              alt={
                author?.name || "Author"
              }
              className="
                w-20
                h-20
                rounded-full
                object-cover
              "
            />

            <div className="pt-5">

              <p className="text-sm text-gray-400 uppercase">
                About Author
              </p>

              <h3 className="text-xl font-semibold text-blue-500">
                {author?.name ||
                  "Unknown Author"}
              </h3>

              <p className="text-gray-400 mt-1">
                More Posts By{" "}
                {author?.name || "Author"}
              </p>

            </div>

          </div>

          {/* Previous / Next */}

          <div className="flex gap-8">

            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="
                  flex
                  items-center
                  gap-2
                  p-4
                  py-2
                  rounded-2xl!
                  font-extrabold!
                  text-white
                  hover:text-blue-500
                  transition
                  no-underline!
                  bg-[#061B47]
                "
              >
                Previous Blog
              </Link>
            )}

            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="
                  flex
                  items-center
                  gap-2
                  p-4
                  py-2
                  rounded-2xl!
                  font-extrabold!
                  text-white
                  hover:text-blue-500
                  transition
                  no-underline!
                  bg-[#061B47]
                "
              >
                Next Blog
              </Link>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}