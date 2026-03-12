"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import {
  ArrowRight,
  Cloud,
  Cloudy,
  Code2,
  Database,
  Globe,
  Layers,
  Lightbulb,
  Mail,
  Rocket,
  Settings,
  ShieldCheck,
  Users,
  Zap,
  BarChart3,
  RefreshCw,
  CheckCircle2,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Target,
  GitBranch,
} from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Salesforce Consulting",
    description: "Strategic advisory services to align Salesforce capabilities with your business goals, digital transformation roadmap, and ROI optimization.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description: "Apex, Visualforce, and Lightning Web Component development for bespoke Salesforce applications tailored to your unique workflows.",
  },
  {
    icon: RefreshCw,
    title: "Salesforce Integration",
    description: "Seamless integration with ERP, marketing platforms, payment gateways, and third-party APIs using MuleSoft and REST/SOAP services.",
  },
  {
    icon: Database,
    title: "Data Migration & Management",
    description: "Secure data migration from legacy systems, data cleansing, deduplication, and governance to maintain a single source of truth.",
  },
  {
    icon: Layers,
    title: "Salesforce Marketing Cloud",
    description: "SFMC implementation with Journey Builder, Email Studio, Mobile Studio, and Advertising Studio for omni-channel marketing.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Custom dashboards, Einstein Analytics, and real-time reporting to uncover actionable insights and drive data-driven decisions.",
  },
]

const processSteps = [
  { step: "01", title: "Discovery", description: "Comprehensive analysis of your current systems, pain points, and Salesforce requirements.", icon: Target },
  { step: "02", title: "Solution Design", description: "Architecture planning, data model design, and customization blueprint tailored to your needs.", icon: GitBranch },
  { step: "03", title: "Configuration", description: "Platform setup, workflow automation, custom objects, and security model implementation.", icon: Settings },
  { step: "04", title: "Development", description: "Custom Apex code, Lightning components, integrations, and advanced feature development.", icon: Code2 },
  { step: "05", title: "Testing & QA", description: "Multi-environment testing, UAT, regression testing, and performance validation.", icon: ShieldCheck },
  { step: "06", title: "Go-Live & Support", description: "Phased deployment, user training, hypercare support, and ongoing managed services.", icon: Rocket },
]

const cloudProducts = [
  { name: "Sales Cloud", category: "CRM" },
  { name: "Service Cloud", category: "CRM" },
  { name: "Marketing Cloud", category: "Marketing" },
  { name: "Commerce Cloud", category: "Commerce" },
  { name: "Experience Cloud", category: "Portal" },
  { name: "Health Cloud", category: "Industry" },
  { name: "Financial Services Cloud", category: "Industry" },
  { name: "Einstein AI", category: "AI" },
  { name: "MuleSoft", category: "Integration" },
  { name: "Tableau", category: "Analytics" },
  { name: "Pardot", category: "Marketing" },
  { name: "CPQ", category: "Sales" },
  { name: "Field Service", category: "Service" },
  { name: "Revenue Cloud", category: "Sales" },
  { name: "Heroku", category: "Platform" },
  { name: "Apex", category: "Dev" },
  { name: "LWC", category: "Dev" },
  { name: "Visualforce", category: "Dev" },
  { name: "Flow Builder", category: "Automation" },
  { name: "Platform Events", category: "Dev" },
]

const industries = [
  { name: "Healthcare", icon: ShieldCheck },
  { name: "Financial Services", icon: BarChart3 },
  { name: "Retail & E-Commerce", icon: Globe },
  { name: "Manufacturing", icon: Settings },
  { name: "Education", icon: Lightbulb },
  { name: "Real Estate", icon: Layers },
  { name: "Nonprofit", icon: Users },
  { name: "Technology", icon: Zap },
]

