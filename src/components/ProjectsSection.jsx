import { ArrowRight, ExternalLink, Github, Play } from "lucide-react";

const projects = [
  // Description harus 3 baris
  {
    id: 1,
    title: "Elweha",
    description: `A financial management website designed to support the business operations of PT Elweha Nusantara.`,
    image: "/projects/elweha.png",
    tags: ["React", "Vite", "TailwindCSS", "Typescript"],
    demoUrl: "#",
    githubUrl: "https://github.com/ibrahimmm999/Elweha",
    type: "web",
  },
  {
    id: 2,
    title: "Gen-S",
    description:
      "A mobile app designed to facilitate and inspire Islamic dawah. Audio player, Playlist, Image Gallery for enhanced visualization.",
    image: "/projects/gens.png",
    tags: ["Flutter", "Provider", "Audio Player", "Laravel"],
    demoUrl: "https://play.google.com/store/search?q=gen-s&c=apps&hl=id",
    githubUrl: "https://github.com/ibrahimmm999/gen_s",
    type: "mobile",
  },
  {
    id: 3,
    title: "GSIS Website",
    description: "A Website for Ganesha Student Innovation Summit Event.",
    image: "/projects/gsis.png",
    tags: ["React", "TailwindCSS", "Laravel"],
    demoUrl: "https://ganeshasummit.com/",
    githubUrl: "https://github.com/ibrahimmm999/frontend-gsis",
    type: "web",
  },
  {
    id: 4,
    title: "MindMe",
    description:
      "Mobile App for mentah health. Social, Articles, Videos, and Consultants. Available on Google Play Store.",
    image: "/projects/mindme.png",
    tags: ["Flutter", "Firebase"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.algod.mindme",
    githubUrl: "https://github.com/ibrahimmm999/MindMe-INVFEST",
    type: "mobile",
  },
  {
    id: 5,
    title: "Sparta HMIF ITB 2022",
    description:
      "Website for the initial stage of the orientation program for new members of HMIF ITB.",
    image: "/projects/sparta.png",
    tags: ["NextJS", "Prisma"],
    demoUrl: "#",
    githubUrl: "https://github.com/ibrahimmm999/Web-Sparta-2022",
    type: "web",
  },
  {
    id: 6,
    title: "SiMenTel",
    description:
      "A Website specifically designed to manage and monitor maintenance and facilities within a hostel.",
    image: "/projects/simentel.png",
    tags: ["ReactJS", "Typescript", "Supabase"],
    demoUrl: "https://simentel.vercel.app/",
    githubUrl: "https://github.com/ibrahimmm999/SiMenTel",
    type: "web",
  },
  {
    id: 7,
    title: "Moodly",
    description:
      "Mobile App for mood tracker and chat consultation about mental health.",
    image: "/projects/moodly.png",
    tags: ["Flutter", "Firebase"],
    demoUrl:
      "https://drive.google.com/file/d/1rdvxQPjS37RwTtx2gbgE_krvZ8ZTqXRf/view?usp=sharing",
    githubUrl: "https://github.com/ibrahimmm999/Moodly",
    type: "mobile",
  },
  {
    id: 8,
    title: "KataKatamu",
    description:
      "Mobile app that aims to assist in communication for individuals who are deaf and hard of hearing.",
    image: "/projects/katakatamu.png",
    tags: ["Flutter"],
    demoUrl:
      "https://drive.google.com/file/d/1rR4REUbrm3w3uvyzIMCC7bvux59lEpHV/view?usp=sharing",
    githubUrl: "https://github.com/ibrahimmm999/KataKatamu",
    type: "mobile",
  },
  {
    id: 9,
    title: "Grocer.io",
    description:
      "An e-commerce website platform specializing in the sale of fresh vegetables and quality food ingredients.",
    image: "/projects/grocerio.png",
    tags: ["React", "Typescript", "Supabase"],
    demoUrl: "https://grocerio.vercel.app/",
    githubUrl: "https://github.com/ibrahimmm999/grocer.io",
    type: "web",
  },
  {
    id: 9,
    title: "Laundry App",
    description: "Application for laundry management.",
    image: "/projects/laundryapp.png",
    tags: ["Flutter", "Firebase"],
    demoUrl:
      "https://drive.google.com/file/d/1BsfR9jV5fyVL-QTR7pcJ6oO95HmdTclZ/view?usp=sharing",
    githubUrl: "https://github.com/ibrahimmm999/laundry-app-flutter",
    type: "mobile",
  },
  {
    id: 10,
    title: "MIND",
    description:
      "Application developed using Design Thinking to help students and young people practice self-love and care for their mental health.",
    image: "/projects/mind.png",
    tags: ["Flutter", "Firebase"],
    demoUrl:
      "https://drive.google.com/file/d/1zgzPY65Pi0-yWtqmkZmCLeJdVOmjuoZn/view?usp=sharing",
    githubUrl: "https://github.com/ibrahimmm999/Milestone02_K14",
    type: "mobile",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    {project.demoUrl === "#" ? (
                      <></>
                    ) : (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        {project.type === "web" ? (
                          <ExternalLink size={20} />
                        ) : (
                          <Play size={20} />
                        )}
                      </a>
                    )}
                    {project.githubUrl === "#" ? (
                      <></>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ibrahimmm999"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
