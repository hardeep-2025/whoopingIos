import BlogClient from "../../BlogClient";

const API_URL =
  "https://whoppingseo.com/old/wp-json/wp/v2/posts";

async function getTotalPages() {
  try {
    const res = await fetch(
      `${API_URL}?per_page=1&_fields=id`
    );

    if (!res.ok) {
      return 1;
    }

    return Number(
      res.headers.get("X-WP-TotalPages")
    ) || 1;
  } catch (error) {
    console.error(
      "Error getting total blog pages:",
      error
    );

    return 1;
  }
}

export async function generateStaticParams() {
  const totalPages = await getTotalPages();

  return Array.from(
    {
      length: Math.max(totalPages - 1, 0),
    },
    (_, index) => ({
      page: String(index + 2),
    })
  );
}

export default async function BlogPaginationPage({
  params,
}) {
  const { page } = await params;

  return <BlogClient page={Number(page)} />;
}
