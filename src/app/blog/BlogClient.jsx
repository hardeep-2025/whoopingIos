import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const API_URL =
  "https://whoppingseo.com/old/wp-json/wp/v2/posts";

/* =========================================================
   FETCH BLOG POSTS
========================================================= */

async function getPosts(page = 1) {
  try {
    const res = await fetch(
      `${API_URL}?_embed&page=${page}&per_page=12&_fields=id,slug,title,excerpt,_links.wp:featuredmedia`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();

console.log(posts);
    const totalPages =
      Number(res.headers.get("X-WP-TotalPages")) || 1;

    return {
      posts: Array.isArray(posts) ? posts : [],
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);

    return {
      posts: [],
      totalPages: 1,
    };
  }
}

/* =========================================================
   BLOG PAGE
========================================================= */

export default async function BlogClient({ page = 1 }) {
  const currentPage = Math.max(
    1,
    Number(page) || 1
  );

  const {
    posts,
    totalPages,
  } = await getPosts(currentPage);


  

  
  return (
    <>
      {/* =====================================================
          BANNER
      ====================================================== */}

      <div className="banner relative h-[500px] overflow-hidden flex items-center justify-center">
        <Image
          src="/whoppingreact/blog/bg.png"
          alt="Blogs"
          fill
          priority
          className="-z-10 object-cover object-center"
        />

        <Container>
          <Row>
            <Col>
              <section
                className="
                  bannnerSection
                  w-full
                  h-[100%]!
                  flex
                  items-center
                  justify-center
                  flex-col
                  gap-3
                  text-white
                "
              >
                <div
                  className="
                    bannerHeading
                    font-bold
                    flex
                    flex-col
                    items-center
                    font-['Poppins']
                  "
                >
                  <h1
                    className="
                      text-[18px]!
                      border-b
                      border-[#FFFFFF]
                      leading-[38px]
                      md:text-[45px]
                      md:leading-[50px]
                      font-bold
                    "
                  >
                    Home *{" "}
                    <span className="text-[#1A98FF]">
                      Blogs
                    </span>
                  </h1>

                  <h2
                    className="
                      pt-[10px]
                      font-extrabold!
                      text-center
                      max-w-[80%]
                      text-[45px]!
                    "
                  >
                    Stay Ahead With Whopping SEO`s Expert Blog
                  </h2>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =====================================================
          BLOGS
      ====================================================== */}

      <div className="container mx-auto py-[6rem]">
        {posts.length === 0 ? (
          <div className="text-center py-10 text-white">
            No blogs found.
          </div>
        ) : (

          
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-6
              mt-10
            "
          >
            
            {posts.map((post) => {
              const image =
                post?._embedded?.["wp:featuredmedia"]?.[0]
                  ?.source_url;

              return (
               
                <div
                  key={post.id}
                  className="
                    border
                    rounded-xl
                    overflow-hidden
                    shadow
                  "
                >
                  {/* IMAGE */}

                  {image && (
                    <div className="relative w-full h-[250px]">
                      <Image
                        src={image}
                        alt={
                          post.title?.rendered ||
                          "Blog"
                        }
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* CONTENT */}

                  <div className="p-4">
                    {/* TITLE */}

                    <h2
                      className="
                        text-[18px]!
                        font-semibold!
                      "
                      dangerouslySetInnerHTML={{
                        __html:
                          post.title?.rendered ||
                          "",
                      }}
                    />

                    {/* EXCERPT */}

                    <div
                      className="
                        text-[#FFFFFF]
                        mt-3
                        text-[14px]!
                        font-medium!
                      "
                      dangerouslySetInnerHTML={{
                        __html:
                          post.excerpt?.rendered ||
                          "",
                      }}
                    />

                    {/* READ MORE */}

                    <Link
                      href={`/blog/${post.slug}`}
                      className="
                        inline-block
                        text-[15px]
                        no-underline!
                        font-bold
                        mt-4
                        text-blue-500
                      "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* =====================================================
            PAGINATION
        ====================================================== */}

        {totalPages > 1 && (
          <div
            className="
              flex
              items-center
              gap-2
              mt-10
              justify-center
              flex-wrap
            "
          >
            {/* PREVIOUS */}

            {currentPage > 1 && (
              <Link
                href={
                  currentPage - 1 === 1
                    ? "/blog/"
                    : `/blog/page/${currentPage - 1}/`
                }
                className="
                  px-4
                  py-2
                  bg-black
                  text-white
                  no-underline!
                  w-[80px]!
                  text-center
                "
              >
                Prev
              </Link>
            )}

            {/* PAGE NUMBERS */}

            {Array.from(
              {
                length: Math.min(totalPages, 5),
              },
              (_, i) => i + 1
            ).map((pageNumber) => (
              <Link
                key={pageNumber}
                href={
                  pageNumber === 1
                    ? "/blog/"
                    : `/blog/page/${pageNumber}/`
                }
                className={`
                  px-3
                  py-2
                  no-underline!
                  ${
                    pageNumber === currentPage
                      ? "bg-[#3B1EFF] text-white"
                      : "bg-[#222] text-white"
                  }
                `}
              >
                {pageNumber}
              </Link>
            ))}

            {/* NEXT */}

            {currentPage < totalPages && (
              <Link
                href={`/blog/page/${currentPage + 1}/`}
                className="
                  px-4
                  py-2
                  bg-black
                  text-white
                  no-underline!
                  w-[80px]!
                  text-center
                "
              >
                Next
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
}
