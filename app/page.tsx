import Image from "next/image";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <h1>Hi from Home</h1>
      <Footer/>
    </div>
  );
}
