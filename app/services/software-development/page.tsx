"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import {
  ArrowRight,
  Settings,
  Code2,
  Database,
  ShieldCheck,
  Layers,
  Cpu,
  Cloud,
  RefreshCw,
  CheckCircle2,
  Globe,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Rocket,
  GitBranch,
  BarChart3,
  Lock,
  Paintbrush,
  Users,
  Zap,
  HeartHandshake,
  Award,
} from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailor-made software solutions designed from scratch to perfectly align with your business processes, workflows, and growth objectives.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Applications",
    description:
      "Scalable cloud-native apps built on AWS, Azure, or GCP with microservices architecture, serverless functions, and auto-scaling.",
  },
  {
    icon: Database,
    title: "Enterprise Solutions",
    description:
      "Robust enterprise-grade software with ERP, CRM, and business intelligence integrations for streamlined operations at scale.",
  },
  {
    icon: Layers,
    title: "API Development & Integration",
    description:
      "RESTful and GraphQL API design, third-party integrations, and middleware solutions connecting disparate systems seamlessly.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance & Testing",
    description:
      "End-to-end QA with automated testing pipelines, performance benchmarking, security audits, and continuous integration.",
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernization",
    description:
      "Transform outdated systems into modern, maintainable architectures with zero-downtime migrations and incremental refactoring.",
  },
]

const processSteps = [
  { step: "01", title: "Requirement Analysis", description: "Deep-dive into your business needs, workflows, and technical constraints to define a precise project scope.", icon: Users },
  { step: "02", title: "Architecture Design", description: "System architecture blueprinting with tech stack selection, database schemas, and infrastructure planning.", icon: GitBranch },
  { step: "03", title: "Agile Development", description: "Iterative sprint-based development with bi-weekly demos, continuous feedback, and milestone deliveries.", icon: Code2 },
  { step: "04", title: "Testing & QA", description: "Rigorous multi-layer testing including unit, integration, E2E, performance, and security validation.", icon: ShieldCheck },
  { step: "05", title: "Deployment", description: "CI/CD pipeline setup, staged rollouts, blue-green deployments, and production environment optimization.", icon: Rocket },
  { step: "06", title: "Maintenance & Support", description: "24/7 monitoring, bug fixes, feature enhancements, and performance optimization post-launch.", icon: RefreshCw },
]

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "Go", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "TypeScript", category: "Language" },
]

const industries = [
  "Healthcare", "Finance & Banking", "E-Commerce", "Education",
  "Logistics", "Real Estate", "Manufacturing", "Media & Entertainment",
  "Government", "SaaS Platforms", "Insurance", "Hospitality",
]

