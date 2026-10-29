
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const API_URL =
  "https://whoppingseo.com/old/wp-json/wp/v2/posts";

export default function BlogFallbackClient() {
  const [slug, setSlug] = useState("");
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get the slug from /blog/your-post-slug/
  useEffect(() => {
    const parts = window.location.pathname
      .split("/")
      .filter(Boolean);

    if (parts.length === 2 && parts[0] === "blog") {
      setSlug(decodeURIComponent(parts[1]));
    } else {
      setError("Invalid blog URL.");
      setLoading(false);
    }
  }, []);

  // Fetch the post using its slug.
  useEffect(() => {
    if (!slug) return;

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
          throw new Error("Failed to fetch post.");
        }

        const data = await response.json();
        const foundPost = Array.isArray(data) ? data[0] : null;

        if (!foundPost) {
          setPost(null);
          setError("Blog post not found.");
          return;
        }

        setPost(foundPost);

        // Update the browser tab title.
        document.title =
          (foundPost.yoast_head_json?.title ||
            foundPost.title?.rendered?.replace(/<[^>]*>/g, "") ||
            "Blog") + " | Whopping SEO";
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
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
        <p className="mt-4">
          <a href="/blog/" className="text-blue-500">
            Back to Blogs
          </a>
        </p>
      </div>
    );
  }

  const image =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <article className="container mx-auto max-w-5xl px-4 py-16">
      <a href="/blog/" className="text-blue-500 mb-6 inline-block">
        &larr; Back to Blogs
      </a>

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
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover rounded-xl"
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
