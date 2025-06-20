import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

export default async function App() {
  return (
    <main className="flex w-full flex-col gap-24 p-8 md:py-24">
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
