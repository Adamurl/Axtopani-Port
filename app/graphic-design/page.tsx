'use client'

import { motion } from "framer-motion"
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function GraphicDesignPage() {
  // Three main project sections for the bento box layout
  const projects = [
    { 
      title: "Featured Work", // Main/largest project section
      className: "md:col-span-2 md:row-span-2",
      description: "Showcase your most important or impressive work here",
      images: [
        "/images/tochtli-totemockup.jpg",
        "/images/featured-2.jpg",
        "/images/featured-3.jpg"
      ]
    },
    { 
      title: "Recent Projects", // Medium-sized project section
      className: "md:col-span-2 md:row-span-1",
      description: "Display your recent or secondary projects"
    },
    { 
      title: "Highlights", // Smaller but significant project section
      className: "md:col-span-1 md:row-span-2",
      description: "Show additional notable works or achievements"
    }
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/web-bg-2.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/0" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <header className="max-w-[95vw] mx-auto pt-6">
          <Link href="/" className="inline-flex items-center text-sm hover:text-gray-300 transition-colors ml-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </header>

        <main className="max-w-6xl mx-auto mt-[75vh]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20 ${project.className}`}
              >
                <h3 className="text-xl font-semibold p-6 pb-2 text-white">{project.title}</h3>
                {project.title === "Featured Work" ? (
                  <div className="grid grid-cols-2 gap-4 px-6">
                    {project.images?.map((image, imageIndex) => (
                      <div key={imageIndex} className="relative aspect-square w-full rounded-xl overflow-hidden">
                        <Image
                          src={image}
                          alt={`Featured Work ${imageIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-[200px] mx-6 rounded-3xl bg-white/5 text-gray-200 backdrop-blur-sm">
                    Add {project.title} Images Here
                  </div>
                )}
                <p className="mt-4 p-6 pt-2 text-gray-200 group-hover:text-white transition-colors">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
