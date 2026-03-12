"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import {
  Factory,
  ArrowRight,
  CheckCircle2,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Globe,
  Cpu,
  BarChart3,
  Cog,
  ShieldCheck,
  Zap,
  TrendingUp,
  Layers,
  Bot,
  LineChart,
  PackageCheck,
  Workflow,
  Settings2,
} from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Smart Manufacturing",
    description:
      "IoT-enabled systems that automate production, monitor machinery in real-time, and optimize output quality with predictive maintenance algorithms.",
  },
  {
    icon: BarChart3,
    title: "Supply Chain Optimization",
    description:
      "End-to-end supply chain visibility platforms that streamline procurement, inventory, warehousing, and distribution for maximum efficiency.",
  },
  {
    icon: Bot,
    title: "AI-Powered Quality Control",
    description:
      "Computer vision and machine learning systems that detect defects, ensure compliance, and maintain consistent product quality at scale.",
  },
  {
    icon: LineChart,
    title: "Industrial Analytics",
    description:
      "Real-time dashboards and BI tools that transform raw production data into actionable insights for informed decision-making.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "RPA and workflow automation solutions that eliminate manual bottlenecks, reduce errors, and accelerate operational throughput.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    description:
      "Digital compliance management systems that ensure adherence to industry regulations, safety standards, and environmental protocols.",
  },
]

const industries = [
  {
    title: "Automotive",
    description: "Connected vehicle platforms, autonomous driving systems, and digital factory solutions for next-generation automotive manufacturing.",
    stat: "40%",
    statLabel: "Efficiency Gain",
  },
  {
    title: "Pharmaceuticals",
    description: "GxP-compliant systems, drug traceability, clinical trial management, and automated regulatory reporting platforms.",
    stat: "60%",
    statLabel: "Faster Compliance",
  },
  {
    title: "Food & Beverage",
    description: "Farm-to-fork traceability, quality management, recipe optimization, and automated packaging line control systems.",
    stat: "35%",
    statLabel: "Waste Reduction",
  },
  {
    title: "Electronics",
    description: "PCB design automation, component lifecycle tracking, yield optimization, and smart warehouse management solutions.",
    stat: "50%",
    statLabel: "Yield Improvement",
  },
  {
    title: "Oil & Gas",
    description: "Pipeline monitoring, predictive maintenance for drilling equipment, HSE compliance, and remote asset management platforms.",
    stat: "45%",
    statLabel: "Downtime Reduction",
  },
  {
    title: "Textiles",
    description: "Inventory management, demand forecasting, loom automation, and sustainable manufacturing tracking for textile operations.",
    stat: "30%",
    statLabel: "Cost Savings",
  },
]

const processSteps = [
  {
    phase: "Discovery",
    title: "Assess & Analyze",
    description: "We audit your current systems, identify pain points, and map out opportunities for digital transformation.",
  },
  {
    phase: "Strategy",
    title: "Plan & Architect",
    description: "Our architects design a tailored technology roadmap aligned with your operational goals and scalability needs.",
  },
  {
    phase: "Build",
    title: "Develop & Integrate",
    description: "Agile development of custom solutions with seamless integration into your existing ERP, MES, and SCADA systems.",
  },
  {
    phase: "Deploy",
    title: "Launch & Optimize",
    description: "Staged rollout with comprehensive training, followed by continuous monitoring and performance optimization.",
  },
]

