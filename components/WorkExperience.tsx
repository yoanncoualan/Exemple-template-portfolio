import Link from "next/link";

interface ExperienceCardProps {
  icon: string;
  title: string;
  description: string;
  iconBg?: string;
}

function ExperienceCard({ icon, title, description, iconBg = "from-purple-600/20 to-purple-700/10" }: ExperienceCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-[#1a1033] to-[#2d1b4e] rounded-3xl p-6 lg:p-8 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-purple-900/20">
      <div className="flex items-start gap-5">
        {/* Icon */}
        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center flex-shrink-0 border border-white/5 shadow-inner`}>
          <span className="text-2xl lg:text-3xl filter drop-shadow-lg">{icon}</span>
        </div>

        <div className="flex-1 min-w-0 pt-1">
          <h3 className="text-white font-bold text-lg lg:text-xl mb-2 tracking-wide">
            {title}
          </h3>
          <p className="text-gray-400 text-xs lg:text-sm leading-relaxed mb-6 font-light">
            {description}
          </p>
          <Link href="#" className="text-purple-400 text-xs font-bold tracking-widest hover:text-purple-300 transition-colors inline-flex items-center gap-2 uppercase">
            Learn More
            <span className="text-lg leading-none mb-0.5">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  const experiences = [
    {
      icon: "📱",
      title: "Expérience 1",
      description: "Description de l'expérience 1",
      iconBg: "from-purple-600/20 to-purple-700/10",
    },
    {
      icon: "💬",
      title: "Expérience 2",
      description: "Description de l'expérience 2",
      iconBg: "from-orange-600/20 to-orange-700/10",
    },
    {
      icon: "🔔",
      title: "Expérience 3",
      description: "Description de l'expérience 3",
      iconBg: "from-purple-600/20 to-purple-700/10",
    },
    {
      icon: "🔐",
      title: "Expérience 4",
      description: "Description de l'expérience 4",
      iconBg: "from-purple-600/20 to-purple-700/10",
    },
  ];

  return (
    <section className="py-16 lg:py-20 px-6 lg:px-20" id="xp">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-10 lg:mb-12">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              icon={exp.icon}
              title={exp.title}
              description={exp.description}
              iconBg={exp.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
