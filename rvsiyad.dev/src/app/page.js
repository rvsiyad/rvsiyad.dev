import Navbar from "@/components/Navbar";

/**
 * Home page for the one-page portfolio. Sections are composed here as they
 * are built out.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-5 sm:px-8">
        <h1 className="py-32 text-3xl font-semibold tracking-tight">
          Roble Siyad
        </h1>
      </main>
    </>
  );
}