export default function IndustryServicePage() {
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Hero Section - Split screen with animated stats */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-20 min-h-[90vh] flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-rose-950" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAyYzguODM3IDAgMTYgNy4xNjMgMTYgMTZzLTcuMTYzIDE2LTE2IDE2LTE2LTcuMTYzLTE2LTE2IDcuMTYzLTE2IDE2LTE2eiIgc3Ryb2tlPSJyZ2JhKDI0NCw2Myw5NCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==")` }} />

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full mb-6">
                <Factory className="w-4 h-4 text-rose-400" />
                <span className="text-rose-300 text-sm font-medium">
                  Industry 4.0 Solutions
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
                Industrial
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">
                  Digital Solutions
                </span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                Advait Softech delivers cutting-edge digital transformation for
                manufacturing and production industries, providing businesses
                with the utmost opportunities to stay a step ahead.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 flex items-center gap-2">
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-transparent border border-gray-600 text-white font-semibold rounded-full hover:border-rose-400 hover:text-rose-400 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </motion.div>

            {/* Right - Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px]">
                {/* Central icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-rose-500/30 rotate-12">
                  <Factory className="w-14 h-14 text-white -rotate-12" />
                </div>
                {/* Orbiting cards */}
                {[
                  { label: "Projects Delivered", value: "200+", top: "5%", left: "5%", delay: 0.5 },
                  { label: "Uptime Guarantee", value: "99.9%", top: "5%", right: "5%", delay: 0.7 },
                  { label: "Cost Reduction", value: "40%", bottom: "20%", left: "0%", delay: 0.9 },
                  { label: "Faster Deployment", value: "3x", bottom: "15%", right: "0%", delay: 1.1 },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: stat.delay }}
                    className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-colors duration-300"
                    style={{ top: stat.top, left: stat.left, right: stat.right, bottom: stat.bottom }}
                  >
                    <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What We Offer - Hexagonal Grid Style */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/5 rounded-full blur-[100px]" />

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-rose-500 rounded-full" />
              <span className="text-rose-500 font-medium uppercase tracking-wider text-sm">
                What We Offer
              </span>
              <div className="w-8 h-1 bg-rose-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Industrial Technology Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions powering the next industrial revolution
            </p>
          </motion.div>

          {/* Feature cards - 2 column staggered */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
            {features.map((feature, index) => {
              const isRight = index % 2 !== 0
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group ${isRight ? 'lg:mt-12' : ''}`}
                >
                  <div className="relative flex gap-6 bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-500">
                    {/* Icon */}
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-rose-500/20">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                    </div>
                    {/* Number watermark */}
                    <span className="absolute top-4 right-6 text-6xl font-black text-gray-100 group-hover:text-rose-50 transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve - Rotating showcase */}
      <section className="relative py-24 lg:py-32 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.08)_0%,transparent_50%)]" />
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(244,63,94,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(244,63,94,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-rose-500 rounded-full" />
              <span className="text-rose-400 font-medium uppercase tracking-wider text-sm">Sectors</span>
              <div className="w-8 h-1 bg-rose-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Industries We Transform
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Deep domain expertise across manufacturing verticals
            </p>
          </motion.div>

          {/* Industries - Alternating wide cards */}
          <div className="space-y-6">
            {industries.map((industry, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-rose-500/30 transition-all duration-500`}>
                    {/* Stat block */}
                    <div className="shrink-0 w-full lg:w-48 bg-gradient-to-br from-rose-500 to-pink-600 flex flex-col items-center justify-center p-8 lg:p-6">
                      <span className="text-5xl font-black text-white">{industry.stat}</span>
                      <span className="text-white/70 text-xs mt-1 text-center">{industry.statLabel}</span>
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{industry.description}</p>
                    </div>
                    {/* Index */}
                    <div className="hidden lg:flex shrink-0 w-20 items-center justify-center">
                      <span className="text-7xl font-black text-white/5 group-hover:text-rose-500/10 transition-colors duration-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process - Diagonal Steps */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-rose-500 rounded-full" />
              <span className="text-rose-500 font-medium uppercase tracking-wider text-sm">How It Works</span>
              <div className="w-8 h-1 bg-rose-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic methodology for industrial digital transformation
            </p>
          </motion.div>

          {/* Diagonal staircase layout */}
          <div className="relative max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative mb-8 last:mb-0"
                style={{ marginLeft: `${index * 8}%` }}
              >
                <div className="group flex items-start gap-6 max-w-xl">
                  {/* Step circle */}
                  <div className="shrink-0 relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white text-xl font-black shadow-xl shadow-rose-500/20 group-hover:scale-110 transition-transform duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-rose-300 to-transparent" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 group-hover:border-rose-200 group-hover:shadow-lg transition-all duration-500 flex-1">
                    <span className="text-rose-500 text-xs font-bold uppercase tracking-wider">{step.phase}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies - Pill cloud */}
      <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-rose-500 rounded-full" />
                <span className="text-rose-500 font-medium uppercase tracking-wider text-sm">Tech Stack</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Technologies We Leverage
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We harness industry-leading technologies and platforms to build robust, scalable, and future-proof industrial solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Cog, label: "IoT Platforms", desc: "AWS IoT, Azure IoT" },
                  { icon: Bot, label: "AI & ML", desc: "TensorFlow, PyTorch" },
                  { icon: Layers, label: "Cloud", desc: "AWS, Azure, GCP" },
                  { icon: Settings2, label: "ERP Integration", desc: "SAP, Oracle" },
                ].map((tech) => (
                  <div key={tech.label} className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                      <tech.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{tech.label}</p>
                      <p className="text-xs text-gray-500">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Pill cloud */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "SCADA", "PLC Programming", "MES Systems", "Digital Twin",
                  "Predictive Maintenance", "Computer Vision", "Edge Computing",
                  "5G Networks", "Robotics", "AR/VR Training", "Blockchain",
                  "Cloud Native", "Kubernetes", "Kafka", "Time Series DB",
                  "Grafana", "Node-RED", "MQTT", "OPC UA", "REST APIs",
                  "React", "Python", "TensorFlow", "Docker", "Redis",
                ].map((tech, index) => {
                  const sizes = ['text-sm', 'text-base', 'text-sm', 'text-xs']
                  const size = sizes[index % sizes.length]
                  const highlights = [0, 3, 6, 10, 14, 18, 22]
                  const isHighlighted = highlights.includes(index)

                  return (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      viewport={{ once: true }}
                      className={`px-4 py-2 rounded-full font-medium ${size} transition-all duration-300 cursor-default ${
                        isHighlighted
                          ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/20 hover:shadow-xl hover:shadow-rose-500/30'
                          : 'bg-white border border-gray-200 text-gray-700 hover:border-rose-300 hover:text-rose-600'
                      }`}
                    >
                      {tech}
                    </motion.span>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Metric counters */}
      <section className="relative py-24 lg:py-32 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(244,63,94,0.1)_0%,transparent_60%)]" />

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Partner With Us
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Proven results across manufacturing and production verticals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "200+", label: "Industrial Projects", icon: PackageCheck },
              { value: "98%", label: "Client Retention", icon: TrendingUp },
              { value: "15+", label: "Years Experience", icon: Zap },
              { value: "50+", label: "Expert Engineers", icon: Cog },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 text-center hover:border-rose-500/40 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <metric.icon className="w-7 h-7 text-rose-400" />
                    </div>
                    <p className="text-4xl lg:text-5xl font-black text-white mb-2">{metric.value}</p>
                    <p className="text-gray-400 text-sm">{metric.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative py-16 lg:py-20 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-rose-900/80" />

        <div className="relative z-10 px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Digitize Your Factory?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let us help you build intelligent, connected, and efficient
              industrial systems that drive real business outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-20 w-20 h-20 border border-rose-500/20 rounded-full" />
      </motion.section>

      <Footer />
    </>
  )
}
