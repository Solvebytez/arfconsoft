"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Blocks,
  Shield,
  Zap,
  Globe,
  Lock,
  Code2,
  Layers,
  CheckCircle2,
  ArrowLeft,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Shield,
    title: "Smart Contract Development",
    description:
      "We design and deploy secure, audited smart contracts on Ethereum, Solana, Polygon, and other leading chains for automated, trustless execution.",
  },
  {
    icon: Globe,
    title: "Decentralized Applications (dApps)",
    description:
      "Full-stack dApp development with intuitive front-ends and robust blockchain backends, delivering seamless user experiences.",
  },
  {
    icon: Lock,
    title: "Private & Public Blockchains",
    description:
      "Custom private blockchain networks for enterprise use or public blockchain integrations for maximum transparency and reach.",
  },
  {
    icon: Layers,
    title: "Token Development",
    description:
      "ERC-20, ERC-721 (NFT), and custom token standards built for utility, governance, or asset tokenization across multiple chains.",
  },
  {
    icon: Zap,
    title: "DeFi Solutions",
    description:
      "Decentralized finance platforms including DEXs, lending protocols, yield farming, and liquidity pool solutions engineered for security.",
  },
  {
    icon: Code2,
    title: "Blockchain Consulting",
    description:
      "Strategic consulting to evaluate blockchain feasibility, architecture design, and technology selection for your specific business use case.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We analyze your business requirements, identify blockchain use cases, and define the optimal strategy and technology stack.",
  },
  {
    step: "02",
    title: "Architecture Design",
    description:
      "Our architects design the blockchain infrastructure, smart contract logic, and integration points with existing systems.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Iterative development with comprehensive testing including unit tests, integration tests, and security audits at every stage.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description:
      "Mainnet deployment with monitoring dashboards, ongoing maintenance, and 24/7 support to ensure peak performance.",
  },
]

const useCases = [
  "Supply Chain Management",
  "Healthcare Records",
  "Financial Services",
  "Real Estate Tokenization",
  "Digital Identity",
  "Voting Systems",
  "Intellectual Property",
  "Cross-Border Payments",
]

const techStack = [
  "Ethereum",
  "Solana",
  "Polygon",
  "Hyperledger",
  "Binance Smart Chain",
  "Solidity",
  "Rust",
  "Web3.js",
  "Hardhat",
  "IPFS",
]

