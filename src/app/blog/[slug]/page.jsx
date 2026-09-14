import BlogSingleClient from "./BlogSingleClient";

const API_URL =
  "https://whoppingseo.com/old/wp-json/wp/v2/posts";

/*
|--------------------------------------------------------------------------
| Generate all blog slugs at build time
|--------------------------------------------------------------------------
*/

export async function generateStaticParams() {
  try {
    let allPosts = [];
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages) {
      const res = await fetch(
        `${API_URL}?per_page=100&page=${page}`,
         {
    cache: "no-store",
  }
      );

      if (!res.ok) {
        console.error(
          `Failed to fetch WordPress posts for page ${page}`
        );
        break;
      }

      const posts = await res.json();

      if (!Array.isArray(posts)) {
        break;
      }

      allPosts = [...allPosts, ...posts];

      totalPages =
        Number(res.headers.get("X-WP-TotalPages")) || 1;

      page++;
    }

    console.log(
      "Static blog pages generated:",
      allPosts.length
    );

    return allPosts
      .filter((post) => post?.slug)
      .map((post) => ({
        slug: post.slug,
      }));
  } catch (error) {
    console.error(
      "Error generating static blog params:",
      error
    );

    return [];
  }
}

/*
|--------------------------------------------------------------------------
| Metadata
|--------------------------------------------------------------------------
*/

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `${API_URL}?slug=${encodeURIComponent(slug)}`
      
    );

    if (!res.ok) {
      return {
        title: "Blog | Whopping SEO",
      };
    }

    const data = await res.json();
    //console.log(data);

    const post = Array.isArray(data) ? data[0] : null;

    if (!post) {
      return {
        title: "Blog | Whopping SEO",
      };
    }

    const title =
  post.yoast_head_json?.og_title || "Blog | Whopping SEO";

    return {
      title: title,
      description:
        post.yoast_head_json?.og_description
          ?.replace(/<[^>]*>/g, "")
          ?.trim() || "",
    };
  } catch (error) {
    return {
      title: "Blog | Whopping SEO",
    };
  }
}

/*
|--------------------------------------------------------------------------
| Single Blog Page
|--------------------------------------------------------------------------
*/

export default async function BlogSinglePage({ params }) {
  const { slug } = await params;

  return <BlogSingleClient slug={slug} />;
}