import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js and Stripe",
      image: "/images/project1.png",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
      link: "https://github.com/yourusername/project1"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration using OpenAI",
      image: "/images/project2.png",
      tags: ["React", "Socket.io", "OpenAI", "Node.js"],
      link: "https://github.com/yourusername/project2"
    },
    {
      title: "Task Management Dashboard",
      description: "Beautiful dashboard for managing tasks and projects",
      image: "/images/project3.jpg",
      tags: ["React", "Redux", "Material-UI", "Firebase"],
      link: "https://github.com/yourusername/project3"
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-blue-700 to-purple-800 animate-gradient-x">
          {/* Animated particles/dots overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          {/* Glowing orbs effect */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center">
            {/* Animated greeting */}
            <div className="text-sm md:text-base text-gray-100 font-mono mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="inline-block px-4 py-1 bg-white/10 rounded-full backdrop-blur-sm">
                👋 Welcome to my portfolio
              </span>
            </div>

            {/* Main heading with typing effect */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Hi, I'm{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-300">
                  Wahaj
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-200 to-pink-300 transform scale-x-0 transition-transform duration-700 hover:scale-x-100" />
              </span>
            </h1>

            {/* Animated role description */}
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <span className="font-mono bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-300">
                {'<'}
              </span>
              {' Full Stack Developer '} 
              <span className="typing-cursor">|</span>
              {' UI/UX Designer '} 
              <span className="typing-cursor">|</span>
              {' Tech Enthusiast '}
              <span className="font-mono bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-300">
                {'/>'}
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="space-x-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-violet-600 to-blue-500 rounded-full hover:from-violet-500 hover:to-blue-400 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
                <span className="relative flex items-center">
                  Get in Touch
                  <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                href="/about" 
                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-violet-600 transition-all duration-300 ease-out group hover:scale-105"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Learn More</span>
                <span className="relative invisible">Learn More</span>
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-6 h-10 border-2 border-white rounded-full p-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-down" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React', level: '95%' },
              { name: 'TypeScript', level: '90%' },
              { name: 'Node.js', level: '85%' },
              { name: 'UI/UX Design', level: '80%' },
            ].map((skill, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-gray-200 stroke-current"
                      strokeWidth="10"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                    ></circle>
                    <circle
                      className="text-blue-600 progress-ring stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      style={{
                        strokeDasharray: `${2 * Math.PI * 40}`,
                        strokeDashoffset: `${2 * Math.PI * 40 * (1 - parseInt(skill.level) / 100)}`,
                      }}
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">{skill.level}</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
