import Link from "next/link";

export default function About() {
  return (
    <div
      style={{
        height: "calc(100% - 80px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>About Us</h1>
      <p>
        Visit <Link href="/about/me/jjung">HERE</Link>
      </p>
    </div>
  );
}
