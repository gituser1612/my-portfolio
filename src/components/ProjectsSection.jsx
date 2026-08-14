import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Jesko Jet Clone",
        description: "Cloned the Jesko Jet website and recreated its premium automotive experience with modern UI, immersive visuals, smooth interactions, and responsive design.",
        image: "/projects/Jesko-Jet_Project.png",
        tags: ["NextJS", "TailwindCSS", "Framer Motion"],
        demoUrl: "https://jesko-jet.vercel.app/",
        githubUrl: "https://github.com/gituser1612/jesko-jet",
    },
    {
        id: 2,
        title: "Seat Mentor",
        description: "Designed and developed a modern medical admission consultancy website with a clean, responsive interface and user-focused experience.",
        image: "/projects/Seat-mentor_Project.png",
        tags: ["React", "TailwindCSS", "Google Analytics", "Supabase"],
        demoUrl: "https://seatmentor.com",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Business Website",
        description: "A responsive hospitality services website designed and developed from the ground up, combining modern UI design, smooth interactions, responsive layouts, and a professional brand experience.",
        image: "/projects/accentric_project.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "https://accentrichospitality.com",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "AuraOn Wellness",
        description: "I designed and developed the website with a clean, responsive interface focused on delivering a seamless user experience across devices.",
        image: "/projects/Auraon_Project.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "https://auraonwellness.com",
        githubUrl: "#",
    },
    {
        id: 5,
        title: "Video Compressor",
        description: "A modern web-based video compression tool designed to simplify video file-size reduction through a clean, intuitive, and responsive interface",
        image: "/projects/video-compressor.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "https://video-compress-virid.vercel.app/",
        githubUrl: "#",
    },
    {
        id: 6,
        title: "Machine Learning Model",
        description: "An ML-powered web application that predicts students’ Maths scores from demographic and academic performance data through a simple, interactive interface.",
        image: "/projects/ml-model.png",
        tags: ["Python", "Flask", "AWS"],
        demoUrl: "https://d21hgeoj3jfsgr.cloudfront.net/predictdata",
        githubUrl: "#",
    }


]

const ProjectsSection = () => {
    console.log(projects.image)
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="w-[90%] max-w-[1600px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Features <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects, Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg  overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden ">

                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2  mb-4 ">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium  border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                <h3 className="text-xl font-semibold mb-1 ">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3 ">
                                        <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank"><ExternalLink size={20} /></a>
                                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank"><Github size={20} /></a>


                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="text-center mt-12 ">
                    <a className="cosmic-button w-fit flex items-center  mx-auto gap-2" target="_blank" href="https://github.com/gituser1612">Check My Github <ArrowRight size={16} /></a>
                </div>
            </div>

        </section>
    )
}

export default ProjectsSection