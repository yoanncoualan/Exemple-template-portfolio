export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-20 py-5 lg:py-6 backdrop-blur-sm bg-[#0f0a1e]/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-white text-2xl lg:text-3xl font-normal hover:text-purple-400 transition-colors">
          て
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 lg:gap-12">
          <a
            href="#about"
            className="text-white/90 text-sm font-medium hover:text-purple-400 transition-colors"
          >
            About
          </a>
          <a
            href="#xp"
            className="text-white/90 text-sm font-medium hover:text-purple-400 transition-colors"
          >
            Experiences
          </a>
          <a
            href="#projects"
            className="text-white/90 text-sm font-medium hover:text-purple-400 transition-colors"
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}
