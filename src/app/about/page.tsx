import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>About Us</h1>
      <p>
        Visit{" "}
        <Link href="http://google.com" target="_blank">
          HERE
        </Link>
      </p>
    </>
  );
}
