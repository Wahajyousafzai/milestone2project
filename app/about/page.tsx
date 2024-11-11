'use client'



import { motion } from 'framer-motion'

import Image from 'next/image'

import Link from 'next/link'



export default function About() {

  const skills = [

    { name: 'Frontend Development', level: 90, color: 'from-blue-500 to-cyan-500' },

    { name: 'Backend Development', level: 85, color: 'from-purple-500 to-pink-500' },

    { name: 'UI/UX Design', level: 80, color: 'from-green-500 to-emerald-500' },

    { name: 'Cloud Services', level: 75, color: 'from-orange-500 to-yellow-500' },

  ]



  const experiences = [

    {

      title: 'Senior Full Stack Developer',

      company: 'Tech Corp',

      period: '2021 - Present',

      description: 'Leading development of enterprise applications using Next.js and Node.js.',

    },

    {

      title: 'Frontend Developer',

      company: 'Digital Agency',

      period: '2019 - 2021',

      description: 'Built responsive web applications and improved user experiences.',

    },

    {

      title: 'UI/UX Designer',

      company: 'Creative Studio',

      period: '2018 - 2019',

      description: 'Designed user interfaces and created interactive prototypes.',

    },

  ]



  return (

    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">

      {/* Hero Section */}

      <section className="relative pt-20 pb-32 overflow-hidden">

        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        

        <motion.div 

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6 }}

          className="container mx-auto px-4"

        >

          <div className="max-w-3xl mx-auto text-center">

            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">

              About Me

            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">

              I'm a passionate full-stack developer with a keen eye for design and a love for creating 

              seamless user experiences. With years of experience in web development, I bring ideas to life 

              through clean code and creative solutions.

            </p>

          </div>

        </motion.div>

      </section>



      {/* Profile Section */}

      <section className="py-20 bg-black/50 backdrop-blur-lg">

        <div className="container mx-auto px-4">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <motion.div

              initial={{ opacity: 0, x: -50 }}

              animate={{ opacity: 1, x: 0 }}

              transition={{ duration: 0.6, delay: 0.2 }}

              className="relative"

            >

              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">

                <Image

                  src="/images/profile.jpeg" // Add your photo here

                  alt="Profile"

                  fill

                  className="object-cover"

                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              </div>

            </motion.div>



            <motion.div

              initial={{ opacity: 0, x: 50 }}

              animate={{ opacity: 1, x: 0 }}

              transition={{ duration: 0.6, delay: 0.4 }}

            >

              <h2 className="text-3xl font-bold mb-6">My Journey</h2>

              <p className="text-gray-300 mb-6 leading-relaxed">

                With over 5 years of experience in web development, I've worked on various projects 

                ranging from small business websites to large-scale enterprise applications. My passion 

                lies in creating intuitive user interfaces and robust backend systems.

              </p>

              <div className="flex gap-4">

                <Link

                  href="/contact"

                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:scale-105 transition-transform duration-300"

                >

                  Get in Touch

                </Link>

                <a

                  href="/resume.pdf"

                  className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"

                >

                  Download CV

                </a>

              </div>

            </motion.div>

          </div>

        </div>

      </section>



      {/* Skills Section */}

      <section className="py-20">

        <div className="container mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {skills.map((skill, index) => (

              <motion.div

                key={skill.name}

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.6, delay: index * 0.2 }}

                className="bg-white/5 rounded-lg p-6 backdrop-blur-sm"

              >

                <div className="flex justify-between mb-2">

                  <span>{skill.name}</span>

                  <span>{skill.level}%</span>

                </div>

                <div className="h-2 bg-white/10 rounded-full overflow-hidden">

                  <motion.div

                    initial={{ width: 0 }}

                    animate={{ width: `${skill.level}%` }}

                    transition={{ duration: 1, delay: 0.5 }}

                    className={`h-full bg-gradient-to-r ${skill.color}`}

                  />

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      {/* Experience Timeline */}

      <section className="py-20 bg-black/50 backdrop-blur-lg">

        <div className="container mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>

          <div className="max-w-3xl mx-auto">

            {experiences.map((exp, index) => (

              <motion.div

                key={index}

                initial={{ opacity: 0, x: -50 }}

                animate={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6, delay: index * 0.2 }}

                className="relative pl-8 pb-12 border-l-2 border-white/20 last:pb-0"

              >

                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />

                <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">

                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>

                  <p className="text-gray-400 mb-2">{exp.company} | {exp.period}</p>

                  <p className="text-gray-300">{exp.description}</p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </div>

  )

} 
