"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  TestTube2,
  Workflow,
  Settings,
  Server,
  Shield,
  Cloud,
  Phone,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes - Updated for Yawar */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500">
              Yawar Hussain Bhat
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">Software QA Engineer | SDET | Automation Expert</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              4+ years of experience building robust automation frameworks and delivering quality software solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-emerald-500 text-white hover:bg-emerald-500 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section - Updated to QA/SDET expertise */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
                My Expertise
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<TestTube2 className="w-10 h-10 text-emerald-500" />}
                title="Test Automation"
                description="End-to-end test automation using Playwright, Selenium, and Cypress with robust frameworks for UI and API testing."
              />
              <ServiceCard
                icon={<Server className="w-10 h-10 text-cyan-500" />}
                title="API Testing"
                description="Comprehensive API testing using REST Assured, Postman, and Swagger for REST and SOAP APIs with contract validation."
              />
              <ServiceCard
                icon={<Workflow className="w-10 h-10 text-emerald-500" />}
                title="CI/CD Integration"
                description="Seamless integration of test automation into Jenkins pipelines with GitHub Actions for continuous testing."
              />
              <ServiceCard
                icon={<Shield className="w-10 h-10 text-cyan-500" />}
                title="Security Testing"
                description="Security assessment using OWASP guidelines, SonarQube analysis, and Wireshark for vulnerability detection."
              />
              <ServiceCard
                icon={<Cloud className="w-10 h-10 text-emerald-500" />}
                title="Cloud Testing"
                description="Testing cloud applications on AWS and Azure with expertise in cross-browser testing using BrowserStack."
              />
              <ServiceCard
                icon={<Settings className="w-10 h-10 text-cyan-500" />}
                title="Performance Testing"
                description="Load and performance testing with JMeter, monitoring with Grafana, and log analysis using Elasticsearch & Kibana."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section - Updated with Yawar's key projects */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
                Key Projects
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="HME Cloud SaaS Platform"
                description="Designed end-to-end testing workflows reducing manual testing by 40%. Integrated API automation with REST Assured and managed CI/CD pipelines."
                tags={["Playwright", "Selenium", "REST Assured", "Azure", "Jenkins", "IoT"]}
              />
              <ProjectCard
                title="Aya Healthcare Platform"
                description="Automated test suites for staffing & workforce management. Integrated automation pipelines into Jenkins improving release efficiency."
                tags={["Playwright", "TypeScript", "MySQL", "Azure", "JMeter", "REST Assured"]}
              />
              <ProjectCard
                title="Philips Remote Services"
                description="Developed automated E2E test suites for remote healthcare devices. IoT device testing and cloud integration via AWS S3."
                tags={["Cypress", "JavaScript", "PostgreSQL", "AWS", "Elasticsearch", "Kibana"]}
              />
              <ProjectCard
                title="Automation Framework POC"
                description="Successfully developed a Proof of Concept for an automation framework which was adopted as a full-scale project."
                tags={["Framework Design", "Test Architecture", "Best Practices"]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Updated contact info for Yawar */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
                Get In Touch
              </span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
                  >
                    Send Message
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-4">Or reach out directly:</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="mailto:yawarbhat1005@gmail.com"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      yawarbhat1005@gmail.com
                    </a>
                    <a
                      href="tel:+917889971089"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      +91 7889971089
                    </a>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-4 py-2 border border-gray-700 text-sm font-medium rounded-md text-white hover:bg-gray-800"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links - Updated for Yawar */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/yawar-dev" label="GitHub" />
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/yawar-hussain-bhat" label="LinkedIn" />
            <SocialIcon icon={<Mail />} href="mailto:yawarbhat1005@gmail.com" label="Email" />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Yawar Hussain Bhat. All rights reserved.</p>
            <p className="mt-2 text-emerald-400">Bangalore, India</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-emerald-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-emerald-500 transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left">{title}</h3>
      <p className="text-gray-400 mb-4 text-center md:text-left">{description}</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
