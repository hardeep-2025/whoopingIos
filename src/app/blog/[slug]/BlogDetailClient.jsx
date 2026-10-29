
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const API_URL =
  "https://whoppingseo.com/old/wp-json/wp/v2/posts";

export default function BlogDetailClient({ slug }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPost() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `${API_URL}?slug=${encodeURIComponent(slug)}&_embed`,
          {
            signal: controller.signal,
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blog post");
        }

        const posts = await response.json();

        if (!posts.length) {
          setError("Blog post not found.");
          setPost(null);
          return;
        }

        setPost(posts[0]);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Unable to load this blog post.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPost();

    return () => controller.abort();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto py-20 text-center">
        Loading blog...
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto py-20 text-center">
        {error || "Blog post not found."}
      </div>
    );
  }

  const image =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <article className="container mx-auto max-w-5xl px-4 py-16">
      <h1
        className="text-3xl md:text-5xl font-bold mb-8"
        dangerouslySetInnerHTML={{
          __html: post.title?.rendered || "",
        }}
      />

      {image && (
        <div className="relative w-full h-[250px] md:h-[500px] mb-8">
          <Image
            src={image}
            alt={post.title?.rendered || "Blog"}
            fill
            unoptimized
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>
      )}

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{
          __html: post.content?.rendered || "",
        }}
      />
    </article>
  );
}