export default function BlockchainPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-violet-950 to-gray-900">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#8b5cf6_0%,transparent_50%)] opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#6d28d9_0%,transparent_50%)] opacity-[0.15]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-24 w-28 h-28 border border-violet-500/20 rounded-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-48 left-16 w-20 h-20 border border-purple-400/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-14 h-14 bg-violet-500/10 rounded-lg blur-sm"
        />

        {/* Navigation */}
        <Header />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl text-center"
          >
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors duration-300 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Services
              </Link>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-violet-500/15 border border-violet-500/30 rounded-full mb-8"
            >
              <Blocks className="w-5 h-5 text-violet-400" />
              <span className="text-violet-300 text-sm font-medium">
                Blockchain Development
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Building the Future with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Blockchain
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Advait Softech is a distinguished leader in blockchain
              development, delivering decentralized solutions that transform
              business operations with transparency, security, and efficiency.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button className="px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-violet-500 text-white font-semibold rounded-full transition-all duration-300 hover:bg-violet-500/10">
                View Case Studies
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 max-w-4xl w-full"
          >
            {[
              { value: "100+", label: "Blockchain Projects" },
              { value: "50+", label: "Smart Contracts" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "30+", label: "Countries Served" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section - Alternating Rows */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#25ABC4]/5 rounded-full blur-[100px]" />

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-violet-500 rounded-full" />
              <span className="text-violet-500 font-medium uppercase tracking-wider text-sm">
                What We Offer
              </span>
              <div className="w-8 h-1 bg-violet-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Blockchain Services & Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              End-to-end blockchain development services from consulting to deployment and beyond.
            </p>
          </motion.div>

          {/* Alternating Feature Rows */}
          <div className="space-y-12">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
                >
                  {/* Icon Side */}
                  <div className="relative shrink-0">
                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-violet-500/20">
                      <feature.icon className="w-14 h-14 text-white" />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute -inset-4 rounded-[2rem] border-2 border-dashed border-violet-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Step number */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-white border-2 border-violet-500 rounded-full flex items-center justify-center text-violet-600 font-bold text-sm shadow-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`flex-1 ${isEven ? 'lg:text-left' : 'lg:text-right'} text-center`}>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
                      {feature.description}
                    </p>
                    {/* Underline accent */}
                    <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'} mx-auto`} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Development Process Section - Vertical Timeline */}
      <section className="relative py-24 lg:py-32 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#8b5cf6_0%,transparent_50%)] opacity-10" />

        <div className="relative z-10 px-8 lg:px-16 max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-violet-500 rounded-full" />
              <span className="text-violet-400 font-medium uppercase tracking-wider text-sm">
                Our Process
              </span>
              <div className="w-8 h-1 bg-violet-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              How We Build
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven 4-step methodology that ensures quality, transparency, and timely delivery
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-purple-500/30 to-transparent lg:-translate-x-px" />

            <div className="space-y-16">
              {processSteps.map((item, index) => {
                const isEven = index % 2 === 0
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-start gap-8 lg:gap-0 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 lg:left-1/2 top-2 -translate-x-1/2 z-10">
                      <div className="w-5 h-5 rounded-full bg-violet-500 border-4 border-gray-900 shadow-lg shadow-violet-500/40" />
                    </div>

                    {/* Content */}
                    <div className={`flex-1 pl-20 lg:pl-0 ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'}`}>
                      <div className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-violet-500/40 transition-all duration-500">
                        {/* Glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                        <div className="relative z-10">
                          <span className="inline-block px-4 py-1.5 bg-violet-500/20 text-violet-400 rounded-full text-sm font-bold mb-4">
                            Step {item.step}
                          </span>
                          <h3 className="text-2xl font-bold text-white mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for other side */}
                    <div className="hidden lg:block flex-1" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases & Tech Stack Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-violet-500 rounded-full" />
                <span className="text-violet-500 font-medium uppercase tracking-wider text-sm">
                  Use Cases
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-violet-200 hover:bg-violet-50/50 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0" />
                    <span className="text-gray-700 font-medium">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-violet-500 rounded-full" />
                <span className="text-violet-500 font-medium uppercase tracking-wider text-sm">
                  Technologies
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Our Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-5 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>

              {/* Info card */}
              <div className="mt-8 p-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl text-white">
                <h4 className="font-bold text-lg mb-2">
                  Need a Custom Solution?
                </h4>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Our blockchain architects can design a tailored solution using
                  the perfect combination of technologies for your use case.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300"
                >
                  Talk to an Expert <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blockchain Software Development for Industries - Bento Layout */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px]" />

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Section Header - Split */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-violet-500 rounded-full" />
                <span className="text-violet-500 font-medium uppercase tracking-wider text-sm">Industries</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Blockchain Software Development for Industries
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Advait Softech's commitment to excellence ensures robust, future-ready custom blockchain development solutions that meet industry-specific demands.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300">
                Get AI Solution
              </button>
            </motion.div>
          </div>

          {/* Bento Grid Industries */}
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="lg:col-span-2 group">
              <div className="relative h-full bg-gradient-to-br from-violet-600 to-purple-700 rounded-3xl p-8 overflow-hidden min-h-[220px]">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute top-6 right-6 text-7xl font-black text-white/10">01</div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">Healthcare</h3>
                  <p className="text-white/75 text-sm leading-relaxed">We develop blockchain solutions to ensure data security, patient privacy, and transparent healthcare records that improve trust and efficiency in the medical ecosystem.</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="lg:col-span-2 group">
              <div className="relative h-full bg-gray-900 rounded-3xl p-8 overflow-hidden min-h-[220px]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#8b5cf6_0%,transparent_60%)] opacity-20" />
                <div className="absolute top-6 right-6 text-7xl font-black text-white/5">02</div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">We develop blockchain systems for secure certifications, student records, and credential verification to ensure trust and transparency in academic institutions.</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="lg:col-span-1 group">
              <div className="relative h-full bg-violet-50 rounded-3xl p-6 overflow-hidden border border-violet-100 hover:border-violet-300 transition-all duration-500 min-h-[220px]">
                <div className="absolute top-4 right-4 text-5xl font-black text-violet-500/10">03</div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Real Estate</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">Streamline property transactions and enable tokenization of assets.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} viewport={{ once: true }} className="lg:col-span-1 group">
              <div className="relative h-full bg-purple-50 rounded-3xl p-6 overflow-hidden border border-purple-100 hover:border-purple-300 transition-all duration-500 min-h-[220px]">
                <div className="absolute top-4 right-4 text-5xl font-black text-purple-500/10">04</div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">BFSI</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">Secure DeFi platforms and digital identity frameworks.</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} viewport={{ once: true }} className="lg:col-span-2 group">
              <div className="relative h-full bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 overflow-hidden min-h-[220px]">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute top-6 right-6 text-7xl font-black text-white/10">05</div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">Logistics</h3>
                  <p className="text-white/75 text-sm leading-relaxed">We enable real-time tracking, fraud prevention, and transparent supply chain management to ensure efficiency and trust across logistics operations.</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} viewport={{ once: true }} className="lg:col-span-2 group">
              <div className="relative h-full bg-gray-900 rounded-3xl p-8 overflow-hidden min-h-[220px]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#7c3aed_0%,transparent_60%)] opacity-20" />
                <div className="absolute top-6 right-6 text-7xl font-black text-white/5">06</div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">Entertainment</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">We design blockchain ecosystems for content ownership, NFT monetization, and royalty distribution to empower artists and creators in the digital economy.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="group">
              <div className="relative h-full bg-fuchsia-50 rounded-3xl p-8 overflow-hidden border border-fuchsia-100 hover:border-fuchsia-300 hover:shadow-xl hover:shadow-fuchsia-500/10 transition-all duration-500 min-h-[200px]">
                <div className="absolute top-6 right-6 w-10 h-10 bg-fuchsia-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">07</div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Agriculture</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Our blockchain solutions bring transparency to food supply chains, ensuring traceability, fair trade practices, and improved sustainability for global agriculture.</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="group">
              <div className="relative h-full bg-indigo-50 rounded-3xl p-8 overflow-hidden border border-indigo-100 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 min-h-[200px]">
                <div className="absolute top-6 right-6 w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">08</div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Travel & Tourism</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Our blockchain solutions enhance ticketing, identity management, and customer engagement to create seamless and fraud-proof travel experiences.</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }} className="group">
              <div className="relative h-full bg-violet-50 rounded-3xl p-8 overflow-hidden border border-violet-100 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-500 min-h-[200px]">
                <div className="absolute top-6 right-6 w-10 h-10 bg-violet-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">09</div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Energy</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">We build decentralized platforms for energy trading, renewable asset tokenization, and transparent carbon credit systems that promote sustainability.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blockchain Platforms We Focus Section */}
      <section className="relative py-24 lg:py-32 bg-gray-900 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,transparent_60%)]" />
          {/* Connecting lines decoration */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="rgba(139,92,246,0.5)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-violet-500 rounded-full" />
              <span className="text-violet-400 font-medium uppercase tracking-wider text-sm">Platforms</span>
              <div className="w-8 h-1 bg-violet-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Blockchain Platforms We Focus
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our expertise enables us to develop & deploy pitch-perfect blockchain-based applications across various networks
            </p>
          </motion.div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Solana",
                description: "Launched in 2020, Solana is a fast, scalable proof-of-stake blockchain. Build secure decentralized apps with our expert solutions.",
                color: "from-[#9945FF] to-[#14F195]",
                iconBg: "bg-gradient-to-br from-[#9945FF] to-[#14F195]",
                letter: "S"
              },
              {
                name: "TON",
                description: "Telegram's decentralized blockchain for Web3 apps, games, and transactions. Build your platform and join the revolution.",
                color: "from-[#0088CC] to-[#00B4D8]",
                iconBg: "bg-gradient-to-br from-[#0088CC] to-[#00B4D8]",
                letter: "T"
              },
              {
                name: "Base",
                description: "Base blockchain: Safe, affordable, and developer-friendly. Launch your games, social apps, and more today.",
                color: "from-[#0052FF] to-[#4D8FFF]",
                iconBg: "bg-gradient-to-br from-[#0052FF] to-[#4D8FFF]",
                letter: "B"
              },
              {
                name: "BSC",
                description: "BSC is a Layer 1 blockchain for smart contracts and Ethereum-based apps. Create your platform with expert support.",
                color: "from-[#F0B90B] to-[#FCD535]",
                iconBg: "bg-gradient-to-br from-[#F0B90B] to-[#FCD535]",
                letter: "B"
              },
              {
                name: "Ethereum",
                description: "Ethereum enables secure, scalable smart contracts. We help you develop high-speed dApps and advanced blockchain solutions.",
                color: "from-[#627EEA] to-[#8B9FEF]",
                iconBg: "bg-gradient-to-br from-[#627EEA] to-[#8B9FEF]",
                letter: "E"
              },
              {
                name: "Hyperledger",
                description: "Hyperledger empowers businesses to develop personalized blockchain apps using its advanced tools and frameworks.",
                color: "from-[#2F3134] to-[#5B5E63]",
                iconBg: "bg-gradient-to-br from-[#2F3134] to-[#5B5E63]",
                letter: "H"
              },
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 h-full overflow-hidden hover:border-violet-500/40 transition-all duration-500">
                  {/* Hover gradient glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 ${platform.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <span className="text-white font-bold text-xl">{platform.letter}</span>
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {platform.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {platform.description}
                    </p>

                    {/* Arrow on hover */}
                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className={`text-sm font-medium bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4 text-violet-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${platform.color} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`} />
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
            backgroundImage: `url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gray-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-transparent to-transparent" />

        <div className="relative z-10 px-8 lg:px-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
            <span className="text-violet-300 text-sm font-medium">
              Get Started Today
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Ready to Build on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
              Blockchain?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Schedule a free consultation with our blockchain experts and
            discover how decentralized technology can revolutionize your
            business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-violet-500/30 hover:shadow-2xl">
              <span className="relative z-10 flex items-center gap-3">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </motion.div>
        </div>

        <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-20 w-20 h-20 border border-violet-500/20 rounded-full" />
      </motion.section>

      <Footer />
    </>
  )
}
