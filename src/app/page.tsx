import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

export default function App() {
  return (
    <main className="relative flex w-full flex-col gap-24 overflow-hidden p-8 text-white md:py-24">
      <div className="-z-10 absolute inset-0 size-full animate-pulse-background bg-[url('/star.png')] bg-center bg-size-[48px] bg-repeat" />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
