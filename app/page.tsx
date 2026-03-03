import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="h-[200vh] bg-neutral-900 flex items-center justify-center text-white">
        Scroll Down
      </section>
    </>
  );
}