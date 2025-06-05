import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Palette, Server } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8 text-emerald-500" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-emerald-500" />,
      skills: ["Node.js", "Python", "Django", "RESTful APIs"],
    },
    {
      id: 3,
      title: "Database",
      icon: <Database className="h-8 w-8 text-emerald-500" />,
      skills: ["PostgreSQL", "MySQL"],
    },
    {
      id: 4,
      title: "UI/UX Design",
      icon: <Palette className="h-8 w-8 text-emerald-500" />,
      skills: ["Figma", "Adobe XD", "Responsive Design", "User Research"],
    },
    {
      id: 5,
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-emerald-500" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java"],
    }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">My Skills</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's a quick overview of my
            technical skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.id} className="border border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3 text-slate-900 dark:text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
