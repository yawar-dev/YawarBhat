"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

const timelineData = [
  {
    id: 1,
    company: "Sage",
    role: "Software Test Engineer",
    period: "11/2024 - Present",
    location: "Bangalore, India",
    type: "Full-time",
    logo: "/sage-logo.jpg",
    skills: ["Playwright", "Selenium", "REST Assured", "Azure", "MySQL", "Jenkins", "CI/CD"],
  },
  {
    id: 2,
    company: "HME India",
    role: "Software QA Engineer",
    period: "02/2024 - 11/2024",
    location: "Bangalore, India",
    type: "Full-time",
    logo: "/hme-company-logo.jpg",
    skills: ["Playwright", "Selenium", "REST Assured", "Azure", "MySQL", "Jenkins", "Xray"],
  },
  {
    id: 3,
    company: "Aya Healthcare",
    role: "Automation Engineer",
    period: "12/2022 - 12/2023",
    location: "Bangalore, India",
    type: "Full-time (via Qualitest India)",
    logo: "/aya-healthcare-logo.jpg",
    skills: ["Playwright", "TypeScript", "MySQL", "Azure", "Jenkins", "REST Assured", "JMeter"],
  },
  {
    id: 4,
    company: "Philips Innovation Campus",
    role: "Verification Engineer",
    period: "08/2021 - 11/2022",
    location: "Bangalore, India",
    type: "Full-time (via Qualitest India)",
    logo: "/philips-logo.jpg",
    skills: ["Cypress", "Postman", "REST Assured", "PostgreSQL", "Jenkins", "AWS S3", "Elasticsearch"],
  },
]

const skillsData = {
  "Frontend Testing": [
    { name: "Playwright", proficiency: 95 },
    { name: "Cypress", proficiency: 90 },
    { name: "Selenium WebDriver", proficiency: 90 },
    { name: "TypeScript/JavaScript", proficiency: 85 },
  ],
  "Backend & API": [
    { name: "REST Assured", proficiency: 90 },
    { name: "Postman", proficiency: 95 },
    { name: "MySQL/PostgreSQL", proficiency: 85 },
    { name: "Node.js", proficiency: 75 },
  ],
  "DevOps & Tools": [
    { name: "Jenkins CI/CD", proficiency: 90 },
    { name: "Git/GitHub", proficiency: 95 },
    { name: "Docker", proficiency: 75 },
    { name: "Azure/AWS", proficiency: 80 },
  ],
}

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
              About Me
            </span>
          </h2>
          {/* Profile Section - Updated for Yawar */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/professional-male-software-engineer-portrait.jpg"
                  alt="Yawar Hussain Bhat"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  Software QA Engineer & SDET with 4+ years of experience in automation testing. Skilled in Playwright,
                  Selenium, and CI/CD pipelines.
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    <strong>Hey, I'm Yawar Hussain Bhat!</strong>
                  </p>
                  <p className="mb-4">
                    A <strong>detail-oriented Software QA Engineer / SDET</strong> with a passion for building robust
                    automation frameworks and delivering flawless user experiences. With{" "}
                    <strong>4+ years of experience</strong> in product quality assurance and automation, I specialize in
                    creating intelligent, automated testing solutions.
                  </p>
                  <p className="mb-4">
                    I'm skilled in <strong>Playwright, Selenium, Cypress, REST Assured</strong>, and building efficient
                    <strong> CI/CD pipelines</strong>. My focus is always on quality, performance, and
                    reliability—ensuring products are delivered with excellence.
                  </p>
                  <p>
                    From <strong>API testing</strong> to <strong>end-to-end automation</strong>, I love tackling complex
                    testing challenges and accelerating product delivery through smart automation strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
                Career Journey
              </span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={56}
                            height={56}
                            className="rounded-full"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">{item.role}</h3>
                          <h4 className="text-lg text-emerald-400">{item.company}</h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 text-emerald-300 border border-emerald-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
                Technical Skills
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-emerald-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ name, proficiency }: { name: string; proficiency: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
        />
      </div>
    </div>
  )
}
