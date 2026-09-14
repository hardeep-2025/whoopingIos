import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
      <div className="text-center">
        <div style={{ fontSize: "105px", fontWeight: "700" }}>404</div>

<p style={{ fontSize: "45px", marginTop: "16px" }}>
  Oops! Page Not Found
</p>
        <Link
          href="/"
          className="mt-6 inline-block text-white! px-6! py-3! bg-blue-600 rounded-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}