import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
          {/* Avatar with glow effect */}
          <div className="relative flex-shrink-0 order-first lg:order-last">
            {/* Purple glow background */}
            <div className="absolute inset-0 bg-purple-600/30 blur-[100px] scale-150 rounded-full"></div>

            {/* Avatar container */}
            <div className="relative w-48 h-48 lg:w-64 lg:h-64">
              {/* Character/Avatar */}
              <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl relative z-10">
                {/* Character emoji placeholder - replace with actual character illustration */}
                <div className="text-7xl lg:text-9xl transform translate-y-4">👨🏻‍💻</div>
              </div>
              
              {/* Floating elements/decorations could go here */}
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left z-10">
            {/* Greeting */}
            <div className="text-sm mb-6 lg:mb-7 relative inline-block">
              <span className="text-white/70">Hello! I Am </span>
              <span className="text-purple-400 font-medium">John Doe</span>
              
              {/* Arrow pointing to name */}
              <div className="absolute -top-6 -right-6 hidden lg:block">
                 <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/30 transform rotate-12">
                  <path d="M10 40 C 20 30, 25 10, 40 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M35 10 L 40 10 L 38 15" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-2 mb-6">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                An anonymous who<br />
                judges a book<br />
                by its
                <span className="relative inline-block">
                  <span className="text-purple-500 relative z-10">cover</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-600/30 -rotate-2 z-0"></span>
                </span>
                <span className="text-white">...</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="mb-5">
              <h2 className="text-xl lg:text-2xl text-white font-medium">
                I&apos;m a Software Engineer.
              </h2>
              <p className="text-white/60 text-sm mt-1">
                Currently, I&apos;m a Software Engineer at <Link href="https://www.facebook.com/" className="text-blue-400" target="_blank">Facebook</Link>
              </p>
            </div>

            {/* Bio Text */}
            <p className="text-gray-400 text-xs lg:text-sm max-w-lg leading-relaxed">
              A self-taught UI/UX designer, functioning in the industry for 3+ years now.
              I make meaningful and delightful digital products that create an equilibrium
              between user needs and business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
