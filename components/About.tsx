import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main heading with cursor effect */}
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
          I&apos;m a Software Engineer.
          <span className="inline-block w-0.5 h-7 lg:h-10 bg-purple-400 ml-2 animate-pulse align-middle"></span>
        </h2>

        {/* Current position */}
        <p className="text-white/90 text-base lg:text-lg mb-6">
          Currently, I&apos;m a Software Engineer at{" "}
          <Link href="https://www.facebook.com/" className="text-purple-400 font-medium" target="_blank">@Facebook</Link>.
        </p>

        {/* Description */}
        <p className="text-gray-400/90 text-sm lg:text-base leading-relaxed max-w-4xl">
          A self-taught UI/UX designer, functioning in the industry for{" "}
          <span className="text-white/90 font-medium">3+ years</span> now.{" "}
          I make meaningful and delightful digital products that create an equilibrium
          between user needs and business goals.
        </p>
      </div>
    </section>
  );
}
