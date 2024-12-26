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

  const skills = {
    "Programming Languages": [
      "Python",
      "MySQL",
      "C++",
      "C",
      "TypeScript",
      "HTML",
      "CSS",
      "Liquid"
    ],
    "Libraries": [
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib"
    ],
    "Software": [
      "Git",
      "GitHub",
      "Figma",
      "Jupyter Notebook",
      "Visual Studio Code",
      "Shopify",
      "Tableau"
    ]
  }

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

        {/* Skills Section */}
        <div className="min-h-screen">
          <div className="p-8 md:p-12">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div key={category} className="mb-20">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                  className="text-black text-2xl md:text-3xl mb-8 font-medium"
                >
                  {category}
                </motion.h3>
                <div className="space-y-4">
                  {skillList.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: (categoryIndex * skillList.length + index) * 0.1 
                      }}
                    >
                      <h4 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-black satoshi-black hover:text-gray-600 transition-colors cursor-default">
                        {skill}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