const categoryColors: Record<string, string> = {
  CRM: "border-teal-400 text-teal-300 bg-teal-500/10",
  Marketing: "border-amber-400 text-amber-300 bg-amber-500/10",
  Commerce: "border-blue-400 text-blue-300 bg-blue-500/10",
  Portal: "border-violet-400 text-violet-300 bg-violet-500/10",
  Industry: "border-rose-400 text-rose-300 bg-rose-500/10",
  AI: "border-cyan-400 text-cyan-300 bg-cyan-500/10",
  Integration: "border-emerald-400 text-emerald-300 bg-emerald-500/10",
  Analytics: "border-orange-400 text-orange-300 bg-orange-500/10",
  Sales: "border-sky-400 text-sky-300 bg-sky-500/10",
  Service: "border-indigo-400 text-indigo-300 bg-indigo-500/10",
  Platform: "border-lime-400 text-lime-300 bg-lime-500/10",
  Dev: "border-pink-400 text-pink-300 bg-pink-500/10",
  Automation: "border-yellow-400 text-yellow-300 bg-yellow-500/10",
}

export default function SalesforceDevelopmentPage() {
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(20,184,166,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(20,184,166,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Vector Art - Salesforce Cloud (top-right) */}
        <div className="absolute top-32 right-12 hidden lg:block opacity-20">
          <svg width="200" height="130" viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M160 90 Q160 50 130 40 Q125 20 100 15 Q70 10 55 35 Q30 30 20 55 Q5 65 15 85 Q10 100 30 105 L170 105 Q195 100 190 80 Q185 65 160 65 Z" stroke="#14b8a6" strokeWidth="2" fill="none" />
            <path d="M50 70 L70 70 M80 70 L110 70 M120 70 L140 70" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            <path d="M60 80 L90 80 M100 80 L130 80" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            <circle cx="100" cy="55" r="12" stroke="#14b8a6" strokeWidth="1.5" fill="rgba(20,184,166,0.1)" />
            <path d="M95 55 L100 60 L108 50" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          </svg>
        </div>

        {/* Vector Art - CRM Pipeline (bottom-left) */}
        <div className="absolute bottom-24 left-10 hidden lg:block opacity-20">
          <svg width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="10" width="40" height="30" rx="6" stroke="#14b8a6" strokeWidth="1.5" fill="none" />
            <rect x="12" y="18" width="26" height="3" rx="1.5" fill="#14b8a6" opacity="0.3" />
            <rect x="12" y="25" width="18" height="3" rx="1.5" fill="#14b8a6" opacity="0.2" />
            <line x1="45" y1="25" x2="65" y2="25" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
            <polygon points="63,20 73,25 63,30" fill="#14b8a6" opacity="0.3" />
            <rect x="70" y="10" width="40" height="30" rx="6" stroke="#14b8a6" strokeWidth="1.5" fill="rgba(20,184,166,0.05)" />
            <rect x="77" y="18" width="26" height="3" rx="1.5" fill="#14b8a6" opacity="0.3" />
            <rect x="77" y="25" width="18" height="3" rx="1.5" fill="#14b8a6" opacity="0.2" />
            <line x1="110" y1="25" x2="130" y2="25" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
            <polygon points="128,20 138,25 128,30" fill="#14b8a6" opacity="0.3" />
            <rect x="135" y="10" width="40" height="30" rx="6" stroke="#14b8a6" strokeWidth="1.5" fill="rgba(20,184,166,0.1)" />
            <rect x="142" y="18" width="26" height="3" rx="1.5" fill="#14b8a6" opacity="0.3" />
            <rect x="142" y="25" width="18" height="3" rx="1.5" fill="#14b8a6" opacity="0.2" />
            <text x="15" y="55" fill="#14b8a6" opacity="0.25" fontSize="7" fontFamily="monospace">LEAD</text>
            <text x="75" y="55" fill="#14b8a6" opacity="0.25" fontSize="7" fontFamily="monospace">OPPORTUNITY</text>
            <text x="150" y="55" fill="#14b8a6" opacity="0.25" fontSize="7" fontFamily="monospace">WON</text>
            <rect x="25" y="70" width="130" height="40" rx="8" stroke="#14b8a6" strokeWidth="1" fill="none" opacity="0.2" />
            <rect x="30" y="78" width="40" height="6" rx="3" fill="#14b8a6" opacity="0.15" />
            <rect x="30" y="88" width="80" height="6" rx="3" fill="#14b8a6" opacity="0.08" />
            <rect x="30" y="98" width="60" height="6" rx="3" fill="#14b8a6" opacity="0.06" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto w-full pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20">
                <Cloudy className="w-4 h-4 text-teal-400" />
                <span className="text-teal-400 text-sm font-medium">Certified Salesforce Partner</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Salesforce
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Development</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                Innovation is leading the way in cloud computing, and Salesforce is a well-known pioneer.
                We help over 100,000+ businesses automate and scale with enterprise-grade Salesforce solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300">
                    Start Your Project
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-full hover:border-teal-500/50 hover:text-white transition-all duration-300">
                    View All Services
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Salesforce-style dashboard mockup */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-3 text-gray-500 text-xs font-mono">salesforce-dashboard.app</span>
                  </div>
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Total Leads", value: "12,458", change: "+18%" },
                      { label: "Conversions", value: "3,842", change: "+24%" },
                      { label: "Revenue", value: "$2.4M", change: "+31%" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-gray-800/60 rounded-xl p-3">
                        <p className="text-gray-500 text-[10px] mb-1">{stat.label}</p>
                        <p className="text-white font-bold text-sm">{stat.value}</p>
                        <p className="text-teal-400 text-[10px]">{stat.change}</p>
                      </div>
                    ))}
                  </div>
                  {/* Pipeline visual */}
                  <div className="bg-gray-800/40 rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-3 font-medium">Pipeline Stages</p>
                    <div className="space-y-2">
                      {[
                        { stage: "Prospecting", w: "w-full", color: "bg-teal-500" },
                        { stage: "Qualification", w: "w-4/5", color: "bg-teal-400" },
                        { stage: "Proposal", w: "w-3/5", color: "bg-cyan-400" },
                        { stage: "Negotiation", w: "w-2/5", color: "bg-cyan-500" },
                        { stage: "Closed Won", w: "w-1/4", color: "bg-emerald-400" },
                      ].map((item) => (
                        <div key={item.stage} className="flex items-center gap-3">
                          <span className="text-gray-500 text-[9px] w-16 shrink-0">{item.stage}</span>
                          <div className="flex-1 bg-gray-700/50 rounded-full h-2">
                            <div className={`${item.color} h-2 rounded-full ${item.w} opacity-70`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Decorative blur */}
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        {/* Vector Art - Gear System (top-left) */}
        <div className="absolute top-16 left-10 hidden lg:block opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="25" stroke="#0d9488" strokeWidth="2" fill="none" />
            <circle cx="60" cy="60" r="10" fill="#0d9488" opacity="0.15" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180
              const x1 = 60 + 25 * Math.cos(rad)
              const y1 = 60 + 25 * Math.sin(rad)
              const x2 = 60 + 35 * Math.cos(rad)
              const y2 = 60 + 35 * Math.sin(rad)
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0d9488" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
            })}
          </svg>
        </div>

        {/* Vector Art - Flow Diagram (bottom-right) */}
        <div className="absolute bottom-12 right-10 hidden lg:block opacity-20">
          <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="35" width="30" height="30" rx="5" stroke="#0d9488" strokeWidth="1.5" fill="none" />
            <line x1="35" y1="50" x2="55" y2="50" stroke="#0d9488" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
            <polygon points="60,35 90,50 60,65" stroke="#0d9488" strokeWidth="1.5" fill="none" />
            <line x1="90" y1="50" x2="110" y2="50" stroke="#0d9488" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
            <rect x="110" y="35" width="30" height="30" rx="15" stroke="#0d9488" strokeWidth="1.5" fill="rgba(13,148,136,0.08)" />
            <path d="M120 50 L125 55 L135 43" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-teal-500 rounded-full" />
              <span className="text-teal-600 font-medium uppercase tracking-wider text-sm">Our Expertise</span>
              <div className="w-8 h-1 bg-teal-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Salesforce Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">End-to-end Salesforce solutions from consulting and implementation to custom development and managed services.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Products Section */}
      <section className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08)_0%,transparent_60%)]" />

        {/* Vector Art - Database (top-left) */}
        <div className="absolute top-12 left-10 hidden lg:block opacity-20">
          <svg width="90" height="120" viewBox="0 0 90 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="45" cy="22" rx="33" ry="13" stroke="#14b8a6" strokeWidth="1.5" fill="rgba(20,184,166,0.06)" />
            <line x1="12" y1="22" x2="12" y2="95" stroke="#14b8a6" strokeWidth="1.5" />
            <line x1="78" y1="22" x2="78" y2="95" stroke="#14b8a6" strokeWidth="1.5" />
            <ellipse cx="45" cy="95" rx="33" ry="13" stroke="#14b8a6" strokeWidth="1.5" fill="none" />
            <path d="M12 50 Q45 65 78 50" stroke="#14b8a6" strokeWidth="1" fill="none" opacity="0.3" />
            <path d="M12 72 Q45 87 78 72" stroke="#14b8a6" strokeWidth="1" fill="none" opacity="0.25" />
          </svg>
        </div>

        {/* Vector Art - Network Nodes (bottom-right) */}
        <div className="absolute bottom-16 right-10 hidden lg:block opacity-20">
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70" cy="50" r="10" stroke="#14b8a6" strokeWidth="1.5" fill="rgba(20,184,166,0.1)" />
            <circle cx="20" cy="20" r="6" stroke="#14b8a6" strokeWidth="1" fill="none" />
            <circle cx="120" cy="20" r="6" stroke="#14b8a6" strokeWidth="1" fill="none" />
            <circle cx="20" cy="80" r="6" stroke="#14b8a6" strokeWidth="1" fill="none" />
            <circle cx="120" cy="80" r="6" stroke="#14b8a6" strokeWidth="1" fill="none" />
            <line x1="26" y1="23" x2="62" y2="45" stroke="#14b8a6" strokeWidth="0.8" opacity="0.3" />
            <line x1="114" y1="23" x2="78" y2="45" stroke="#14b8a6" strokeWidth="0.8" opacity="0.3" />
            <line x1="26" y1="77" x2="62" y2="55" stroke="#14b8a6" strokeWidth="0.8" opacity="0.3" />
            <line x1="114" y1="77" x2="78" y2="55" stroke="#14b8a6" strokeWidth="0.8" opacity="0.3" />
            <line x1="20" y1="26" x2="20" y2="74" stroke="#14b8a6" strokeWidth="0.6" opacity="0.2" strokeDasharray="3 3" />
            <line x1="120" y1="26" x2="120" y2="74" stroke="#14b8a6" strokeWidth="0.6" opacity="0.2" strokeDasharray="3 3" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-teal-500 rounded-full" />
              <span className="text-teal-400 font-medium uppercase tracking-wider text-sm">Ecosystem</span>
              <div className="w-8 h-1 bg-teal-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Salesforce Cloud Products</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">We work across the entire Salesforce ecosystem to deliver comprehensive solutions for every business need.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {cloudProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                viewport={{ once: true }}
                className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default ${categoryColors[product.category] || "border-gray-600 text-gray-400"}`}
              >
                {product.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
        {/* Vector Art - Rocket (top-right) */}
        <div className="absolute top-16 right-12 hidden lg:block opacity-20">
          <svg width="80" height="130" viewBox="0 0 80 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 10 Q20 40 20 70 L60 70 Q60 40 40 10 Z" stroke="#0d9488" strokeWidth="2" fill="none" />
            <circle cx="40" cy="45" r="6" stroke="#0d9488" strokeWidth="1.5" fill="rgba(13,148,136,0.1)" />
            <path d="M20 70 L10 90 L25 80" stroke="#0d9488" strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M60 70 L70 90 L55 80" stroke="#0d9488" strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M30 75 L30 100 M40 75 L40 105 M50 75 L50 100" stroke="#0d9488" strokeWidth="1" opacity="0.25" />
          </svg>
        </div>

        {/* Vector Art - Checklist (bottom-left) */}
        <div className="absolute bottom-12 left-10 hidden lg:block opacity-20">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="5" width="80" height="110" rx="8" stroke="#0d9488" strokeWidth="1.5" fill="none" />
            <rect x="10" y="5" width="80" height="20" rx="8" fill="#0d9488" opacity="0.08" />
            <rect x="25" y="12" width="50" height="4" rx="2" fill="#0d9488" opacity="0.2" />
            {[40, 58, 76, 94].map((y, i) => (
              <g key={i}>
                <rect x="22" y={y} width="10" height="10" rx="2" stroke="#0d9488" strokeWidth="1" fill="none" opacity={i < 2 ? 0.4 : 0.2} />
                {i < 2 && <path d={`M24 ${y + 5} L27 ${y + 8} L31 ${y + 3}`} stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />}
                <rect x="38" y={y + 1} width={40 - i * 5} height="3" rx="1.5" fill="#0d9488" opacity={0.2 - i * 0.03} />
                <rect x="38" y={y + 6} width={30 - i * 3} height="3" rx="1.5" fill="#0d9488" opacity={0.12 - i * 0.02} />
              </g>
            ))}
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-teal-500 rounded-full" />
              <span className="text-teal-600 font-medium uppercase tracking-wider text-sm">Our Process</span>
              <div className="w-8 h-1 bg-teal-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How We Deliver</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">A proven methodology that ensures on-time delivery, quality outcomes, and measurable business impact.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-500"
              >
                <span className="absolute top-4 right-6 text-6xl font-black text-gray-100 group-hover:text-teal-100 transition-colors duration-300 select-none">{step.step}</span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-5 group-hover:bg-teal-500 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,184,166,0.1)_0%,transparent_50%)]" />

        {/* Vector Art - Trophy (top-right) */}
        <div className="absolute top-16 right-12 hidden lg:block opacity-20">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 15 L30 55 Q30 75 50 80 Q70 75 70 55 L70 15 Z" stroke="#14b8a6" strokeWidth="2" fill="none" />
            <path d="M30 25 Q15 25 15 40 Q15 55 30 55" stroke="#14b8a6" strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M70 25 Q85 25 85 40 Q85 55 70 55" stroke="#14b8a6" strokeWidth="1.5" fill="none" opacity="0.4" />
            <line x1="50" y1="80" x2="50" y2="95" stroke="#14b8a6" strokeWidth="2" />
            <rect x="35" y="95" width="30" height="8" rx="3" fill="#14b8a6" opacity="0.15" />
            <circle cx="50" cy="42" r="6" fill="#14b8a6" opacity="0.1" />
            <path d="M47 42 L50 45 L55 38" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
          </svg>
        </div>

        {/* Vector Art - Shield (bottom-left) */}
        <div className="absolute bottom-16 left-12 hidden lg:block opacity-20">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 L85 28 L85 60 Q85 90 50 110 Q15 90 15 60 L15 28 Z" stroke="#14b8a6" strokeWidth="2" fill="none" />
            <path d="M50 22 L75 36 L75 58 Q75 82 50 98 Q25 82 25 58 L25 36 Z" fill="#14b8a6" opacity="0.05" />
            <path d="M38 58 L46 68 L65 46" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-teal-500 rounded-full" />
              <span className="text-teal-400 font-medium uppercase tracking-wider text-sm">Why Us</span>
              <div className="w-8 h-1 bg-teal-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose Advait Softech</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">Trusted Salesforce expertise backed by certified professionals and a track record of delivering excellence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Certified Experts", description: "Team of Salesforce-certified developers, architects, and consultants.", stat: "50+" },
              { icon: CheckCircle2, title: "Projects Delivered", description: "Successfully completed Salesforce projects across industries.", stat: "200+" },
              { icon: Zap, title: "Faster Deployment", description: "Agile methodology ensures 40% faster go-live timelines.", stat: "40%" },
              { icon: ShieldCheck, title: "99.9% Uptime", description: "Enterprise-grade reliability with proactive monitoring and support.", stat: "99.9%" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-teal-500/30 transition-all duration-500 text-center"
              >
                <div className="text-4xl font-black text-teal-400 mb-3">{item.stat}</div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-teal-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        {/* Vector Art - Globe (top-right) */}
        <div className="absolute top-16 right-12 hidden lg:block opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="45" stroke="#0d9488" strokeWidth="1.5" fill="none" />
            <ellipse cx="60" cy="60" rx="22" ry="45" stroke="#0d9488" strokeWidth="1" fill="none" />
            <line x1="15" y1="45" x2="105" y2="45" stroke="#0d9488" strokeWidth="0.8" opacity="0.3" />
            <line x1="15" y1="75" x2="105" y2="75" stroke="#0d9488" strokeWidth="0.8" opacity="0.3" />
          </svg>
        </div>

        {/* Vector Art - Building (bottom-left) */}
        <div className="absolute bottom-12 left-10 hidden lg:block opacity-20">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="15" width="60" height="95" rx="4" stroke="#0d9488" strokeWidth="1.5" fill="none" />
            <rect x="15" y="110" width="70" height="5" rx="2" fill="#0d9488" opacity="0.1" />
            {[30, 48, 66, 84].map((y) => (
              <g key={y}>
                <rect x="30" y={y} width="10" height="12" rx="2" fill="#0d9488" opacity="0.1" />
                <rect x="45" y={y} width="10" height="12" rx="2" fill="#0d9488" opacity="0.08" />
                <rect x="60" y={y} width="10" height="12" rx="2" fill="#0d9488" opacity="0.1" />
              </g>
            ))}
            <rect x="40" y="100" width="20" height="15" rx="2" fill="#0d9488" opacity="0.12" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-teal-500 rounded-full" />
              <span className="text-teal-600 font-medium uppercase tracking-wider text-sm">Industries</span>
              <div className="w-8 h-1 bg-teal-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">Salesforce solutions tailored to the unique requirements of every industry vertical.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-500 cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-cyan-500 transition-all duration-300">
                  <industry.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-teal-600 to-cyan-700 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)]" />

        {/* Vector Art - Cursor Arrow (left) */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5 L10 60 L22 48 L35 70 L42 66 L29 44 L45 44 Z" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)" />
          </svg>
        </div>

        {/* Vector Art - Chat Bubble (right) */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="90" height="55" rx="12" stroke="white" strokeWidth="2" fill="none" />
            <path d="M25 60 L35 75 L45 60" stroke="white" strokeWidth="2" fill="none" />
            <rect x="20" y="22" width="40" height="4" rx="2" fill="white" opacity="0.3" />
            <rect x="20" y="32" width="55" height="4" rx="2" fill="white" opacity="0.2" />
            <rect x="20" y="42" width="30" height="4" rx="2" fill="white" opacity="0.15" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with Salesforce?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Let our certified experts help you unlock the full potential of the Salesforce platform with solutions tailored to your unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-10 py-4 bg-white text-teal-700 font-bold rounded-full hover:shadow-xl hover:shadow-white/20 transition-all duration-300 flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/services">
                <button className="px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300">
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

