import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>About Us</h1>
      <p>
        Visit{" "}
        <Link href="/about/me/jjung">
          HERE
        </Link>
      </p>
    </>
  );
}