export default function SoftwareDevelopmentPage() {
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,63,94,0.12)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(225,29,72,0.08)_0%,transparent_50%)]" />
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(244,63,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(244,63,94,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        {/* Vector Art - Terminal Window */}
        <div className="absolute top-[15%] right-[6%] hidden lg:block">
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [-1, 1, -1] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <svg width="240" height="170" viewBox="0 0 240 170" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="230" height="160" rx="12" fill="#111827" stroke="rgba(244,63,94,0.3)" strokeWidth="2" />
              <rect x="5" y="5" width="230" height="28" rx="12" fill="#1f2937" />
              <rect x="5" y="25" width="230" height="8" fill="#1f2937" />
              <circle cx="22" cy="19" r="4" fill="#ef4444" />
              <circle cx="36" cy="19" r="4" fill="#eab308" />
              <circle cx="50" cy="19" r="4" fill="#22c55e" />
              <rect x="80" y="14" width="90" height="10" rx="5" fill="#374151" />
              <text x="20" y="52" fill="rgba(244,63,94,0.7)" fontSize="10" fontFamily="monospace">$</text>
              <rect x="32" y="43" width="80" height="5" rx="2.5" fill="rgba(244,63,94,0.4)" />
              <text x="20" y="70" fill="rgba(34,197,94,0.6)" fontSize="10" fontFamily="monospace">{"> "}</text>
              <rect x="32" y="61" width="120" height="5" rx="2.5" fill="rgba(34,197,94,0.3)" />
              <text x="20" y="88" fill="rgba(244,63,94,0.7)" fontSize="10" fontFamily="monospace">$</text>
              <rect x="32" y="79" width="95" height="5" rx="2.5" fill="rgba(244,63,94,0.35)" />
              <rect x="32" y="97" width="140" height="5" rx="2.5" fill="rgba(251,191,36,0.3)" />
              <rect x="32" y="115" width="60" height="5" rx="2.5" fill="rgba(96,165,250,0.3)" />
              <rect x="100" y="115" width="70" height="5" rx="2.5" fill="rgba(244,63,94,0.25)" />
              <rect x="18" y="130" width="8" height="14" rx="1" fill="rgba(244,63,94,0.5)">
                <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
              </rect>
            </svg>
          </motion.div>
        </div>

        {/* Vector Art - Gear System */}
        <div className="absolute bottom-[20%] right-[15%] hidden lg:block">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="16" stroke="rgba(244,63,94,0.4)" strokeWidth="2" fill="none" />
              <circle cx="40" cy="40" r="8" fill="rgba(244,63,94,0.15)" />
              <rect x="36" y="4" width="8" height="14" rx="3" fill="rgba(244,63,94,0.25)" />
              <rect x="36" y="62" width="8" height="14" rx="3" fill="rgba(244,63,94,0.25)" />
              <rect x="4" y="36" width="14" height="8" rx="3" fill="rgba(244,63,94,0.25)" />
              <rect x="62" y="36" width="14" height="8" rx="3" fill="rgba(244,63,94,0.25)" />
              <rect x="12" y="12" width="10" height="8" rx="3" fill="rgba(244,63,94,0.15)" transform="rotate(45 17 16)" />
              <rect x="58" y="12" width="10" height="8" rx="3" fill="rgba(244,63,94,0.15)" transform="rotate(-45 63 16)" />
              <rect x="12" y="60" width="10" height="8" rx="3" fill="rgba(244,63,94,0.15)" transform="rotate(-45 17 64)" />
              <rect x="58" y="60" width="10" height="8" rx="3" fill="rgba(244,63,94,0.15)" transform="rotate(45 63 64)" />
            </svg>
          </motion.div>
        </div>

        {/* Vector Art - Flow Diagram */}
        <div className="absolute top-[60%] right-[32%] hidden lg:block">
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
          >
            <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="20" width="20" height="20" rx="4" stroke="rgba(244,63,94,0.5)" strokeWidth="1.5" fill="rgba(244,63,94,0.08)" />
              <rect x="40" y="20" width="20" height="20" rx="4" stroke="rgba(244,63,94,0.4)" strokeWidth="1.5" fill="rgba(244,63,94,0.06)" />
              <rect x="78" y="20" width="20" height="20" rx="4" stroke="rgba(244,63,94,0.3)" strokeWidth="1.5" fill="rgba(244,63,94,0.04)" />
              <line x1="22" y1="30" x2="40" y2="30" stroke="rgba(244,63,94,0.4)" strokeWidth="1.5" />
              <line x1="60" y1="30" x2="78" y2="30" stroke="rgba(244,63,94,0.3)" strokeWidth="1.5" />
              <polygon points="38,27 42,30 38,33" fill="rgba(244,63,94,0.4)" />
              <polygon points="76,27 80,30 76,33" fill="rgba(244,63,94,0.3)" />
            </svg>
          </motion.div>
        </div>

        {/* Vector Art - Binary */}
        <div className="absolute top-[35%] right-[5%] hidden lg:block">
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
          >
            <svg width="50" height="80" viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="5" y="15" fill="rgba(244,63,94,0.3)" fontSize="12" fontFamily="monospace">01</text>
              <text x="15" y="30" fill="rgba(244,63,94,0.25)" fontSize="12" fontFamily="monospace">10</text>
              <text x="5" y="45" fill="rgba(244,63,94,0.2)" fontSize="12" fontFamily="monospace">11</text>
              <text x="15" y="60" fill="rgba(244,63,94,0.15)" fontSize="12" fontFamily="monospace">00</text>
              <text x="5" y="75" fill="rgba(244,63,94,0.1)" fontSize="12" fontFamily="monospace">01</text>
            </svg>
          </motion.div>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto w-full pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full mb-8">
              <Settings className="w-4 h-4 text-rose-400" />
              <span className="text-rose-400 text-sm font-medium">Software Development</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
              Building Software
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500">
                That Scales
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
              We craft bespoke software solutions engineered for performance, security, and longevity. From enterprise platforms to cloud-native apps, our team delivers code that powers your business forward.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-300">
                  Start Your Project
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-full hover:border-rose-500/50 hover:bg-rose-500/5 transition-all duration-300">
                  All Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Card Grid with Diagonal Accent */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/5 rounded-full blur-[100px]" />

        {/* Vector Art - Wrench & Screwdriver */}
        <div className="absolute top-16 right-12 hidden lg:block opacity-20">
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 10 L30 90 L25 100 L22 110 Q20 120 28 120 L32 120 Q40 120 38 110 L35 100 L30 90" stroke="#e11d48" strokeWidth="2" fill="none" />
            <rect x="24" y="10" width="12" height="20" rx="3" fill="#e11d48" opacity="0.15" />
            <path d="M70 20 L90 40 L85 45 L78 38 L78 100 L82 110 Q84 118 76 118 L74 118 Q66 118 68 110 L72 100 L72 38 L65 45 L60 40 Z" stroke="#e11d48" strokeWidth="1.5" fill="none" />
            <circle cx="75" cy="15" r="8" stroke="#e11d48" strokeWidth="1.5" fill="#e11d48" opacity="0.08" />
          </svg>
        </div>

        {/* Vector Art - Clipboard Checklist */}
        <div className="absolute bottom-16 left-10 hidden lg:block opacity-20">
          <svg width="100" height="130" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="15" width="80" height="110" rx="8" stroke="#e11d48" strokeWidth="1.5" fill="none" />
            <rect x="30" y="5" width="40" height="18" rx="6" stroke="#e11d48" strokeWidth="1.5" fill="#e11d48" opacity="0.08" />
            <circle cx="50" cy="14" r="3" fill="#e11d48" opacity="0.2" />
            <rect x="22" y="38" width="10" height="10" rx="2" stroke="#e11d48" strokeWidth="1" fill="none" />
            <path d="M24 43 L28 47 L32 39" stroke="#e11d48" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
            <rect x="38" y="40" width="40" height="4" rx="2" fill="#e11d48" opacity="0.12" />
            <rect x="22" y="58" width="10" height="10" rx="2" stroke="#e11d48" strokeWidth="1" fill="none" />
            <path d="M24 63 L28 67 L32 59" stroke="#e11d48" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
            <rect x="38" y="60" width="35" height="4" rx="2" fill="#e11d48" opacity="0.12" />
            <rect x="22" y="78" width="10" height="10" rx="2" stroke="#e11d48" strokeWidth="1" fill="none" />
            <rect x="38" y="80" width="42" height="4" rx="2" fill="#e11d48" opacity="0.12" />
            <rect x="22" y="98" width="10" height="10" rx="2" stroke="#e11d48" strokeWidth="1" fill="none" />
            <rect x="38" y="100" width="30" height="4" rx="2" fill="#e11d48" opacity="0.12" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-rose-500 font-semibold text-sm tracking-widest uppercase mb-4 block">What We Offer</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">Our Software Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-rose-500 to-red-600 rounded-r-full group-hover:h-full transition-all duration-500" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Categorized Columns */}
      <section className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.08)_0%,transparent_60%)]" />

        {/* Vector Art - Server Stack */}
        <div className="absolute top-12 left-8 hidden lg:block opacity-20">
          <svg width="100" height="160" viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="30" rx="6" stroke="#f43f5e" strokeWidth="1.5" fill="none" />
            <circle cx="28" cy="25" r="4" fill="#f43f5e" opacity="0.2" />
            <rect x="40" y="22" width="30" height="5" rx="2.5" fill="#f43f5e" opacity="0.15" />
            <circle cx="80" cy="25" r="3" fill="#22c55e" opacity="0.4" />
            <rect x="10" y="50" width="80" height="30" rx="6" stroke="#f43f5e" strokeWidth="1.5" fill="none" />
            <circle cx="28" cy="65" r="4" fill="#f43f5e" opacity="0.2" />
            <rect x="40" y="62" width="30" height="5" rx="2.5" fill="#f43f5e" opacity="0.15" />
            <circle cx="80" cy="65" r="3" fill="#22c55e" opacity="0.4" />
            <rect x="10" y="90" width="80" height="30" rx="6" stroke="#f43f5e" strokeWidth="1.5" fill="none" />
            <circle cx="28" cy="105" r="4" fill="#f43f5e" opacity="0.2" />
            <rect x="40" y="102" width="30" height="5" rx="2.5" fill="#f43f5e" opacity="0.15" />
            <circle cx="80" cy="105" r="3" fill="#eab308" opacity="0.4" />
            <line x1="50" y1="130" x2="50" y2="150" stroke="#f43f5e" strokeWidth="1" opacity="0.3" />
            <rect x="30" y="148" width="40" height="6" rx="3" fill="#f43f5e" opacity="0.1" />
          </svg>
        </div>

        {/* Vector Art - Connected Nodes */}
        <div className="absolute bottom-16 right-10 hidden lg:block opacity-20">
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="10" stroke="#f43f5e" strokeWidth="1.5" fill="rgba(244,63,94,0.08)" />
            <circle cx="70" cy="15" r="12" stroke="#f43f5e" strokeWidth="1.5" fill="rgba(244,63,94,0.1)" />
            <circle cx="120" cy="25" r="10" stroke="#f43f5e" strokeWidth="1.5" fill="rgba(244,63,94,0.08)" />
            <circle cx="40" cy="70" r="10" stroke="#f43f5e" strokeWidth="1.5" fill="rgba(244,63,94,0.06)" />
            <circle cx="100" cy="75" r="12" stroke="#f43f5e" strokeWidth="1.5" fill="rgba(244,63,94,0.08)" />
            <line x1="28" y1="24" x2="58" y2="17" stroke="#f43f5e" strokeWidth="1" opacity="0.3" />
            <line x1="82" y1="17" x2="110" y2="23" stroke="#f43f5e" strokeWidth="1" opacity="0.3" />
            <line x1="24" y1="30" x2="36" y2="60" stroke="#f43f5e" strokeWidth="1" opacity="0.25" />
            <line x1="76" y1="26" x2="94" y2="64" stroke="#f43f5e" strokeWidth="1" opacity="0.25" />
            <line x1="50" y1="72" x2="88" y2="74" stroke="#f43f5e" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-rose-400 font-semibold text-sm tracking-widest uppercase mb-4 block">Technologies</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">Our Tech Stack</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group px-5 py-3 bg-gray-800/60 border border-gray-700/50 rounded-full hover:border-rose-500/40 hover:bg-rose-500/10 transition-all duration-300 cursor-default"
              >
                <span className="text-sm text-gray-300 group-hover:text-rose-300 transition-colors duration-300 font-medium">{tech.name}</span>
                <span className="text-xs text-gray-600 ml-2">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Staggered Timeline */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-[120px]" />

        {/* Vector Art - Hourglass */}
        <div className="absolute top-16 left-10 hidden lg:block opacity-20">
          <svg width="70" height="130" viewBox="0 0 70 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="5" width="50" height="6" rx="3" fill="#e11d48" opacity="0.3" />
            <rect x="10" y="119" width="50" height="6" rx="3" fill="#e11d48" opacity="0.3" />
            <path d="M15 11 L15 40 Q35 65 35 65 Q15 90 15 90 L15 119" stroke="#e11d48" strokeWidth="1.5" fill="none" />
            <path d="M55 11 L55 40 Q35 65 35 65 Q55 90 55 90 L55 119" stroke="#e11d48" strokeWidth="1.5" fill="none" />
            <path d="M20 16 L50 16 L50 35 Q35 55 35 55 Q20 35 20 35 Z" fill="#e11d48" opacity="0.06" />
            <path d="M20 114 L50 114 L50 95 Q35 75 35 75 Q20 95 20 95 Z" fill="#e11d48" opacity="0.1" />
            <circle cx="35" cy="65" r="2" fill="#e11d48" opacity="0.3" />
          </svg>
        </div>

        {/* Vector Art - Compass */}
        <div className="absolute bottom-20 right-12 hidden lg:block opacity-20">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="#e11d48" strokeWidth="1.5" fill="none" />
            <circle cx="50" cy="50" r="35" stroke="#e11d48" strokeWidth="0.5" fill="none" opacity="0.3" />
            <circle cx="50" cy="50" r="4" fill="#e11d48" opacity="0.25" />
            <polygon points="50,15 46,48 50,50 54,48" fill="#e11d48" opacity="0.3" />
            <polygon points="50,85 54,52 50,50 46,52" fill="#e11d48" opacity="0.15" />
            <text x="46" y="12" fill="#e11d48" opacity="0.25" fontSize="8" fontFamily="sans-serif" fontWeight="bold">N</text>
            <text x="46" y="98" fill="#e11d48" opacity="0.25" fontSize="8" fontFamily="sans-serif">S</text>
            <text x="4" y="54" fill="#e11d48" opacity="0.25" fontSize="8" fontFamily="sans-serif">W</text>
            <text x="88" y="54" fill="#e11d48" opacity="0.25" fontSize="8" fontFamily="sans-serif">E</text>
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-rose-500 font-semibold text-sm tracking-widest uppercase mb-4 block">How We Work</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">Our Development Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -top-2 -left-2 text-8xl font-black text-rose-500/5 group-hover:text-rose-500/10 transition-colors duration-500 select-none leading-none">{step.step}</div>
                <div className="relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-rose-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-red-600 transition-all duration-300">
                    <step.icon className="w-6 h-6 text-rose-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Stats & Features */}
      <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">

        {/* Vector Art - Trophy */}
        <div className="absolute top-12 right-12 hidden lg:block opacity-20">
          <svg width="100" height="130" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 15 L70 15 L70 55 Q70 80 50 90 Q30 80 30 55 Z" stroke="#e11d48" strokeWidth="2" fill="none" />
            <path d="M35 20 L65 20 L65 52 Q65 74 50 83 Q35 74 35 52 Z" fill="#e11d48" opacity="0.06" />
            <path d="M30 25 L20 25 Q8 25 10 40 L14 55 Q16 62 24 60 L30 58" stroke="#e11d48" strokeWidth="1.5" fill="none" />
            <path d="M70 25 L80 25 Q92 25 90 40 L86 55 Q84 62 76 60 L70 58" stroke="#e11d48" strokeWidth="1.5" fill="none" />
            <rect x="42" y="90" width="16" height="15" rx="2" fill="#e11d48" opacity="0.1" />
            <rect x="32" y="105" width="36" height="8" rx="4" fill="#e11d48" opacity="0.15" />
            <text x="42" y="60" fill="#e11d48" opacity="0.2" fontSize="20" fontFamily="sans-serif" fontWeight="bold">1</text>
          </svg>
        </div>

        {/* Vector Art - Lightbulb */}
        <div className="absolute bottom-16 left-10 hidden lg:block opacity-20">
          <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="38" r="28" stroke="#e11d48" strokeWidth="2" fill="none" />
            <circle cx="40" cy="38" r="20" fill="#e11d48" opacity="0.05" />
            <path d="M30 58 L30 80 Q30 85 35 85 L45 85 Q50 85 50 80 L50 58" stroke="#e11d48" strokeWidth="1.5" fill="none" />
            <line x1="30" y1="68" x2="50" y2="68" stroke="#e11d48" strokeWidth="1" opacity="0.3" />
            <line x1="30" y1="74" x2="50" y2="74" stroke="#e11d48" strokeWidth="1" opacity="0.3" />
            <line x1="40" y1="18" x2="40" y2="10" stroke="#e11d48" strokeWidth="1.5" opacity="0.3" />
            <line x1="56" y1="22" x2="62" y2="16" stroke="#e11d48" strokeWidth="1.5" opacity="0.25" />
            <line x1="24" y1="22" x2="18" y2="16" stroke="#e11d48" strokeWidth="1.5" opacity="0.25" />
            <line x1="63" y1="38" x2="72" y2="38" stroke="#e11d48" strokeWidth="1.5" opacity="0.2" />
            <line x1="17" y1="38" x2="8" y2="38" stroke="#e11d48" strokeWidth="1.5" opacity="0.2" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-rose-500 font-semibold text-sm tracking-widest uppercase mb-4 block">Why Us</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">Why Choose Advait Softech</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "10+ Years Experience", description: "A decade of delivering enterprise-grade software across industries." },
              { icon: Users, title: "250+ Projects Delivered", description: "Trusted by startups and Fortune 500 companies worldwide." },
              { icon: Zap, title: "Agile Methodology", description: "Iterative development with transparency and rapid delivery." },
              { icon: HeartHandshake, title: "Dedicated Support", description: "24/7 post-launch support, monitoring, and continuous improvement." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-red-600 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-rose-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <pattern id="soft-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="rgba(244,63,94,0.5)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#soft-dots)" />
          </svg>
        </div>

        {/* Vector Art - Globe Network */}
        <div className="absolute top-16 right-10 hidden lg:block opacity-20">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70" cy="70" r="50" stroke="#f43f5e" strokeWidth="1.5" fill="none" />
            <ellipse cx="70" cy="70" rx="25" ry="50" stroke="#f43f5e" strokeWidth="0.8" fill="none" />
            <line x1="20" y1="55" x2="120" y2="55" stroke="#f43f5e" strokeWidth="0.6" opacity="0.4" />
            <line x1="20" y1="85" x2="120" y2="85" stroke="#f43f5e" strokeWidth="0.6" opacity="0.4" />
            <line x1="70" y1="20" x2="70" y2="120" stroke="#f43f5e" strokeWidth="0.6" opacity="0.3" />
            <circle cx="70" cy="20" r="3" fill="#f43f5e" opacity="0.3" />
            <circle cx="120" cy="70" r="3" fill="#f43f5e" opacity="0.3" />
            <circle cx="70" cy="120" r="3" fill="#f43f5e" opacity="0.3" />
            <circle cx="20" cy="70" r="3" fill="#f43f5e" opacity="0.3" />
          </svg>
        </div>

        {/* Vector Art - Building */}
        <div className="absolute bottom-16 left-10 hidden lg:block opacity-20">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="10" width="60" height="100" rx="4" stroke="#f43f5e" strokeWidth="1.5" fill="none" />
            <rect x="10" y="45" width="15" height="65" rx="3" stroke="#f43f5e" strokeWidth="1" fill="none" opacity="0.5" />
            <rect x="75" y="45" width="15" height="65" rx="3" stroke="#f43f5e" strokeWidth="1" fill="none" opacity="0.5" />
            <rect x="30" y="20" width="10" height="10" rx="1.5" fill="#f43f5e" opacity="0.12" />
            <rect x="45" y="20" width="10" height="10" rx="1.5" fill="#f43f5e" opacity="0.12" />
            <rect x="60" y="20" width="10" height="10" rx="1.5" fill="#f43f5e" opacity="0.12" />
            <rect x="30" y="38" width="10" height="10" rx="1.5" fill="#f43f5e" opacity="0.1" />
            <rect x="45" y="38" width="10" height="10" rx="1.5" fill="#f43f5e" opacity="0.1" />
            <rect x="60" y="38" width="10" height="10" rx="1.5" fill="#f43f5e" opacity="0.1" />
            <rect x="30" y="56" width="10" height="10" rx="1.5" fill="#f43f5e" opacity="0.08" />
            <rect x="45" y="56" width="10" height="10" rx="1.5" fill="#f43f5e" opacity="0.08" />
            <rect x="60" y="56" width="10" height="10" rx="1.5" fill="#f43f5e" opacity="0.08" />
            <rect x="40" y="85" width="20" height="25" rx="3" stroke="#f43f5e" strokeWidth="1" fill="none" opacity="0.2" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-rose-400 font-semibold text-sm tracking-widest uppercase mb-4 block">Industries</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">Industries We Serve</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group px-6 py-5 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-rose-500/40 hover:bg-rose-500/10 transition-all duration-300 text-center cursor-default"
              >
                <span className="text-gray-300 group-hover:text-rose-300 transition-colors duration-300 font-medium text-sm">{industry}</span>
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
            backgroundImage: `url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2074&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gray-950/88 backdrop-blur-sm" />

        {/* Vector Art - Rocket Launch */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <svg width="80" height="140" viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 10 Q40 10 55 45 L55 85 Q55 95 40 100 Q25 95 25 85 L25 45 Q40 10 40 10Z" stroke="#fff" strokeWidth="1.5" fill="none" />
            <circle cx="40" cy="55" r="7" stroke="#fff" strokeWidth="1" fill="rgba(255,255,255,0.1)" />
            <path d="M25 72 L12 95 L25 88Z" fill="rgba(255,255,255,0.15)" />
            <path d="M55 72 L68 95 L55 88Z" fill="rgba(255,255,255,0.15)" />
            <path d="M33 100 Q36 115 40 130 Q44 115 47 100" stroke="#fff" strokeWidth="1" fill="none" opacity="0.3" />
          </svg>
        </div>

        {/* Vector Art - Target */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="45" cy="45" r="38" stroke="#fff" strokeWidth="1.5" fill="none" />
            <circle cx="45" cy="45" r="26" stroke="#fff" strokeWidth="1" fill="none" opacity="0.6" />
            <circle cx="45" cy="45" r="14" stroke="#fff" strokeWidth="1" fill="none" opacity="0.4" />
            <circle cx="45" cy="45" r="4" fill="rgba(244,63,94,0.6)" />
            <line x1="45" y1="2" x2="45" y2="15" stroke="#fff" strokeWidth="1" opacity="0.3" />
            <line x1="45" y1="75" x2="45" y2="88" stroke="#fff" strokeWidth="1" opacity="0.3" />
            <line x1="2" y1="45" x2="15" y2="45" stroke="#fff" strokeWidth="1" opacity="0.3" />
            <line x1="75" y1="45" x2="88" y2="45" stroke="#fff" strokeWidth="1" opacity="0.3" />
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
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              Partner with us to transform your vision into a powerful software solution that drives real business results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-300">
                  Get Free Consultation
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  Explore Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
