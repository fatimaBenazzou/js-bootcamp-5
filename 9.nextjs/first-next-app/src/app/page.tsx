import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <Link href="/about" className="text-blue-600 hover:underline">
        Learn more →
      </Link>
    </main>
  );
}
