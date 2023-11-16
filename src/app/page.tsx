import homestyles from "./page.module.css";
import About from "@/components/about";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className={homestyles.main}>
      <Hero />
      {/* <About /> */}
    </main>
  );
}
