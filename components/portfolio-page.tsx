'use client'

import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'


export default function PortfolioPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const skills = {
    "01    PROGRAMMING LANGUAGES": [
      "Python",
      "MySQL",
      "C++",
      "C",
      "TypeScript",
      "HTML",
      "CSS",
      "Liquid"
    ],
    "02    LIBRARIES": [
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib"
    ],
    "03    SOFTWARE": [
      "Git",
      "GitHub",
      "Figma",
      "Jupyter Notebook",
      "Visual Studio Code",
      "Shopify",
      "Tableau"
    ]
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 p-8 md:p-12 flex flex-col">
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
            Mexican-American founder, Web Developer [ specializing in creating responsive, user-focused websites ] and Data Analyst [ leveraging machine learning to drive data-driven insights and smarter decisions ]
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
        <div className="min-h-screen w-full">
          <div className="p-4 md:p-12">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-24">
                <motion.button
                  onClick={() => toggleSection(category)}
                  className="w-full text-left group flex items-center justify-between"
                  whileHover={{ x: 40 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="text-7xl sm:text-8xl md:text-9xl xl:text-[12rem] font-black tracking-tighter text-black satoshi-black leading-none">
                    {category}
                  </h2>
                  <motion.div
                    initial={false}
                    animate={{ rotate: expandedSection === category ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-12 h-12 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {expandedSection === category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-12 pl-8 space-y-8">
                        {skillList.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <h3 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter text-black satoshi-black hover:text-gray-600 transition-colors cursor-default">
                              {skill}
                            </h3>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="min-h-screen w-full relative">
          <div className="absolute inset-0">
            <Image
              src="/images/Contact-bg.jpg"
              alt="Contact Background"
              fill
              className="object-cover"
              priority
              quality={100}
            />

          </div>

          <div className="relative z-10 p-4 md:p-12 flex flex-col justify-center min-h-screen">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <div className="flex items-left space-x-4" >
                  <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white satoshi-black">
                    Drop me a line at
                  </h2>
                  <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white satoshi-black hover:text-gray-300 transition-colors">
                    [ 669 291 4111 ]
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white satoshi-blackk">
                  or email me at
                </h2>

                <div className="flex items-left space-x-4" >
                  <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white satoshi-black hover:text-gray-300 transition-colors">
                    [ ADAXGONZ ] AT
                  </p>
                  <p style={{ color: "#495cd5" }} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-blue satoshi-black hover:text-gray-300 transition-colors">
                    [ UCSC.EDU ]
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
