import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-950"></div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
        <span className="block">Hi, I'm </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Mxolisi Mazwi Ngema</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-8">
        I'm a full-stack developer specializing in building exceptional digital experiences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
        >
          <Link href="#projects">View My Work</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-300 hover:bg-slate-800">
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-slate-300 hover:text-white">
          <ArrowDown className="h-8 w-8" />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </section>
  )
}
