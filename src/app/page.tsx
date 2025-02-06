import homestyles from "./page.module.css";
import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import Objective from "@/components/objective/objective";
import Gallery from "@/components/gallery/gallery";

export default function Home() {
  return (
    <main className={homestyles.main}>
      <Hero />
      <About />
      <Objective />
      <Gallery />
    </main>
  );
}
