
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const API_URL =
  "https://whoppingseo.com/old/wp-json/wp/v2/posts";

export default function BlogClient() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Read pagination from the URL.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = Number(params.get("page")) || 1;

    setCurrentPage(Math.max(1, page));
  }, []);

  // Fetch WordPress posts in the browser.
  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `${API_URL}?_embed&page=${currentPage}&per_page=12`,
          {
            signal: controller.signal,
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Unable to fetch blog posts.");
        }

        const data = await response.json();

        setPosts(Array.isArray(data) ? data : []);
        setTotalPages(
          Number(response.headers.get("X-WP-TotalPages")) || 1
        );
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setError("Unable to load blogs. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPosts();

    return () => controller.abort();
  }, [currentPage]);

  function changePage(page) {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    const url =
      page === 1
        ? "/blog/"
        : `/blog/?page=${page}`;

    window.history.pushState({}, "", url);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {/* BANNER */}
      <div className="banner relative h-[500px] overflow-hidden flex items-center justify-center">
        <Image
          src="/whoppingreact/blog/bg.png"
          alt="Blogs"
          fill
          priority
          unoptimized
          className="-z-10 object-cover object-center"
        />

        <div className="container mx-auto relative z-10">
          <section className="flex flex-col items-center justify-center gap-3 text-white text-center">
            <h1 className="text-[22px] md:text-[45px] font-bold border-b border-white pb-2">
              Home * <span className="text-[#1A98FF]">Blogs</span>
            </h1>

            <h2 className="pt-2 font-extrabold text-center text-3xl md:text-[45px]">
              Stay Ahead With Whopping SEO&apos;s Expert Blog
            </h2>
          </section>
        </div>
      </div>

      {/* BLOG LIST */}
      <div className="container mx-auto px-4 py-16">
        {loading ? (
          <p className="text-center py-10">
            Loading blogs...
          </p>
        ) : error ? (
          <div className="text-center py-10">
            <p>{error}</p>
            <button
              onClick={() => changePage(currentPage)}
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded"
            >
              Retry
            </button>
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center py-10">
            No blogs found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {posts.map((post) => {
              const image =
                post?._embedded?.["wp:featuredmedia"]?.[0]
                  ?.source_url;

              return (
                <article
                  key={post.id}
                  className="border rounded-xl overflow-hidden shadow"
                >
                  {image && (
                    <div className="relative w-full h-[250px]">
                      <Image
                        src={image}
                        alt={post.title?.rendered || "Blog"}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="p-4">
                    <h2
                      className="text-[18px]! font-semibold!"
                      dangerouslySetInnerHTML={{
                        __html: post.title?.rendered || "",
                      }}
                    />

                    <div
                      className="text-white mt-3 text-[14px] font-medium"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt?.rendered || "",
                      }}
                    />

                    <a
                      href={`/blog/${encodeURIComponent(post.slug)}/`}
                      className="inline-block text-[15px] font-bold mt-4 text-blue-500"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* PAGINATION */}
        {!loading && !error && totalPages > 1 && (
          <div className="flex items-center gap-2 mt-10 justify-center flex-wrap">
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage <= 1}
              className="px-4 py-2 bg-black text-white disabled:opacity-40"
            >
              Prev
            </button>

            {Array.from(
              { length: Math.min(totalPages, 5) },
              (_, i) => i + 1
            ).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => changePage(pageNumber)}
                className={`px-3 py-2 ${
                  pageNumber === currentPage
                    ? "bg-[#3B1EFF] text-white"
                    : "bg-[#222] text-white"
                }`}
              >
                {pageNumber}
              </button>
            ))}

            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className="px-4 py-2 bg-black text-white disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}
