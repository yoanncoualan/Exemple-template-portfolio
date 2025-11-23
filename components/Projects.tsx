import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  imagePosition?: "left" | "right";
}

function ProjectCard({ title, description, imagePosition = "right" }: ProjectProps) {
  const isLeft = imagePosition === "left";

  return (
    <div className={`flex flex-col ${isLeft ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-24 items-center mb-32 lg:mb-40`}>
      {/* Project Info */}
      <div className="flex-1 w-full">
        <div className="mb-3">
          <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">
            Featured Project
          </span>
        </div>
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-8">
          {title}
        </h3>
        <div className="bg-[#1a1033]/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-purple-500/10 mb-8 lg:mb-10 shadow-xl relative z-10">
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex gap-4 lg:gap-5">
          <Link
            href="#"
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#1a1033] border border-purple-500/20 flex items-center justify-center hover:bg-purple-600/20 hover:border-purple-500/40 transition-all group"
            aria-label="Link"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Project Image/Mockup */}
      <div className="flex-1 w-full relative group">
        {/* Glow effect behind image */}
        <div className="absolute inset-0 bg-purple-600/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative bg-[#1a1033] rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500 border border-white/5">
          {/* Browser window mockup */}
          <div className="bg-[#0f0a1e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="h-5 bg-white/5 rounded-md w-full max-w-sm mx-auto"></div>
            </div>
          </div>

          {/* Content preview */}
          <div className="p-8 lg:p-12 bg-white min-h-[300px] lg:min-h-[380px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
            
            <div className="relative z-10 text-center text-gray-400 w-full">
              <div className="w-3/4 mx-auto aspect-video bg-white shadow-lg rounded-lg mb-6 flex items-center justify-center border border-gray-100">
                 {/* Placeholder for project screenshot */}
                 <div className="space-y-2 w-1/2">
                   <div className="h-2 bg-gray-100 rounded w-3/4 mx-auto"></div>
                   <div className="h-2 bg-gray-100 rounded w-1/2 mx-auto"></div>
                 </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-medium tracking-wide">
                PROJECT PREVIEW
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Example Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top tracks, top artists, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      imagePosition: "right" as const,
    },
    {
      title: "Example Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top tracks, top artists, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      imagePosition: "left" as const,
    },
  ];

  return (
    <section className="py-24 lg:py-28 px-6 lg:px-20" id="projects">
      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imagePosition={project.imagePosition}
          />
        ))}
      </div>
    </section>
  );
}
