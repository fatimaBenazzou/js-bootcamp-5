import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1>404 – Page Not Found</h1>
      <p>We couldn’t find what you’re looking for.</p>
      <Link href="/" className="text-blue-600">
        Go home
      </Link>
    </div>
  );
}
