"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import {
  ArrowRight,
  ArrowLeft,
  Smartphone,
  TabletSmartphone,
  Layers,
  Globe,
  ShieldCheck,
  Zap,
  Cpu,
  Paintbrush,
  Users,
  CheckCircle2,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Rocket,
  BarChart3,
  RefreshCw,
  HeartHandshake,
  Clock,
  Target,
} from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "iOS App Development",
    description:
      "Native iOS applications built with Swift and SwiftUI, optimized for iPhone and iPad with seamless App Store deployment.",
  },
  {
    icon: TabletSmartphone,
    title: "Android App Development",
    description:
      "High-performance Android apps using Kotlin and Jetpack Compose, compatible across thousands of devices and form factors.",
  },
  {
    icon: Layers,
    title: "Cross-Platform Development",
    description:
      "Cost-effective cross-platform solutions using React Native and Flutter, sharing codebases while delivering native experiences.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design for Mobile",
    description:
      "Human-centered mobile design with intuitive navigation, micro-interactions, and pixel-perfect interfaces that users love.",
  },
  {
    icon: Cpu,
    title: "App Modernization",
    description:
      "Legacy app migration, performance optimization, and architecture overhaul to meet modern standards and user expectations.",
  },
  {
    icon: ShieldCheck,
    title: "App Security & Testing",
    description:
      "Comprehensive QA testing, penetration testing, and security auditing to ensure your app is bulletproof before launch.",
  },
]

const processSteps = [
  { step: "01", title: "Discovery", description: "Requirements gathering, market research, and strategic planning to define your app's roadmap.", icon: Target },
  { step: "02", title: "Design", description: "Wireframing, prototyping, and UI/UX design with iterative user feedback loops.", icon: Paintbrush },
  { step: "03", title: "Development", description: "Agile sprints with continuous integration, code reviews, and milestone deliveries.", icon: Cpu },
  { step: "04", title: "Testing", description: "Manual and automated testing across devices, OS versions, and edge cases.", icon: ShieldCheck },
  { step: "05", title: "Launch", description: "App Store optimization, deployment, and launch strategy for maximum impact.", icon: Rocket },
  { step: "06", title: "Support", description: "Ongoing maintenance, updates, analytics monitoring, and feature enhancements.", icon: RefreshCw },
]

