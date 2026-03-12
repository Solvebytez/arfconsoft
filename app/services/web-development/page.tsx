"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import {
  ArrowRight,
  Code2,
  Globe,
  Layers,
  Palette,
  Rocket,
  ShieldCheck,
  Zap,
  Monitor,
  Smartphone,
  Server,
  Database,
  Search,
  BarChart3,
  Users,
  CheckCircle2,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Custom Website Design",
    description:
      "Bespoke designs tailored to your brand identity, ensuring pixel-perfect responsive layouts that captivate your audience across all devices.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using modern frameworks like React, Next.js, Node.js, and more for robust, scalable solutions.",
  },
  {
    icon: Globe,
    title: "E-Commerce Solutions",
    description:
      "Feature-rich online stores with secure payment gateways, inventory management, and seamless shopping experiences that drive conversions.",
  },
  {
    icon: Rocket,
    title: "Progressive Web Apps",
    description:
      "Fast, reliable, and engaging PWAs that combine the best of web and mobile, offering offline capabilities and native-like experiences.",
  },
  {
    icon: Server,
    title: "CMS Development",
    description:
      "Custom content management systems and headless CMS integrations that empower your team to manage content effortlessly.",
  },
  {
    icon: ShieldCheck,
    title: "Web Security & Optimization",
    description:
      "Comprehensive security audits, SSL implementation, performance optimization, and ongoing maintenance to keep your site secure and fast.",
  },
]

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "REST API", category: "API" },
]

