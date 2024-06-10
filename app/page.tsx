import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  console.log("실행중....");
  return (
    <main>
      <Header />
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
