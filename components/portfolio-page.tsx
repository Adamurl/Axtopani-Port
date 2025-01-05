'use client'

import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import type { Works, WorkCategory} from '@/components/types/works'


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

  const works: Works = {
    tochtli: {
      sectionDescription: "Tochtli Cultural Wear is an Aztec-inspired clothing brand dedicated to celebrating and sharing the richness of Aztec culture" + 
                          " through modern designs. As the Founding Graphic Designer & Web Developer, I design visually compelling graphics for social media and marketing campaigns, boosting" + 
                          " online sales and community engagement. I also develop and maintain a responsive e-commerce website, ensuring a seamless shopping" + 
                          " experience for over 5,000 customers. By combining creativity and technical expertise, I aim to preserve cultural heritage while" + 
                          " delivering impactful and accessible designs.",
      projects: [
        {
          id: 1,
          title: "Tochtli Website",
          description: "Click to view",
          image: "/images/tochtli-mockup.png",
          link: "https://www.tochtliwear.com/"
        },
        {
          id: 2,
          title: "Custom Packaging Mock-Up",
          description: "Concept",
          image: "/images/Tochtli-BagMU.png",
        },
        {
          id: 3,
          title: "Cihuateteotl",
          description: "Informational Instagram Post",
          image: "/images/DDLM-PostMain.png",
        },
        {
          id: 4,
          title: "Tote Bag Mock-Up",
          description: "Social Media Post",
          image: "/images/tochtli-totemockup.jpg ",
        },
      ],
    },
    "sigma lambda beta": {
      sectionDescription: "",
      projects: [
        {
          id: 1,
          title: "New Memeber Presentation",
          description: "Poster Mock-Up",
          image: "/images/DA-MU.png",
        },
        {
          id: 2,
          title: "Spring '23 Recruitment",
          description: "Social Media Post",
          image: "/images/SPR23.png",
        },
        {
          id: 3,
          title: "Harvest Festival",
          description: "Community Service Social Media Post",
          image: "/images/SLB-HF.png",
          isWide: true
        }
      ],
    },
    personal: {
      sectionDescription: "Custom description for personal projects.",
      projects: [
        {
          id: 1,
          title: "Personal Project 1",
          description: "Description of personal project 1",
          image: "/placeholder.svg?height=600&width=800",
        },
        {
          id: 2,
          title: "Personal Project 2",
          description: "Description of personal project 2",
          image: "/images/tecpatl-MU.png",
          isLong: true
        },
      ],
    },
  };


  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  } //1

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-2 p-2 md:p-0 flex flex-col">
        <div className="flex justify-center items-center mb-2">
          <span className="text-m text-black text-center ">2024 TLAZO CAMATI</span>
        </div>
        <header className="max-w-10xl mx-auto p-8">
          <h1 className="text-7xl sm:text-8xl md:text-9xl xl:text-[13rem] font-black tracking-tighter text-black satoshi-black leading-none">ADAM AXTOPANI GONZALES</h1>
          <p className="text-sm md:text-base lg:text-lg text-black mt-2 tracking-wide satoshi-regular">
            [ ash-toh-pan-ee ]
          </p>
        </header>

        {/* Bio Section */}
        <div className="mb-12 items-center justify-center max-w-10xl mx-auto p-8">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold text-black satoshi-black">
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

        
        {/* Works Sections */}
        <header className="mb-8">
          <div className="flex items-center gap-8">
            <h1 className="text-7xl sm:text-8xl md:text-9xl xl:text-[13rem] font-black tracking-tighter text-black satoshi-black leading-none shrink-0">DESIGN</h1>
            <p className="text-sm md:text-base lg:text-lg text-black tracking-wide satoshi-regular self-stretch flex items-center max-w-xl">
              This section showcases my work as a graphic designer and web developer. From creating visually compelling social media graphics to building responsive websites,
              I focus on blending creativity with functionality. My designs aim to engage audiences, enhance user experiences, and bring ideas to life.
            </p>
          </div>
        </header>
        {(['Tochtli', 'Sigma Lambda Beta', 'Personal'] as const).map((category, index) => {
          const key = category.toLowerCase() as WorkCategory;
          return (

            <div key={category} className={`min-h-screen w-full ${category === 'Tochtli' ? 'relative' : 'bg-white'}`}>
              {category === 'Tochtli' && (
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/images/tochtli-bg2.jpg"
                    alt="Tochtli Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-black/0" />
                </div>
              )}
              <div className={`flex flex-col lg:flex-row min-h-screen ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} ${category === 'Tochtli' ? 'relative z-10' : ''}`}>
                
                
                {/* Text Content */}
                <div className={`p-4 md:p-8 flex flex-col lg:w-[30%] ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${category === 'Tochtli' ? 'sticky top-0 pt-4' : 'sticky top-12'}`}
                  >
                    <span className={`text-sm text-gray-500 mb-4 block ${category === 'Sigma Lambda Beta' ? 'text-right' : ''}`}>0{index + 1}.</span>
                    <h2 className={`text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter text-black satoshi-black mb-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      {category}
                    </h2>
                    <p className={`text-lg md:text-xl text-gray-600 max-w-xl ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      {works[key].sectionDescription}
                    </p>
                  </motion.div>
                </div>

                {/* Project Grid */}
                <div className={`p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 content-start lg:w-[70%]`}>
                  {works[key].projects.map((work, workIndex) => (
                    <motion.div
                      key={work.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: workIndex * 0.1 }}
                      className={`group relative ${work.isWide ? 'sm:col-span-2' : ''}`}
                    >
                      <div className="relative w-full overflow-hidden rounded-lg">
                        {work.link ? (
                          <Link href={work.link} target="_blank" rel="noopener noreferrer" className="block relative">
                            <Image
                              src={work.image}
                              alt={work.title}
                              width={work.isWide ? 1600 : 800}
                              height={600}
                              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
                              <ExternalLink className="text-white w-8 h-8" />
                            </div>
                          </Link>
                        ) : (
                          <Image
                            src={work.image}
                            alt={work.title}
                            width={work.isWide ? 1600 : 800}
                            height={600}
                            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className={`mt-4 flex items-start ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                        <span className={`text-sm text-gray-500 ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>{work.id}.</span>
                        <div className={index % 2 === 0 ? 'text-left' : 'text-right'}>
                          <h3 className="text-lg font-bold text-black">{work.title}</h3>
                          <p className="text-sm text-gray-600">{work.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* DATA Section */}
        <div className="bg-black text-white">
          <div className="relative min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/DProject-1.png" // Replace with the path to your JPG image
                alt="Data Background 1"
                fill
                className="object-cover object-top"
                priority
                quality={100}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/100" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-10xl mx-auto p-8">
              <header className="mb-8">
                <div className="flex flex-row-reverse items-start gap-8">
                  <h1 className="text-7xl sm:text-8xl md:text-9xl xl:text-[13rem] font-black tracking-tighter text-white satoshi-black leading-none shrink-0">
                    DATA
                  </h1>
                  <p className="text-sm md:text-base lg:text-lg text-white tracking-wide satoshi-regular self-stretch flex items-center text-right max-w-xl">
                    This section highlights my work in data analysis and machine
                    learning. From building predictive models to optimizing business
                    strategies, I use tools like Python, SQL, and Tableau to uncover
                    insights and drive decisions. My projects focus on transforming raw
                    data into actionable solutions that deliver real impact.
                  </p>
                </div>
              </header>

              <h2 className="text-2xl font-bold mb-8 satoshi-black">PROJECT 1</h2>

              {/* Bento Grid */}
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-3 auto-rows-auto gap-4">

                  {/* Large Image - Spans 2 rows, 2 columns */}
                  <div className="col-span-2 row-span-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="group h-full"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white">
                        <Image
                          src="/placeholder.svg?height=800&width=1067"
                          alt="Data Project 1"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Square Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="group"
                  >
                    <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white">
                      <Image
                        src="/images/msql-logo.png"
                        alt="MySQL logo"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>

                  {/* Accent Color Square */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="group"
                  >
                    <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-[#15bc6c] flex items-center justify-center">
                      <span className="text-8xl font-bold text-black">Xx</span>
                    </div>
                  </motion.div>

                  {/* Gradient Rectangle */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="group"
                  >
                    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-3xl bg-gradient-to-r from-[#15bc6c] to-white" />
                  </motion.div>

                  {/* Dark Image Rectangle */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="col-span-2"
                  >
                    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-3xl bg-white">
                      <Image
                        src="/placeholder.svg?height=800&width=1422"
                        alt="Data Project 3"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>
        </div>




        {/* Tochtli Section */}
        <div className="bg-black text-white">
          <div className="relative min-h-screen">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Tochtli Data Background"
                fill
                className="object-cover"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 flex flex-col justify-center min-h-screen p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <span className="text-sm text-white mb-4 block">02.</span>
                <h2 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter text-white satoshi-black mb-4">
                  Tochtli Data
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-8">
                  Description of Tochtli Data project. This project demonstrates the application of data science in real-world scenarios.
                </p>
                <div className="relative w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=800&width=1600"
                    alt="Tochtli Data Project"
                    width={1600}
                    height={800}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
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
                  <h2 className="text-7xl sm:text-8xl md:text-9xl xl:text-[11rem] font-black tracking-tighter text-black satoshi-black leading-none">
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