const techStack = [
  { name: "React Native", category: "Framework" },
  { name: "Flutter", category: "Framework" },
  { name: "Swift", category: "Language" },
  { name: "Kotlin", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Dart", category: "Language" },
  { name: "Firebase", category: "Backend" },
  { name: "AWS Amplify", category: "Backend" },
  { name: "GraphQL", category: "API" },
  { name: "REST API", category: "API" },
  { name: "Figma", category: "Design" },
  { name: "Xcode", category: "Tool" },
  { name: "Android Studio", category: "Tool" },
  { name: "Redux", category: "State" },
  { name: "SQLite", category: "Database" },
  { name: "Realm", category: "Database" },
]

const industries = [
  "Healthcare & Fitness",
  "E-Commerce & Retail",
  "Finance & Banking",
  "Education & E-Learning",
  "Travel & Hospitality",
  "Social Networking",
  "Real Estate",
  "Food & Delivery",
  "Entertainment & Media",
  "Logistics & Transport",
]

const whyChoose = [
  { icon: Zap, title: "Fast Delivery", description: "Agile methodology ensures rapid iteration and on-time delivery." },
  { icon: Users, title: "Dedicated Team", description: "Experienced developers, designers, and PMs fully committed to your project." },
  { icon: BarChart3, title: "Data-Driven", description: "Analytics-first approach with measurable KPIs and growth metrics." },
  { icon: HeartHandshake, title: "Transparent Process", description: "Regular updates, sprint demos, and open communication throughout." },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock maintenance and support post-launch." },
  { icon: ShieldCheck, title: "Secure & Scalable", description: "Enterprise-grade security with architecture built to scale." },
]

export default function MobileAppDevelopmentPage() {
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-950 via-blue-950 to-gray-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#3b82f6_0%,transparent_50%)] opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#6366f1_0%,transparent_50%)] opacity-[0.15]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Vector Art - Smartphone */}
        <div className="absolute top-[12%] right-[8%] hidden lg:block">
          <motion.div
            animate={{ y: [-14, 14, -14], rotate: [-3, 3, -3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="160" height="280" viewBox="0 0 160 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="140" height="260" rx="24" stroke="rgba(99,102,241,0.35)" strokeWidth="2" fill="#0f172a" />
              <rect x="18" y="40" width="124" height="200" rx="4" fill="#1e293b" />
              <rect x="55" y="16" width="50" height="8" rx="4" fill="rgba(99,102,241,0.2)" />
              <circle cx="80" cy="255" r="10" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" fill="none" />
              <rect x="28" y="55" width="70" height="8" rx="4" fill="rgba(59,130,246,0.3)" />
              <rect x="28" y="70" width="100" height="6" rx="3" fill="rgba(99,102,241,0.15)" />
              <rect x="28" y="82" width="85" height="6" rx="3" fill="rgba(99,102,241,0.1)" />
              <rect x="28" y="100" width="48" height="48" rx="8" fill="rgba(59,130,246,0.12)" />
              <rect x="82" y="100" width="48" height="48" rx="8" fill="rgba(99,102,241,0.12)" />
              <rect x="28" y="156" width="48" height="48" rx="8" fill="rgba(99,102,241,0.08)" />
              <rect x="82" y="156" width="48" height="48" rx="8" fill="rgba(59,130,246,0.08)" />
              <rect x="28" y="214" width="102" height="16" rx="8" fill="rgba(59,130,246,0.2)" />
              <circle cx="52" cy="124" r="10" fill="rgba(59,130,246,0.2)" />
              <circle cx="106" cy="124" r="10" fill="rgba(99,102,241,0.2)" />
            </svg>
          </motion.div>
        </div>

        {/* Vector Art - App Notification */}
        <div className="absolute bottom-[25%] right-[15%] hidden lg:block">
          <motion.div
            animate={{ y: [6, -8, 6], x: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <svg width="140" height="60" viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="136" height="56" rx="14" fill="#1e293b" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" />
              <circle cx="24" cy="30" r="12" fill="rgba(59,130,246,0.2)" />
              <rect x="44" y="18" width="60" height="6" rx="3" fill="rgba(99,102,241,0.3)" />
              <rect x="44" y="30" width="80" height="5" rx="2.5" fill="rgba(59,130,246,0.15)" />
              <rect x="44" y="40" width="50" height="5" rx="2.5" fill="rgba(59,130,246,0.1)" />
              <circle cx="126" cy="16" r="6" fill="rgba(239,68,68,0.5)" />
              <text x="124" y="19" fill="white" fontSize="8" fontFamily="sans-serif" textAnchor="middle">3</text>
            </svg>
          </motion.div>
        </div>

        {/* Vector Art - Touch / Tap gesture */}
        <div className="absolute top-[55%] right-[5%] hidden lg:block">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="20" r="12" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" fill="none" />
              <circle cx="30" cy="20" r="5" fill="rgba(59,130,246,0.3)" />
              <path d="M30 32 L30 55 Q30 60 25 65 L20 70" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M30 50 Q35 55 40 52" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <circle cx="30" cy="20" r="18" stroke="rgba(59,130,246,0.1)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
            </svg>
          </motion.div>
        </div>

        {/* Vector Art - Signal / Wifi waves */}
        <div className="absolute top-[30%] left-[8%] hidden lg:block">
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="55" r="4" fill="rgba(59,130,246,0.4)" />
              <path d="M22 42 Q35 30 48 42" stroke="rgba(59,130,246,0.3)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M14 32 Q35 16 56 32" stroke="rgba(59,130,246,0.2)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M6 22 Q35 2 64 22" stroke="rgba(59,130,246,0.1)" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </motion.div>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto w-full pt-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Services</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <Smartphone className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Mobile App Development</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Apps That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">
                Move Business
              </span>
              Forward
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
              We craft high-performance mobile applications for iOS and Android that deliver exceptional user experiences, drive engagement, and accelerate your business growth in the mobile-first world.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="px-8 py-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-base">
                  Start Your App
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button className="px-8 py-6 rounded-full border-2 border-blue-500/30 bg-transparent text-white font-semibold hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 text-base">
                View Portfolio
              </Button>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-12 mt-20 pb-16"
          >
            {[
              { value: "200+", label: "Apps Delivered" },
              { value: "50M+", label: "Total Downloads" },
              { value: "4.8", label: "Avg. App Rating" },
              { value: "98%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section - Alternating cards layout */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px]" />

        {/* Vector Art - App Store Icon */}
        <div className="absolute top-16 right-12 hidden lg:block opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="100" height="100" rx="22" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <path d="M60 35 L60 85" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
            <path d="M35 60 L85 60" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
            <path d="M45 45 L75 75" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
            <path d="M75 45 L45 75" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          </svg>
        </div>

        {/* Vector Art - Device sync */}
        <div className="absolute bottom-16 left-10 hidden lg:block opacity-20">
          <svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="10" width="50" height="80" rx="8" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
            <rect x="10" y="22" width="40" height="56" rx="3" fill="rgba(59,130,246,0.08)" />
            <rect x="105" y="10" width="50" height="80" rx="8" stroke="#6366f1" strokeWidth="1.5" fill="none" />
            <rect x="110" y="22" width="40" height="56" rx="3" fill="rgba(99,102,241,0.08)" />
            <path d="M60 40 L100 40" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" />
            <path d="M60 60 L100 60" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 3" />
            <path d="M94 36 L100 40 L94 44" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M66 56 L60 60 L66 64" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">What We Offer</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">Our Mobile Services</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">End-to-end mobile development services tailored for startups, enterprises, and everything in between.</p>
          </motion.div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start gap-6 p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 bg-white ${index % 2 === 0 ? "md:ml-0 md:mr-16" : "md:ml-16 md:mr-0"}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{service.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Hexagonal grid */}
      <section className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)]" />

        {/* Vector Art - Code editor */}
        <div className="absolute top-12 left-8 hidden lg:block opacity-20">
          <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="152" height="112" rx="10" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="4" y="4" width="152" height="22" rx="10" fill="rgba(59,130,246,0.1)" />
            <rect x="4" y="16" width="152" height="10" fill="rgba(59,130,246,0.1)" />
            <circle cx="18" cy="15" r="3.5" fill="rgba(239,68,68,0.5)" />
            <circle cx="30" cy="15" r="3.5" fill="rgba(234,179,8,0.5)" />
            <circle cx="42" cy="15" r="3.5" fill="rgba(34,197,94,0.5)" />
            <rect x="14" y="34" width="50" height="4" rx="2" fill="rgba(59,130,246,0.3)" />
            <rect x="24" y="44" width="80" height="4" rx="2" fill="rgba(99,102,241,0.2)" />
            <rect x="24" y="54" width="60" height="4" rx="2" fill="rgba(59,130,246,0.15)" />
            <rect x="14" y="64" width="40" height="4" rx="2" fill="rgba(244,114,182,0.2)" />
            <rect x="24" y="74" width="70" height="4" rx="2" fill="rgba(59,130,246,0.2)" />
            <rect x="24" y="84" width="50" height="4" rx="2" fill="rgba(99,102,241,0.15)" />
            <rect x="14" y="94" width="30" height="4" rx="2" fill="rgba(59,130,246,0.25)" />
          </svg>
        </div>

        {/* Vector Art - API / Connection node */}
        <div className="absolute bottom-16 right-10 hidden lg:block opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="16" stroke="#3b82f6" strokeWidth="2" fill="rgba(59,130,246,0.08)" />
            <circle cx="60" cy="60" r="6" fill="rgba(59,130,246,0.3)" />
            <circle cx="20" cy="20" r="8" stroke="#6366f1" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="20" r="8" stroke="#6366f1" strokeWidth="1.5" fill="none" />
            <circle cx="20" cy="100" r="8" stroke="#6366f1" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="100" r="8" stroke="#6366f1" strokeWidth="1.5" fill="none" />
            <line x1="32" y1="32" x2="48" y2="48" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="88" y1="32" x2="72" y2="48" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="32" y1="88" x2="48" y2="72" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="88" y1="88" x2="72" y2="72" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Technologies</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">Our Tech Stack</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">We use the latest technologies to build robust, scalable mobile applications.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="px-6 py-3 bg-gray-800/60 border border-gray-700 rounded-full hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-default">
                  <span className="text-sm font-medium text-gray-300 group-hover:text-blue-300 transition-colors">{tech.name}</span>
                  <span className="ml-2 text-xs text-gray-600 group-hover:text-blue-500/60 transition-colors">{tech.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Vertical timeline with cards */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px]" />

        {/* Vector Art - Rocket Launch */}
        <div className="absolute top-20 left-8 hidden lg:block opacity-20">
          <svg width="80" height="140" viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 10 Q40 10 55 45 L55 85 Q55 94 40 98 Q25 94 25 85 L25 45 Q40 10 40 10Z" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <path d="M40 10 Q36 27 33 40 L47 40 Q44 27 40 10Z" fill="rgba(59,130,246,0.1)" />
            <circle cx="40" cy="55" r="7" stroke="#6366f1" strokeWidth="1.5" fill="rgba(99,102,241,0.08)" />
            <path d="M25 75 L12 98 L25 92Z" fill="rgba(59,130,246,0.15)" />
            <path d="M55 75 L68 98 L55 92Z" fill="rgba(59,130,246,0.15)" />
            <path d="M33 98 Q37 115 40 130 Q43 115 47 98" stroke="rgba(59,130,246,0.25)" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* Vector Art - Checklist */}
        <div className="absolute bottom-16 right-12 hidden lg:block opacity-20">
          <svg width="100" height="130" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="5" width="80" height="120" rx="8" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
            <rect x="10" y="5" width="80" height="20" rx="8" fill="rgba(59,130,246,0.08)" />
            <rect x="10" y="15" width="80" height="10" fill="rgba(59,130,246,0.08)" />
            <rect x="30" y="10" width="40" height="6" rx="3" fill="rgba(59,130,246,0.15)" />
            <rect x="38" y="38" width="40" height="5" rx="2.5" fill="rgba(59,130,246,0.12)" />
            <rect x="38" y="56" width="40" height="5" rx="2.5" fill="rgba(59,130,246,0.12)" />
            <rect x="38" y="74" width="40" height="5" rx="2.5" fill="rgba(59,130,246,0.12)" />
            <rect x="38" y="92" width="40" height="5" rx="2.5" fill="rgba(59,130,246,0.08)" />
            <rect x="22" y="35" width="10" height="10" rx="2" stroke="#3b82f6" strokeWidth="1" fill="none" />
            <path d="M24 40 L27 43 L31 37" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <rect x="22" y="53" width="10" height="10" rx="2" stroke="#3b82f6" strokeWidth="1" fill="none" />
            <path d="M24 58 L27 61 L31 55" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <rect x="22" y="71" width="10" height="10" rx="2" stroke="#3b82f6" strokeWidth="1" fill="none" />
            <path d="M24 76 L27 79 L31 73" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <rect x="22" y="89" width="10" height="10" rx="2" stroke="#6366f1" strokeWidth="1" fill="none" opacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">Our Process</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">How We Build</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">A proven 6-step methodology that delivers results on time, every time.</p>
          </motion.div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-500 hidden md:block" />

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                    <div className={`inline-flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-bold text-blue-500 tracking-widest">STEP {step.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md hidden md:block" style={{ top: "20px" }} />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Card grid with icons */}
      <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">

        {/* Vector Art - Trophy */}
        <div className="absolute top-12 right-10 hidden lg:block opacity-20">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 15 L30 55 Q30 75 50 80 Q70 75 70 55 L70 15 Z" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <path d="M30 25 L15 25 Q8 25 8 35 L8 40 Q8 50 18 52 L30 45" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
            <path d="M70 25 L85 25 Q92 25 92 35 L92 40 Q92 50 82 52 L70 45" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
            <rect x="42" y="80" width="16" height="15" fill="rgba(59,130,246,0.1)" />
            <rect x="32" y="95" width="36" height="10" rx="3" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
            <path d="M42 35 L47 48 L60 48 L50 56 L53 70 L42 60 L31 70 L34 56 L24 48 L37 48 Z" fill="rgba(59,130,246,0.12)" stroke="#6366f1" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Vector Art - Handshake */}
        <div className="absolute bottom-12 left-8 hidden lg:block opacity-20">
          <svg width="140" height="80" viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 40 L35 20 L55 35 L75 25 L95 40" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M95 40 L115 55 L130 45" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M55 35 L65 55 L85 50" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <circle cx="35" cy="20" r="4" fill="rgba(59,130,246,0.2)" />
            <circle cx="95" cy="40" r="4" fill="rgba(99,102,241,0.2)" />
            <circle cx="55" cy="35" r="3" fill="rgba(59,130,246,0.15)" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">Why Us</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">Why Choose Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 flex items-center justify-center mb-5 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <pattern id="mobile-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="rgba(59,130,246,0.5)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#mobile-grid)" />
          </svg>
        </div>

        {/* Vector Art - Globe network */}
        <div className="absolute top-16 right-8 hidden lg:block opacity-20">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70" cy="70" r="50" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
            <ellipse cx="70" cy="70" rx="25" ry="50" stroke="#3b82f6" strokeWidth="1" fill="none" />
            <line x1="20" y1="55" x2="120" y2="55" stroke="#3b82f6" strokeWidth="0.8" opacity="0.4" />
            <line x1="20" y1="85" x2="120" y2="85" stroke="#3b82f6" strokeWidth="0.8" opacity="0.4" />
            <circle cx="70" cy="20" r="3" fill="#3b82f6" opacity="0.3" />
            <circle cx="70" cy="120" r="3" fill="#3b82f6" opacity="0.3" />
            <circle cx="20" cy="70" r="3" fill="#3b82f6" opacity="0.3" />
            <circle cx="120" cy="70" r="3" fill="#3b82f6" opacity="0.3" />
          </svg>
        </div>

        {/* Vector Art - Building */}
        <div className="absolute bottom-12 left-8 hidden lg:block opacity-20">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="60" height="95" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
            <rect x="28" y="30" width="12" height="10" rx="2" fill="rgba(59,130,246,0.15)" />
            <rect x="44" y="30" width="12" height="10" rx="2" fill="rgba(59,130,246,0.15)" />
            <rect x="60" y="30" width="12" height="10" rx="2" fill="rgba(59,130,246,0.15)" />
            <rect x="28" y="48" width="12" height="10" rx="2" fill="rgba(59,130,246,0.12)" />
            <rect x="44" y="48" width="12" height="10" rx="2" fill="rgba(99,102,241,0.12)" />
            <rect x="60" y="48" width="12" height="10" rx="2" fill="rgba(59,130,246,0.12)" />
            <rect x="28" y="66" width="12" height="10" rx="2" fill="rgba(59,130,246,0.08)" />
            <rect x="44" y="66" width="12" height="10" rx="2" fill="rgba(59,130,246,0.08)" />
            <rect x="60" y="66" width="12" height="10" rx="2" fill="rgba(59,130,246,0.08)" />
            <rect x="40" y="90" width="20" height="25" rx="3" stroke="#3b82f6" strokeWidth="1" fill="rgba(59,130,246,0.06)" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Industries</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">Industries We Serve</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 bg-gray-800/40 border border-gray-700 rounded-2xl hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 text-center cursor-default"
              >
                <p className="text-gray-300 text-sm font-medium group-hover:text-blue-300 transition-colors">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gray-950/88 backdrop-blur-sm" />

        {/* Vector Art - Download arrow */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="5" width="40" height="70" rx="10" stroke="#fff" strokeWidth="1.5" fill="none" />
            <rect x="25" y="15" width="30" height="48" rx="3" fill="rgba(255,255,255,0.06)" />
            <path d="M40 30 L40 55" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 48 L40 56 L48 48" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="40" cy="72" r="3" stroke="#fff" strokeWidth="1" fill="none" />
            <path d="M20 85 L60 85" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <text x="28" y="95" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="monospace">GET APP</text>
          </svg>
        </div>

        {/* Vector Art - Star rating */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[0, 25, 50, 75, 100].map((x) => (
              <path key={x} d={`M${x + 10} 8 L${x + 12} 16 L${x + 20} 16 L${x + 14} 21 L${x + 16} 30 L${x + 10} 24 L${x + 4} 30 L${x + 6} 21 L${x} 16 L${x + 8} 16 Z`} fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
            ))}
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Ready to Build Your App?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Let&apos;s turn your idea into a powerful mobile experience. Get a free consultation and project estimate today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button className="px-10 py-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-base">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button className="px-10 py-6 rounded-full border-2 border-white/20 bg-transparent text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-base">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