const processSteps = [
  {
    title: "Discovery",
    description:
      "Deep-dive into your business requirements, target audience, and competitive landscape to define the project roadmap.",
  },
  {
    title: "Design",
    description:
      "Wireframing and UI/UX design with iterative prototyping to craft intuitive, visually stunning interfaces.",
  },
  {
    title: "Development",
    description:
      "Agile development sprints with clean, maintainable code using cutting-edge technologies and best practices.",
  },
  {
    title: "Testing",
    description:
      "Rigorous QA across browsers, devices, and use cases ensuring pixel-perfect functionality and zero-defect delivery.",
  },
  {
    title: "Launch",
    description:
      "Seamless deployment with performance optimization, SEO setup, and analytics integration for a successful go-live.",
  },
  {
    title: "Support",
    description:
      "Ongoing maintenance, monitoring, feature enhancements, and 24/7 technical support post-launch.",
  },
]

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* Animated grid background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.15)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,184,166,0.1)_0%,transparent_50%)]" />
        </div>

        {/* Vector Art - Floating Laptop */}
        <div className="absolute top-[15%] right-[8%] hidden lg:block">
          <motion.div
            animate={{ y: [-12, 12, -12], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <svg width="220" height="160" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Laptop Screen */}
              <rect x="30" y="10" width="160" height="100" rx="8" fill="#111827" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
              <rect x="38" y="18" width="144" height="84" rx="4" fill="#0f172a" />
              {/* Code lines on screen */}
              <rect x="48" y="30" width="60" height="4" rx="2" fill="rgba(6,182,212,0.6)" />
              <rect x="48" y="40" width="90" height="4" rx="2" fill="rgba(20,184,166,0.4)" />
              <rect x="48" y="50" width="45" height="4" rx="2" fill="rgba(6,182,212,0.3)" />
              <rect x="98" y="50" width="55" height="4" rx="2" fill="rgba(251,191,36,0.4)" />
              <rect x="48" y="60" width="80" height="4" rx="2" fill="rgba(6,182,212,0.5)" />
              <rect x="48" y="70" width="30" height="4" rx="2" fill="rgba(244,114,182,0.5)" />
              <rect x="83" y="70" width="65" height="4" rx="2" fill="rgba(20,184,166,0.3)" />
              <rect x="48" y="80" width="70" height="4" rx="2" fill="rgba(6,182,212,0.4)" />
              {/* Laptop Base */}
              <path d="M20 110 L30 110 L30 115 Q30 120 35 120 L185 120 Q190 120 190 115 L190 110 L200 110 L210 130 Q212 135 207 135 L13 135 Q8 135 10 130 Z" fill="#1f2937" stroke="rgba(6,182,212,0.2)" strokeWidth="1.5" />
              {/* Touchpad */}
              <rect x="90" y="122" width="40" height="8" rx="3" fill="#374151" />
              {/* Glow */}
              <ellipse cx="110" cy="140" rx="70" ry="8" fill="rgba(6,182,212,0.08)" />
            </svg>
          </motion.div>
        </div>

        {/* Vector Art - Browser Window */}
        <div className="absolute bottom-[20%] right-[12%] hidden lg:block">
          <motion.div
            animate={{ y: [8, -10, 8], x: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          >
            <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Browser Frame */}
              <rect x="4" y="4" width="152" height="112" rx="10" fill="#111827" stroke="rgba(6,182,212,0.25)" strokeWidth="1.5" />
              {/* Title bar */}
              <rect x="4" y="4" width="152" height="24" rx="10" fill="#1f2937" />
              <rect x="4" y="18" width="152" height="10" fill="#1f2937" />
              {/* Traffic light dots */}
              <circle cx="18" cy="16" r="3.5" fill="#ef4444" />
              <circle cx="30" cy="16" r="3.5" fill="#eab308" />
              <circle cx="42" cy="16" r="3.5" fill="#22c55e" />
              {/* URL bar */}
              <rect x="56" y="11" width="88" height="10" rx="5" fill="#374151" />
              {/* Content - boxes representing layout */}
              <rect x="12" y="36" width="136" height="20" rx="4" fill="rgba(6,182,212,0.15)" />
              <rect x="12" y="62" width="64" height="46" rx="4" fill="rgba(20,184,166,0.1)" />
              <rect x="82" y="62" width="66" height="22" rx="4" fill="rgba(6,182,212,0.1)" />
              <rect x="82" y="88" width="66" height="20" rx="4" fill="rgba(251,191,36,0.08)" />
            </svg>
          </motion.div>
        </div>

        {/* Vector Art - Floating Gear */}
        <div className="absolute top-[45%] right-[4%] hidden lg:block">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 20 C35.5 20 40 24.5 40 30 C40 35.5 35.5 40 30 40 C24.5 40 20 35.5 20 30 C20 24.5 24.5 20 30 20Z" stroke="rgba(6,182,212,0.3)" strokeWidth="2" fill="none" />
              <path d="M30 8 L33 16 L27 16 Z" fill="rgba(6,182,212,0.2)" />
              <path d="M30 52 L33 44 L27 44 Z" fill="rgba(6,182,212,0.2)" />
              <path d="M8 30 L16 27 L16 33 Z" fill="rgba(6,182,212,0.2)" />
              <path d="M52 30 L44 27 L44 33 Z" fill="rgba(6,182,212,0.2)" />
              <path d="M14.5 14.5 L20 19 L17.5 21.5 Z" fill="rgba(6,182,212,0.15)" />
              <path d="M45.5 45.5 L40 41 L42.5 38.5 Z" fill="rgba(6,182,212,0.15)" />
              <path d="M45.5 14.5 L41 20 L38.5 17.5 Z" fill="rgba(6,182,212,0.15)" />
              <path d="M14.5 45.5 L19 40 L21.5 42.5 Z" fill="rgba(6,182,212,0.15)" />
            </svg>
          </motion.div>
        </div>

        {/* Vector Art - Code Brackets */}
        <div className="absolute top-[65%] right-[30%] hidden lg:block">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          >
            <svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5 L5 25 L20 45" stroke="rgba(6,182,212,0.5)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M50 5 L65 25 L50 45" stroke="rgba(20,184,166,0.5)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <line x1="40" y1="3" x2="30" y2="47" stroke="rgba(251,191,36,0.4)" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto w-full py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-cyan-400 text-sm font-medium">Web Development</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              We Build
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Web Experiences
              </span>
              That Perform
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              We excel in web development, crafting bespoke solutions tailored to your unique needs. Our seasoned team utilizes the latest technologies to build stunning, responsive websites that drive results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-transparent border border-gray-700 text-gray-300 font-semibold rounded-full hover:border-cyan-500/50 hover:text-white transition-all duration-300"
              >
                View Portfolio
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-12 mt-16 pt-8 border-t border-gray-800"
            >
              {[
                { value: "500+", label: "Websites Delivered" },
                { value: "99%", label: "Client Satisfaction" },
                { value: "50+", label: "Tech Experts" },
                { value: "12+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Hexagonal / Honeycomb-inspired offset */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-500/5 rounded-full blur-[100px]" />

        {/* Vector Art - Server Rack (top-right) */}
        <div className="absolute top-16 right-12 hidden lg:block opacity-20">
          <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="100" height="180" rx="8" stroke="#0891b2" strokeWidth="2" fill="none" />
            {/* Rack units */}
            <rect x="18" y="22" width="84" height="28" rx="4" fill="#0891b2" />
            <circle cx="32" cy="36" r="4" fill="#fff" />
            <rect x="42" y="33" width="30" height="6" rx="3" fill="#fff" />
            <circle cx="90" cy="36" r="3" fill="#22c55e" />
            <rect x="18" y="58" width="84" height="28" rx="4" fill="#0891b2" />
            <circle cx="32" cy="72" r="4" fill="#fff" />
            <rect x="42" y="69" width="30" height="6" rx="3" fill="#fff" />
            <circle cx="90" cy="72" r="3" fill="#22c55e" />
            <rect x="18" y="94" width="84" height="28" rx="4" fill="#0891b2" />
            <circle cx="32" cy="108" r="4" fill="#fff" />
            <rect x="42" y="105" width="30" height="6" rx="3" fill="#fff" />
            <circle cx="90" cy="108" r="3" fill="#eab308" />
            <rect x="18" y="130" width="84" height="28" rx="4" fill="#0891b2" />
            <circle cx="32" cy="144" r="4" fill="#fff" />
            <rect x="42" y="141" width="30" height="6" rx="3" fill="#fff" />
            <circle cx="90" cy="144" r="3" fill="#22c55e" />
            {/* Legs */}
            <rect x="20" y="190" width="10" height="8" rx="2" fill="#0891b2" />
            <rect x="90" y="190" width="10" height="8" rx="2" fill="#0891b2" />
          </svg>
        </div>

        {/* Vector Art - Responsive Devices (bottom-left) */}
        <div className="absolute bottom-12 left-8 hidden lg:block opacity-20">
          <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Desktop Monitor */}
            <rect x="40" y="5" width="120" height="80" rx="6" stroke="#0891b2" strokeWidth="2" fill="none" />
            <rect x="46" y="11" width="108" height="62" rx="3" fill="#0891b2" opacity="0.15" />
            <rect x="80" y="85" width="40" height="12" fill="#0891b2" opacity="0.3" />
            <rect x="65" y="97" width="70" height="6" rx="3" fill="#0891b2" opacity="0.4" />
            {/* Tablet */}
            <rect x="5" y="30" width="40" height="60" rx="5" stroke="#0891b2" strokeWidth="1.5" fill="none" />
            <rect x="9" y="38" width="32" height="44" rx="2" fill="#0891b2" opacity="0.1" />
            <circle cx="25" cy="86" r="2.5" stroke="#0891b2" strokeWidth="1" fill="none" />
            {/* Phone */}
            <rect x="170" y="50" width="25" height="45" rx="4" stroke="#0891b2" strokeWidth="1.5" fill="none" />
            <rect x="174" y="56" width="17" height="30" rx="2" fill="#0891b2" opacity="0.1" />
            <rect x="178" y="52" width="9" height="2" rx="1" fill="#0891b2" opacity="0.3" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-cyan-500 rounded-full" />
              <span className="text-cyan-600 font-medium uppercase tracking-wider text-sm">
                What We Offer
              </span>
              <div className="w-8 h-1 bg-cyan-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Web Development Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive web development solutions that transform your digital vision into reality.
            </p>
          </motion.div>

          {/* Two large feature cards + 4 smaller ones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={`relative h-full rounded-3xl p-10 overflow-hidden min-h-[260px] ${index === 0 ? "bg-gradient-to-br from-cyan-500 to-teal-600" : "bg-gray-900"}`}
                >
                  {index === 0 ? (
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.15)_0%,transparent_60%)]" />
                  )}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${index === 0 ? "bg-white/20 backdrop-blur-sm" : "bg-cyan-500/20"}`}
                      >
                        <service.icon className={`w-8 h-8 ${index === 0 ? "text-white" : "text-cyan-400"}`} />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className={`leading-relaxed ${index === 0 ? "text-white/80" : "text-gray-400"}`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(2).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full bg-gray-50 rounded-3xl p-7 border border-gray-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Floating Tags Cloud */}
      <section className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08)_0%,transparent_60%)]" />

        {/* Vector Art - Circuit Board (top-left) */}
        <div className="absolute top-12 left-6 hidden lg:block opacity-20">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="120" height="120" rx="12" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
            <rect x="50" y="50" width="80" height="80" rx="6" stroke="#06b6d4" strokeWidth="1" fill="none" />
            <rect x="70" y="70" width="40" height="40" rx="4" fill="rgba(6,182,212,0.15)" />
            <line x1="90" y1="30" x2="90" y2="50" stroke="#06b6d4" strokeWidth="1" />
            <line x1="90" y1="130" x2="90" y2="150" stroke="#06b6d4" strokeWidth="1" />
            <line x1="30" y1="90" x2="50" y2="90" stroke="#06b6d4" strokeWidth="1" />
            <line x1="130" y1="90" x2="150" y2="90" stroke="#06b6d4" strokeWidth="1" />
            <line x1="60" y1="30" x2="60" y2="50" stroke="#06b6d4" strokeWidth="1" />
            <line x1="120" y1="30" x2="120" y2="50" stroke="#06b6d4" strokeWidth="1" />
            <line x1="60" y1="130" x2="60" y2="150" stroke="#06b6d4" strokeWidth="1" />
            <line x1="120" y1="130" x2="120" y2="150" stroke="#06b6d4" strokeWidth="1" />
            <circle cx="60" cy="30" r="3" fill="#06b6d4" opacity="0.3" />
            <circle cx="120" cy="30" r="3" fill="#06b6d4" opacity="0.3" />
            <circle cx="60" cy="150" r="3" fill="#06b6d4" opacity="0.3" />
            <circle cx="120" cy="150" r="3" fill="#06b6d4" opacity="0.3" />
            <circle cx="30" cy="60" r="3" fill="#06b6d4" opacity="0.3" />
            <circle cx="150" cy="60" r="3" fill="#06b6d4" opacity="0.3" />
            <circle cx="30" cy="120" r="3" fill="#06b6d4" opacity="0.3" />
            <circle cx="150" cy="120" r="3" fill="#06b6d4" opacity="0.3" />
            <line x1="30" y1="60" x2="50" y2="60" stroke="#06b6d4" strokeWidth="1" />
            <line x1="130" y1="60" x2="150" y2="60" stroke="#06b6d4" strokeWidth="1" />
            <line x1="30" y1="120" x2="50" y2="120" stroke="#06b6d4" strokeWidth="1" />
            <line x1="130" y1="120" x2="150" y2="120" stroke="#06b6d4" strokeWidth="1" />
          </svg>
        </div>

        {/* Vector Art - Database Cylinder (bottom-right) */}
        <div className="absolute bottom-16 right-10 hidden lg:block opacity-20">
          <svg width="100" height="140" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="25" rx="38" ry="15" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
            <ellipse cx="50" cy="25" rx="38" ry="15" fill="rgba(6,182,212,0.06)" />
            <line x1="12" y1="25" x2="12" y2="110" stroke="#06b6d4" strokeWidth="1.5" />
            <line x1="88" y1="25" x2="88" y2="110" stroke="#06b6d4" strokeWidth="1.5" />
            <ellipse cx="50" cy="110" rx="38" ry="15" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
            <path d="M12 55 Q50 72 88 55" stroke="#06b6d4" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M12 80 Q50 97 88 80" stroke="#06b6d4" strokeWidth="1" fill="none" opacity="0.3" />
            <rect x="35" y="42" width="30" height="4" rx="2" fill="#06b6d4" opacity="0.15" />
            <rect x="30" y="50" width="40" height="4" rx="2" fill="#06b6d4" opacity="0.1" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-16">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-2/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-cyan-500 rounded-full" />
                <span className="text-cyan-400 font-medium uppercase tracking-wider text-sm">Tech Stack</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Technologies We Master
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We leverage the latest and most powerful technologies to build web solutions that are fast, scalable, and future-proof. Our expertise spans the entire development stack.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Frontend", "Backend", "Database", "Cloud", "DevOps", "API"].map((cat) => (
                  <span
                    key={cat}
                    className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right - Tech tags */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-3/5"
            >
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {techStack.map((tech, index) => {
                  const sizes = ["text-base px-5 py-3", "text-lg px-6 py-3.5", "text-base px-5 py-3", "text-sm px-4 py-2.5"]
                  const size = sizes[index % sizes.length]
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      className={`${size} bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl text-gray-300 font-medium hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-gray-800 transition-all duration-300 cursor-default`}
                    >
                      {tech.name}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Process - Numbered Cards with Connecting Dashes */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px]" />

        {/* Vector Art - Rocket */}
        <div className="absolute top-20 left-8 hidden lg:block opacity-20">
          <svg width="100" height="160" viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Rocket body */}
            <path d="M50 10 Q50 10 65 50 L65 100 Q65 110 50 115 Q35 110 35 100 L35 50 Q50 10 50 10Z" stroke="#0891b2" strokeWidth="2" fill="none" />
            {/* Nose cone */}
            <path d="M50 10 Q45 30 42 45 L58 45 Q55 30 50 10Z" fill="#0891b2" opacity="0.15" />
            {/* Window */}
            <circle cx="50" cy="60" r="8" stroke="#0891b2" strokeWidth="1.5" fill="#0891b2" opacity="0.1" />
            {/* Fins */}
            <path d="M35 85 L20 110 L35 105Z" fill="#0891b2" opacity="0.2" />
            <path d="M65 85 L80 110 L65 105Z" fill="#0891b2" opacity="0.2" />
            {/* Flames */}
            <path d="M42 115 Q45 130 50 145 Q55 130 58 115" stroke="#0891b2" strokeWidth="1.5" fill="none" opacity="0.3" />
            <path d="M45 115 Q48 125 50 135 Q52 125 55 115" stroke="#0891b2" strokeWidth="1" fill="none" opacity="0.2" />
          </svg>
        </div>

        {/* Vector Art - Cloud */}
        <div className="absolute bottom-16 right-16 hidden lg:block opacity-20">
          <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 70 C15 70 5 55 15 42 C20 25 40 20 55 28 C60 10 85 5 100 18 C115 5 145 10 148 30 C170 28 180 48 165 62 C175 80 155 85 140 78 L40 70Z" stroke="#0891b2" strokeWidth="2" fill="#0891b2" opacity="0.08" />
            {/* Upload arrow */}
            <path d="M90 45 L90 70" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M80 55 L90 45 L100 55" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-cyan-500 rounded-full" />
              <span className="text-cyan-600 font-medium uppercase tracking-wider text-sm">
                Our Process
              </span>
              <div className="w-8 h-1 bg-cyan-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We Bring Your Vision to Life
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic 6-step approach that ensures transparency, quality, and timely delivery at every stage.
            </p>
          </motion.div>

          {/* Process: 3 columns x 2 rows with large step numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Large background number */}
                <div className="absolute -top-6 -left-2 text-[8rem] font-black text-gray-100 leading-none select-none group-hover:text-cyan-50 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10 pt-16 pl-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  {/* Accent underline */}
                  <div className="mt-4 w-12 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Horizontal scroll-like cards */}
      <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">

        {/* Vector Art - Shield / Security (top-right) */}
        <div className="absolute top-12 right-10 hidden lg:block opacity-20">
          <svg width="130" height="160" viewBox="0 0 130 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M65 10 L115 35 L115 80 Q115 120 65 150 Q15 120 15 80 L15 35 Z" stroke="#0891b2" strokeWidth="2" fill="none" />
            <path d="M65 25 L100 44 L100 78 Q100 110 65 135 Q30 110 30 78 L30 44 Z" fill="#0891b2" opacity="0.1" />
            <path d="M48 78 L60 92 L88 60" stroke="#0891b2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
            <circle cx="65" cy="50" r="4" fill="#0891b2" opacity="0.3" />
            <line x1="65" y1="54" x2="65" y2="68" stroke="#0891b2" strokeWidth="1.5" opacity="0.3" />
          </svg>
        </div>

        {/* Vector Art - Speed Gauge (bottom-left) */}
        <div className="absolute bottom-8 left-10 hidden lg:block opacity-20">
          <svg width="140" height="90" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 80 A60 60 0 0 1 130 80" stroke="#0891b2" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M22 65 A48 48 0 0 1 70 20" stroke="#0891b2" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.4" />
            <path d="M70 20 A48 48 0 0 1 118 65" stroke="#0891b2" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.2" />
            <line x1="70" y1="78" x2="105" y2="40" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <circle cx="70" cy="78" r="5" fill="#0891b2" opacity="0.35" />
            <circle cx="70" cy="78" r="2" fill="#0891b2" opacity="0.5" />
            <text x="25" y="88" fill="#0891b2" opacity="0.35" fontSize="8" fontFamily="monospace">0</text>
            <text x="65" y="15" fill="#0891b2" opacity="0.35" fontSize="8" fontFamily="monospace">50</text>
            <text x="118" y="88" fill="#0891b2" opacity="0.35" fontSize="8" fontFamily="monospace">100</text>
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-cyan-500 rounded-full" />
                <span className="text-cyan-600 font-medium uppercase tracking-wider text-sm">Why Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Why Choose Advait Softech
              </h2>
            </div>
            <p className="text-gray-600 max-w-md lg:text-right leading-relaxed">
              Delivering exceptional web experiences backed by years of expertise and a passion for innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Lightning Fast Performance", description: "Optimized for speed with Core Web Vitals scores that keep your visitors engaged and improve SEO rankings." },
              { icon: Monitor, title: "Responsive Across Devices", description: "Flawless experiences on every screen size, from mobile phones to ultra-wide desktop monitors." },
              { icon: Search, title: "SEO-First Approach", description: "Built with search engine optimization baked in from day one, ensuring maximum visibility and organic traffic." },
              { icon: ShieldCheck, title: "Enterprise-Grade Security", description: "Bank-level encryption, OWASP compliance, regular security audits, and proactive vulnerability management." },
              { icon: Users, title: "Dedicated Team", description: "A senior team of designers, developers, and QA engineers committed to your project's success." },
              { icon: BarChart3, title: "Data-Driven Results", description: "Analytics integration and conversion optimization to measure what matters and continuously improve performance." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-start gap-6 bg-white rounded-2xl p-6 border border-gray-100 hover:border-cyan-200 hover:shadow-lg transition-all duration-500">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve - Pill-style tags */}
      <section className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <pattern id="web-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="rgba(6,182,212,0.5)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#web-dots)" />
          </svg>
        </div>

        {/* Vector Art - Globe / Network (top-right) */}
        <div className="absolute top-16 right-8 hidden lg:block opacity-20">
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="60" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
            <ellipse cx="80" cy="80" rx="30" ry="60" stroke="#06b6d4" strokeWidth="1" fill="none" />
            <ellipse cx="80" cy="80" rx="50" ry="60" stroke="#06b6d4" strokeWidth="0.8" fill="none" opacity="0.5" />
            <line x1="20" y1="60" x2="140" y2="60" stroke="#06b6d4" strokeWidth="0.8" opacity="0.4" />
            <line x1="20" y1="100" x2="140" y2="100" stroke="#06b6d4" strokeWidth="0.8" opacity="0.4" />
            <line x1="80" y1="20" x2="80" y2="140" stroke="#06b6d4" strokeWidth="0.8" opacity="0.3" />
            <circle cx="80" cy="20" r="3" fill="#06b6d4" opacity="0.3" />
            <circle cx="80" cy="140" r="3" fill="#06b6d4" opacity="0.3" />
            <circle cx="20" cy="80" r="3" fill="#06b6d4" opacity="0.3" />
            <circle cx="140" cy="80" r="3" fill="#06b6d4" opacity="0.3" />
            <circle cx="110" cy="45" r="3" fill="#06b6d4" opacity="0.2" />
            <circle cx="50" cy="115" r="3" fill="#06b6d4" opacity="0.2" />
            <line x1="110" y1="45" x2="140" y2="80" stroke="#06b6d4" strokeWidth="0.6" opacity="0.2" strokeDasharray="3 3" />
            <line x1="50" y1="115" x2="20" y2="80" stroke="#06b6d4" strokeWidth="0.6" opacity="0.2" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Vector Art - Sitemap / Hierarchy (bottom-left) */}
        <div className="absolute bottom-12 left-8 hidden lg:block opacity-20">
          <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="55" y="5" width="50" height="24" rx="6" stroke="#06b6d4" strokeWidth="1.5" fill="rgba(6,182,212,0.08)" />
            <rect x="62" y="12" width="36" height="4" rx="2" fill="#06b6d4" opacity="0.15" />
            <line x1="80" y1="29" x2="80" y2="45" stroke="#06b6d4" strokeWidth="1" />
            <line x1="30" y1="45" x2="130" y2="45" stroke="#06b6d4" strokeWidth="1" />
            <line x1="30" y1="45" x2="30" y2="55" stroke="#06b6d4" strokeWidth="1" />
            <line x1="80" y1="45" x2="80" y2="55" stroke="#06b6d4" strokeWidth="1" />
            <line x1="130" y1="45" x2="130" y2="55" stroke="#06b6d4" strokeWidth="1" />
            <rect x="10" y="55" width="40" height="20" rx="5" stroke="#06b6d4" strokeWidth="1" fill="none" />
            <rect x="60" y="55" width="40" height="20" rx="5" stroke="#06b6d4" strokeWidth="1" fill="none" />
            <rect x="110" y="55" width="40" height="20" rx="5" stroke="#06b6d4" strokeWidth="1" fill="none" />
            <rect x="16" y="62" width="28" height="3" rx="1.5" fill="#06b6d4" opacity="0.1" />
            <rect x="66" y="62" width="28" height="3" rx="1.5" fill="#06b6d4" opacity="0.1" />
            <rect x="116" y="62" width="28" height="3" rx="1.5" fill="#06b6d4" opacity="0.1" />
            <line x1="30" y1="75" x2="30" y2="85" stroke="#06b6d4" strokeWidth="1" />
            <line x1="10" y1="85" x2="50" y2="85" stroke="#06b6d4" strokeWidth="1" />
            <rect x="2" y="90" width="18" height="14" rx="3" stroke="#06b6d4" strokeWidth="0.8" fill="none" opacity="0.5" />
            <rect x="40" y="90" width="18" height="14" rx="3" stroke="#06b6d4" strokeWidth="0.8" fill="none" opacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-cyan-500 rounded-full" />
                <span className="text-cyan-400 font-medium uppercase tracking-wider text-sm">Industries</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Web Solutions for Every Industry
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our web development expertise spans diverse industries, delivering tailor-made solutions that address unique sector-specific challenges.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Healthcare", icon: "+" },
                  { name: "E-Commerce", icon: "$" },
                  { name: "Education", icon: "E" },
                  { name: "Finance", icon: "F" },
                  { name: "Real Estate", icon: "R" },
                  { name: "Travel", icon: "T" },
                  { name: "Logistics", icon: "L" },
                  { name: "SaaS", icon: "S" },
                ].map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 6 }}
                    className="group flex items-center gap-4 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 hover:border-cyan-500/40 transition-all duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                      {industry.icon}
                    </div>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                      {industry.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gray-950/85 backdrop-blur-sm" />

        {/* Vector Art - Left side keyboard */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <svg width="140" height="80" viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="136" height="76" rx="8" stroke="#fff" strokeWidth="1.5" fill="none" />
            {/* Keys row 1 */}
            <rect x="8" y="8" width="10" height="10" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="21" y="8" width="10" height="10" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="34" y="8" width="10" height="10" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="47" y="8" width="10" height="10" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="60" y="8" width="10" height="10" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="73" y="8" width="10" height="10" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="86" y="8" width="10" height="10" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="99" y="8" width="10" height="10" rx="2" fill="rgba(255,255,255,0.4)" />
            <rect x="112" y="8" width="20" height="10" rx="2" fill="rgba(255,255,255,0.4)" />
            {/* Keys row 2 */}
            <rect x="12" y="22" width="10" height="10" rx="2" fill="rgba(255,255,255,0.35)" />
            <rect x="25" y="22" width="10" height="10" rx="2" fill="rgba(255,255,255,0.35)" />
            <rect x="38" y="22" width="10" height="10" rx="2" fill="rgba(255,255,255,0.35)" />
            <rect x="51" y="22" width="10" height="10" rx="2" fill="rgba(255,255,255,0.35)" />
            <rect x="64" y="22" width="10" height="10" rx="2" fill="rgba(255,255,255,0.35)" />
            <rect x="77" y="22" width="10" height="10" rx="2" fill="rgba(255,255,255,0.35)" />
            <rect x="90" y="22" width="10" height="10" rx="2" fill="rgba(255,255,255,0.35)" />
            <rect x="103" y="22" width="10" height="10" rx="2" fill="rgba(255,255,255,0.35)" />
            {/* Keys row 3 */}
            <rect x="16" y="36" width="10" height="10" rx="2" fill="rgba(255,255,255,0.3)" />
            <rect x="29" y="36" width="10" height="10" rx="2" fill="rgba(255,255,255,0.3)" />
            <rect x="42" y="36" width="10" height="10" rx="2" fill="rgba(255,255,255,0.3)" />
            <rect x="55" y="36" width="10" height="10" rx="2" fill="rgba(255,255,255,0.3)" />
            <rect x="68" y="36" width="10" height="10" rx="2" fill="rgba(255,255,255,0.3)" />
            <rect x="81" y="36" width="10" height="10" rx="2" fill="rgba(255,255,255,0.3)" />
            <rect x="94" y="36" width="10" height="10" rx="2" fill="rgba(255,255,255,0.3)" />
            {/* Spacebar */}
            <rect x="30" y="50" width="80" height="10" rx="3" fill="rgba(255,255,255,0.35)" />
            {/* Arrow keys */}
            <rect x="108" y="56" width="8" height="8" rx="1.5" fill="rgba(255,255,255,0.25)" />
            <rect x="118" y="56" width="8" height="8" rx="1.5" fill="rgba(255,255,255,0.25)" />
            <rect x="113" y="48" width="8" height="8" rx="1.5" fill="rgba(255,255,255,0.25)" />
            <rect x="113" y="64" width="8" height="8" rx="1.5" fill="rgba(255,255,255,0.25)" />
          </svg>
        </div>

        {/* Vector Art - Right side cursor & mouse */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <svg width="60" height="100" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Mouse */}
            <rect x="10" y="10" width="40" height="70" rx="20" stroke="#fff" strokeWidth="1.5" fill="none" />
            <line x1="30" y1="10" x2="30" y2="35" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <rect x="27" y="20" width="6" height="14" rx="3" fill="rgba(255,255,255,0.5)" />
            {/* Click indicator */}
            <circle cx="30" cy="27" r="2" fill="rgba(6,182,212,0.7)" />
            {/* Scroll lines */}
            <line x1="22" y1="50" x2="38" y2="50" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <line x1="22" y1="55" x2="38" y2="55" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="22" y1="60" x2="38" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            {/* Wire */}
            <path d="M30 10 Q30 0 35 -5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Let us transform your ideas into powerful web experiences. Get a free consultation and project estimate today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="px-10 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

