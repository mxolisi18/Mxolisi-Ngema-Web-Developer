import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Khabalidaka UpRising",
      description: "Khabalidaka UpRising is a professional business website showcasing an agricultural company focused on sustainable farming, skills development, and community empowerment.",
      image: "/Khabalidaka.png?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript", "C#", "ASP.NET"],
      githubLink: "https://github.com/mxolisi18",
      liveLink: "https://khabalidakauprising.co.za/",
    },

        {
      id: 2,
      title: "Crime Reporting System",
      description: "Crime Reporting System is a web application that allows community members to report crimes anonymously, promoting safety by enabling reporting without fear or judgment.",
      image: "/image.png?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      githubLink: "https://github.com/mxolisi18/Crime-Pulse",
      liveLink: "https://github.com/mxolisi18/Crime-Pulse",
    },
    
    {
      id: 3,
      title: "Tic Tac Toe",
      description: "A simple Tic Tac Toe game built with HTML, CSS and JavScript.",
      image: "/tic-tac-toe.png?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/mxolisi18/tic-tac-toe",
      liveLink: "https://github.com/mxolisi18",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">My Projects</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new
            technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  <Github className="h-4 w-4 mr-1" />
                  Source Code
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
