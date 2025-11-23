interface TechIconProps {
  name: string;
  bgColor?: string;
}

function TechIcon({ name, bgColor = "bg-purple-600/10" }: TechIconProps) {
  return (
    <div
      className={`px-2 h-11 lg:h-12 rounded-lg ${bgColor} border border-purple-500/25 flex items-center justify-center hover:scale-110 hover:border-purple-500/40 transition-all cursor-pointer`}
      title={name}
    >
      {/* Icon placeholder - replace with actual tech icons */}
      <div className="px-4 h-6 lg:h-7 bg-gradient-to-br from-gray-400/40 to-gray-500/30 rounded">{name}</div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading text */}
        <p className="text-white/90 text-base lg:text-lg mb-2 font-medium">
          I&apos;m currently looking to join a{" "}
          <span className="text-purple-400 font-bold">cross-functional</span> team
        </p>
        <p className="text-white/60 text-sm lg:text-base mb-20 lg:mb-32">
          that values improving people&apos;s lives through accessible design
        </p>

        <div className="w-full h-full flex items-center justify-center flex-wrap gap-4">
          <div className="flex-col"><TechIcon name="Figma" /></div>
          <div className="flex-col"><TechIcon name="React" /></div>
          <div className="flex-col"><TechIcon name="Next.js" /></div>
          <div className="flex-col"><TechIcon name="TypeScript" /></div>
          <div className="flex-col"><TechIcon name="CSS3" /></div>
          <div className="flex-col"><TechIcon name="Tailwind" /></div>
          <div className="flex-col"><TechIcon name="Git" /></div>
          <div className="flex-col"><TechIcon name="VS Code" /></div>
          <div className="flex-col"><TechIcon name="Notion" /></div>
          <div className="flex-col"><TechIcon name="GitHub" /></div>
          <div className="flex-col"><TechIcon name="Webpack" /></div>
          <div className="flex-col"><TechIcon name="Slack" /></div>
        </div>
      </div>
    </section>
  );
}
