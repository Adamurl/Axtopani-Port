'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, Palette, Database, ExternalLink } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import Image from 'next/image'

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all")
  
  const projects = [
    {
      title: "Web Development",
      description: "Full-stack applications built with modern technologies",
      icon: <Globe className="w-6 h-6 text-white" />,
      category: "web",
      className: "md:col-span-2 md:row-span-2",
      link: "/web-development"
    },
    {
      title: "Graphic Design", 
      description: "Brand identity and visual design projects",
      icon: <Palette className="w-6 h-6 text-white" />,
      category: "design",
      className: "md:col-span-1 md:row-span-1",
      link: "/graphic-design"
    },
    {
      title: "Data Science",
      description: "Data analysis and machine learning projects",
      icon: <Database className="w-6 h-6 text-white" />,
      category: "data",
      className: "md:col-span-1 md:row-span-1",
      link: "/data-science"
    }
  ]

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 min-h-screen p-8 md:p-12 flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm text-black">©2024</span>
        </div>
        <header className="mb-8">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-black satoshi-black break-words">ADAM AXTOPANI GONZALES</h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-2 tracking-wide satoshi-regular">
            [ a-ksht-oh-pan-ee ]
          </p>
        </header>

        {/* Bio Section */}
        <div className="mb-12">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter text-black satoshi-black">
            Mexican-American founder, Web Developer [ specializing in creating responsive, user-focused websites ] and Data Analyst [ specializing in creating responsive, user-focused websites ]
          </p>
        </div>

        {/* Split Image Section */}
        <div className="grid grid-cols-2 gap-0 mb-12 h-screen -mx-8 md:-mx-12">
          <div className="relative overflow-hidden">
            <Image
              src="/images/design.jpg"
              alt="Design Background"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white satoshi-black">DESIGN</h2>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/data.jpg"
              alt="Data Background"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white satoshi-black">DATA</h2>
            </div>
          </div>
        </div>

        <div className="rounded-t-[3rem] flex-grow p-6 relative overflow-hidden min-h-screen">
          <div className="absolute inset-0">
            <Image
              src="/images/main-bg-2.jpg"
              alt="Background"
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/30 shadow-[inset_0_0_50px_rgba(0,0,0,1)]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="backdrop-blur-md bg-white/10 border border-white/20">
                <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                  All Work
                </TabsTrigger>
                <TabsTrigger value="web" onClick={() => setActiveTab("web")}>
                  Web Development
                </TabsTrigger>
                <TabsTrigger value="design" onClick={() => setActiveTab("design")}>
                  Graphic Design
                </TabsTrigger>
                <TabsTrigger value="data" onClick={() => setActiveTab("data")}>
                  Data Science
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredProjects.map((project, index) => (
                <Link href={project.link} key={project.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative overflow-hidden rounded-3xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20 p-6 ${project.className}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                        {project.icon}
                      </div>
                      <ExternalLink className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-200 group-hover:text-white transition-colors">
                      {project.description}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Added Additional Sections */}
            <div className="mt-16 space-y-16">
              {/* About Section */}
              <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">About My Process</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Research & Planning</h3>
                    <p>Understanding client needs and creating detailed project roadmaps for success.</p>
                  </div>
                  <div className="text-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Development</h3>
                    <p>Building scalable solutions using cutting-edge technologies and best practices.</p>
                  </div>
                  <div className="text-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Testing & Deployment</h3>
                    <p>Rigorous testing and smooth deployment processes for reliable products.</p>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Technical Skills</h2>
                <div className="grid md:grid-cols-4 gap-4">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'SQL', 'AWS', 'Docker'].map((skill) => (
                    <div key={skill} className="bg-white/10 rounded-xl p-4 text-white text-center hover:bg-white/20 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
