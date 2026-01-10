import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500">
              <Image src="/image-1.jpeg?height=320&width=320" alt="Mxolisi Ngema" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">About Me</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              Hello! I'm Mxolisi Ngema, a passionate full-stack developer based in South Africa. I enjoy creating things
              that live on the internet, whether that be websites, applications, or anything in between.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              I have completed my Information Technology studies at Richfield Graduate Institute of Technology, specialising in Software Development.
              My recent work and learning have focused on building practical, data-driven and web-based solutions, with an emphasis on clean design, performance, and real-world impact.
            </p>
            <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
              <a href="/MXOLISI_NGEMA_CV.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
