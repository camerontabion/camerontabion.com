import { createFileRoute } from "@tanstack/react-router";
import Hero from "~/app/Hero";
import Projects from "~/app/Projects";
import Skills from "~/app/Skills";
import Footer from "~/components/Footer";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <main className="relative flex w-full flex-col gap-28 overflow-hidden p-8 py-14 text-white md:gap-32 md:py-28">
      <div className="pointer-events-none absolute inset-0 z-10 size-full animate-fade-out bg-black motion-reduce:animate-none motion-reduce:opacity-0" />
      <div className="-z-10 absolute inset-0 size-full animate-pulse-background bg-[url('/star.png')] bg-center bg-size-[48px] bg-repeat motion-reduce:animate-none" />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
