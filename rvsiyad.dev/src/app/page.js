import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

/**
 * Home page for the one-page portfolio. Sections are composed here as they
 * are built out.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-5 sm:px-8">
        <Hero />
        <About />
      </main>
    </>
  );
}
