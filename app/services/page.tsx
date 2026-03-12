"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { motion } from "framer-motion"
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Cloud, 
  Database, 
  Shield, 
  ArrowRight,
  ChevronDown,
  Blocks,
  Gamepad2,
  Factory,
  AppWindow,
  Megaphone,
  Settings,
  Cloudy,
  Quote,
  Star,
  Plus,
  Minus,
  Clock,
  Users,
  Award,
  Headphones,
  CheckCircle2,
  Zap,
  Linkedin,
  Instagram,
  Twitter,
  Facebook
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-6 bg-white rounded-2xl border transition-all duration-300 ${
          isOpen ? 'border-[#25ABC4] shadow-lg shadow-[#25ABC4]/10' : 'border-gray-200 hover:border-[#25ABC4]/50'
        }`}
      >
        <span className={`text-left font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-[#25ABC4]' : 'text-gray-900'}`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-[#25ABC4] rotate-0' : 'bg-gray-100 group-hover:bg-[#25ABC4]/10'
        }`}>
          {isOpen ? (
            <Minus className="w-5 h-5 text-white" />
          ) : (
            <Plus className="w-5 h-5 text-gray-600 group-hover:text-[#25ABC4]" />
          )}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

const services = [
  {
    icon: Blocks,
    title: "Blockchain",
    description: "Advait Softech is a distinguished leader as a blockchain development company. Our esteemed company is dedicated to delivering exceptional solutions tailored to meet your business needs. With a commitment to excellence, innovation, and professionalism.",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    accentColor: "bg-violet-500"
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "We excel in web development, crafting bespoke solutions tailored to your unique needs. Our seasoned team of developers utilizes the latest technologies and best practices to build stunning, responsive websites that captivate audiences and drive results.",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    accentColor: "bg-emerald-500"
  },
  {
    icon: Factory,
    title: "Industry",
    description: "This segment of blockchain development deals with the production of goods and services in the country. But, here you would be a bit updated in the process. We provide the businesses with the utmost opportunities and staying a step ahead.",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    accentColor: "bg-pink-500"
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "We excel in web development, crafting bespoke solutions tailored to your unique needs. Our seasoned team of developers utilizes the latest technologies and best practices to build stunning, responsive websites that captivate audiences and drive results.",
    color: "from-cyan-500 to-teal-600",
    bgColor: "bg-cyan-50",
    accentColor: "bg-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "To put it briefly, development is now more than just writing code for an application. To guarantee an app or digital system survives over time, it now includes business-related ideas like marketing, customer happiness, and user experience.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    accentColor: "bg-blue-500"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Advait Softech has enough expertise in rendering the top notch digital marketing services to our clients. Today's age is digital one. Hence, a business can better achieve its goals and objectives by digital platform only.",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    accentColor: "bg-orange-500"
  },
  {
    icon: Settings,
    title: "Software Development",
    description: "We excel in software development, crafting bespoke solutions tailored to your unique needs. Our seasoned team of developers utilizes the latest technologies and best practices to build stunning applications that captivate audiences and drive results.",
    color: "from-rose-500 to-red-600",
    bgColor: "bg-rose-50",
    accentColor: "bg-rose-500"
  },
  {
    icon: Cloudy,
    title: "Salesforce Development",
    description: "Innovation is leading the way in cloud computing, and Salesforce is a well-known pioneer in this field. Salesforce Marketing is used by over 100,000 companies of all sizes in all sectors. Businesses automate their marketing with SFMC.",
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
    accentColor: "bg-teal-500"
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#25ABC4_0%,transparent_50%)] opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#1e8a9e_0%,transparent_50%)] opacity-5" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(37,171,196,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,171,196,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-20 w-32 h-32 border border-[#25ABC4]/20 rounded-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-20 w-24 h-24 border border-[#25ABC4]/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#25ABC4]/10 rounded-lg blur-sm"
        />

        {/* Navigation */}
        <Header variant="light" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 pt-24 pb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25ABC4]/10 border border-[#25ABC4]/30 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-[#25ABC4] rounded-full animate-pulse" />
              <span className="text-[#25ABC4] text-sm font-medium">Our Services</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
            >
              Transforming Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e]">
                Digital Reality
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              We deliver cutting-edge software solutions that drive innovation, enhance efficiency, and accelerate your business growth across all digital platforms.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <Button className="group px-8 py-4 bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#25ABC4]/30 transition-all duration-300">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button className="px-8 py-4 bg-transparent border-2 border-gray-300 hover:border-[#25ABC4] text-gray-700 font-semibold rounded-full transition-all duration-300 hover:bg-[#25ABC4]/10">
                Get a Quote
              </Button>
            </motion.div>

            {/* Service Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap justify-center gap-6 lg:gap-12"
            >
              {[
                { icon: Code2, label: "Web Dev" },
                { icon: Smartphone, label: "Mobile Apps" },
                { icon: Globe, label: "Digital Marketing" },
                { icon: Cloud, label: "Cloud Solutions" },
                { icon: Database, label: "Data Analytics" },
                { icon: Shield, label: "Cybersecurity" },
              ].map((service, index) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col items-center gap-2 cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-gray-200 group-hover:border-[#25ABC4]/50 group-hover:bg-[#25ABC4]/10 flex items-center justify-center transition-all duration-300">
                    <service.icon className="w-6 h-6 text-gray-600 group-hover:text-[#25ABC4] transition-colors duration-300" />
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-[#25ABC4] transition-colors duration-300">
                    {service.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-gray-500"
            >
              <span className="text-xs uppercase tracking-widest">Scroll Down</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#25ABC4]/20 to-transparent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#25ABC4]/20 to-transparent" />
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Section Header - Left aligned */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-[#25ABC4] rounded-full" />
                <span className="text-[#25ABC4] font-medium uppercase tracking-wider text-sm">What We Do</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Our All Services
              </h2>
            </div>
            <p className="text-gray-600 max-w-md leading-relaxed lg:text-right">
              Empowering businesses with scalable, secure, and innovative digital products across all platforms.
            </p>
          </motion.div>

          {/* Services - Alternating Layout */}
          <div className="space-y-6">
            {/* Row 1 - Large + Small + Small */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <Link href="/services/blockchain" className="lg:col-span-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative bg-gradient-to-br from-violet-500 to-purple-600 rounded-[2rem] p-8 lg:p-10 overflow-hidden cursor-pointer min-h-[280px] h-full"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 border border-white/20 rounded-full -translate-x-1/2 translate-y-1/2" />
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                        <Blocks className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3">Blockchain</h3>
                      <p className="text-white/80 leading-relaxed">Advait Softech is a distinguished leader as a blockchain development company. Our esteemed company is dedicated to delivering exceptional solutions tailored to meet your business needs.</p>
                    </div>
                    <div className="flex items-center gap-2 mt-6 text-white/60 group-hover:text-white transition-colors duration-300">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>

              <Link href="/services/game-development" className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-[2rem] p-6 overflow-hidden cursor-pointer border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 min-h-[280px] h-full"
                >
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500 rounded-full opacity-10 group-hover:scale-[3] transition-transform duration-700" />
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Game Development</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">Crafting bespoke gaming solutions with latest technologies.</p>
                    <ArrowRight className="w-5 h-5 text-emerald-500 mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </motion.div>
              </Link>

              <Link href="/services/industry" className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-[2rem] p-6 overflow-hidden cursor-pointer border border-gray-100 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500 min-h-[280px] h-full"
                >
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-pink-500 rounded-full opacity-10 group-hover:scale-[3] transition-transform duration-700" />
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                      <Factory className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Industry</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">Digital solutions for manufacturing and production industries.</p>
                    <ArrowRight className="w-5 h-5 text-pink-500 mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* Row 2 - Small + Small + Large */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <Link href="/services/web-development" className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-[2rem] p-6 overflow-hidden cursor-pointer border border-gray-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 min-h-[280px] h-full"
                >
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500 rounded-full opacity-10 group-hover:scale-[3] transition-transform duration-700" />
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">Stunning, responsive websites that captivate audiences.</p>
                    <ArrowRight className="w-5 h-5 text-cyan-500 mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </motion.div>
              </Link>

              <Link href="/services/mobile-app-development" className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-[2rem] p-6 overflow-hidden cursor-pointer border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 min-h-[280px] h-full"
                >
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500 rounded-full opacity-10 group-hover:scale-[3] transition-transform duration-700" />
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Apps</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">Cross-platform mobile applications for iOS and Android.</p>
                    <ArrowRight className="w-5 h-5 text-blue-500 mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </motion.div>
              </Link>

              <Link href="/services/digital-marketing" className="lg:col-span-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative bg-gradient-to-br from-orange-500 to-amber-600 rounded-[2rem] p-8 lg:p-10 overflow-hidden cursor-pointer min-h-[280px] h-full"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 border border-white/20 rounded-full -translate-x-1/2 translate-y-1/2" />
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                        <Megaphone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3">Digital Marketing</h3>
                      <p className="text-white/80 leading-relaxed">Advait Softech has enough expertise in rendering the top notch digital marketing services. Today's age is digital one. Hence, a business can better achieve its goals and objectives by digital platform only.</p>
                    </div>
                    <div className="flex items-center gap-2 mt-6 text-white/60 group-hover:text-white transition-colors duration-300">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* Row 3 - Medium + Medium */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Link href="/services/software-development">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative bg-gray-900 rounded-[2rem] p-8 lg:p-10 overflow-hidden cursor-pointer min-h-[240px]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#25ABC4_0%,transparent_60%)] opacity-30" />
                  <div className="absolute bottom-0 right-0 w-48 h-48 border border-white/10 rounded-full translate-x-1/4 translate-y-1/4" />
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform duration-300">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Software Development</h3>
                      <p className="text-gray-400 leading-relaxed">We excel in software development, crafting bespoke solutions tailored to your unique needs. Our seasoned team utilizes the latest technologies and best practices.</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 shrink-0 hidden lg:block" />
                  </div>
                </motion.div>
              </Link>

              <Link href="/services/salesforce-development">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="group relative bg-gradient-to-br from-teal-500 to-cyan-600 rounded-[2rem] p-8 lg:p-10 overflow-hidden cursor-pointer min-h-[240px]"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-x-1/4 -translate-y-1/4" />
                  <div className="absolute bottom-4 left-4 w-20 h-20 border border-white/20 rounded-xl rotate-12" />
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform duration-300">
                      <Cloudy className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Salesforce Development</h3>
                      <p className="text-white/80 leading-relaxed">Innovation is leading the way in cloud computing, and Salesforce is a well-known pioneer. Used by over 100,000 companies of all sizes in all sectors.</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 shrink-0 hidden lg:block" />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="relative py-24 lg:py-32 bg-gray-900 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,#25ABC4_0%,transparent_40%)] opacity-10" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,#1e8a9e_0%,transparent_40%)] opacity-10" />
        </div>
        
        {/* Large quote decoration */}
        <div className="absolute top-20 left-10 lg:left-20 opacity-5">
          <Quote className="w-32 h-32 lg:w-48 lg:h-48 text-white" />
        </div>
        <div className="absolute bottom-20 right-10 lg:right-20 opacity-5 rotate-180">
          <Quote className="w-32 h-32 lg:w-48 lg:h-48 text-white" />
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
              <div className="w-8 h-1 bg-[#25ABC4] rounded-full" />
              <span className="text-[#25ABC4] font-medium uppercase tracking-wider text-sm">Testimonials</span>
              <div className="w-8 h-1 bg-[#25ABC4] rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from businesses we have helped transform with our digital solutions
            </p>
          </motion.div>

          {/* Testimonials Layout - Masonry style */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Testimonial 1 - Featured */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-[#25ABC4] to-[#1e8a9e] rounded-3xl p-8 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-white text-lg leading-relaxed mb-6">
                    "Working with Advait Softech has been transformative for our business. Their blockchain solutions helped us streamline operations and reduce costs by 40%."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                      JD
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">John Davidson</h4>
                      <p className="text-white/70 text-sm">CEO, TechVentures Inc.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-[#25ABC4]/30 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-[#25ABC4]/30 mb-4" />
                <p className="text-gray-300 leading-relaxed mb-5">
                  "The mobile app they developed exceeded our expectations. User engagement increased by 150% within the first month!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm">
                    SP
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Sarah Palmer</h4>
                    <p className="text-gray-500 text-xs">Product Manager, AppFlow</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Middle Column */}
            <div className="space-y-6">
              {/* Testimonial 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-[#25ABC4]/30 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-[#25ABC4]/30 mb-4" />
                <p className="text-gray-300 leading-relaxed mb-5">
                  "Their team understood our vision from day one. The web platform they built handles millions of users seamlessly."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                    MR
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Michael Roberts</h4>
                    <p className="text-gray-500 text-xs">CTO, ScaleUp Solutions</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl p-8 overflow-hidden"
              >
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#25ABC4]/10 rounded-full" />
                <div className="relative z-10 text-center">
                  <div className="text-5xl font-bold text-gray-900 mb-2">500+</div>
                  <p className="text-gray-600">Happy Clients Worldwide</p>
                  <div className="flex justify-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#25ABC4] text-[#25ABC4]" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">4.9 Average Rating</p>
                </div>
              </motion.div>

              {/* Testimonial 4 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-[#25ABC4]/30 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-[#25ABC4]/30 mb-4" />
                <p className="text-gray-300 leading-relaxed mb-5">
                  "Outstanding digital marketing results. Our online presence grew exponentially thanks to their strategies."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm">
                    AK
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Amanda Kim</h4>
                    <p className="text-gray-500 text-xs">Marketing Director, GrowthHub</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Testimonial 5 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-[#25ABC4]/30 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-[#25ABC4]/30 mb-4" />
                <p className="text-gray-300 leading-relaxed mb-5">
                  "Professional team with deep technical expertise. They delivered our Salesforce integration ahead of schedule."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
                    DL
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">David Lee</h4>
                    <p className="text-gray-500 text-xs">Operations Head, CloudFirst</p>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 6 - Featured */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-purple-600 to-violet-700 rounded-3xl p-8 overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-white text-lg leading-relaxed mb-6">
                    "The game they developed for us became a top-10 app in our category. Incredible attention to detail and user experience!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                      RJ
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Rachel Johnson</h4>
                      <p className="text-white/70 text-sm">Founder, GameStudio Pro</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#25ABC4]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]" />

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
              <div className="w-8 h-1 bg-[#25ABC4] rounded-full" />
              <span className="text-[#25ABC4] font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
              <div className="w-8 h-1 bg-[#25ABC4] rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The Advait Softech Advantage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical excellence with a client-first approach to deliver solutions that drive real business results
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "On-Time Delivery",
                description: "We respect deadlines. 98% of our projects are delivered on or before schedule with no compromise on quality.",
                stat: "98%",
                statLabel: "On-Time Rate"
              },
              {
                icon: Users,
                title: "Dedicated Team",
                description: "Get a dedicated team of experts who understand your business and work as an extension of your in-house team.",
                stat: "150+",
                statLabel: "Expert Developers"
              },
              {
                icon: Award,
                title: "Proven Track Record",
                description: "Over 500 successful projects delivered across 30+ countries with consistent 5-star client satisfaction.",
                stat: "500+",
                statLabel: "Projects Delivered"
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance to ensure your systems run smoothly at all times.",
                stat: "24/7",
                statLabel: "Available Support"
              },
              {
                icon: Shield,
                title: "Security First",
                description: "Enterprise-grade security protocols and compliance standards to protect your data and applications.",
                stat: "100%",
                statLabel: "Secure Solutions"
              },
              {
                icon: Zap,
                title: "Agile Methodology",
                description: "Flexible, iterative development process that adapts to your evolving needs and ensures faster time-to-market.",
                stat: "2x",
                statLabel: "Faster Delivery"
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-gray-50 rounded-3xl p-8 h-full border border-gray-100 hover:border-[#25ABC4]/30 hover:shadow-xl hover:shadow-[#25ABC4]/5 transition-all duration-500 overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#25ABC4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon and Stat Row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#25ABC4] to-[#1e8a9e] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#25ABC4]">{benefit.stat}</div>
                        <div className="text-xs text-gray-500">{benefit.statLabel}</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(37,171,196,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,171,196,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 px-8 lg:px-16 max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#25ABC4] rounded-full" />
              <span className="text-[#25ABC4] font-medium uppercase tracking-wider text-sm">FAQ</span>
              <div className="w-8 h-1 bg-[#25ABC4] rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and engagement models
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {[
              {
                question: "What industries do you specialize in?",
                answer: "We serve a diverse range of industries including Healthcare, Finance, E-commerce, Education, Real Estate, Logistics, and Manufacturing. Our team has deep domain expertise to understand your specific industry challenges and deliver tailored solutions."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity and scope. A simple website typically takes 4-6 weeks, while a complex enterprise application may take 3-6 months. During our initial consultation, we provide a detailed timeline based on your specific requirements."
              },
              {
                question: "Do you provide post-launch support and maintenance?",
                answer: "Yes, we offer comprehensive post-launch support packages including bug fixes, security updates, performance optimization, and feature enhancements. Our 24/7 support team ensures your application runs smoothly at all times."
              },
              {
                question: "What is your development process?",
                answer: "We follow an Agile methodology with iterative sprints. Our process includes Discovery & Planning, UI/UX Design, Development, Quality Assurance, Deployment, and ongoing Support. You'll have visibility into progress through regular demos and updates."
              },
              {
                question: "How do you handle data security and privacy?",
                answer: "Security is our top priority. We implement industry-standard encryption, secure coding practices, regular security audits, and comply with regulations like GDPR, HIPAA, and SOC 2. All team members sign NDAs to protect your intellectual property."
              },
              {
                question: "What are your engagement models?",
                answer: "We offer flexible engagement models: Fixed Price for well-defined projects, Time & Material for evolving requirements, and Dedicated Team for long-term partnerships. We'll recommend the best model based on your project needs and budget."
              },
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <p className="text-gray-600">Still have questions?</p>
              <button className="px-6 py-3 bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#25ABC4]/30 transition-all duration-300 flex items-center gap-2">
                Contact Our Team
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Call CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative py-16 lg:py-20 overflow-hidden"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900/80" />
        
        {/* Animated gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#25ABC4]/20 via-transparent to-transparent" />

        <div className="relative z-10 px-8 lg:px-16">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25ABC4]/20 border border-[#25ABC4]/30 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-[#25ABC4] rounded-full animate-pulse" />
              <span className="text-[#25ABC4] text-sm font-medium">Free Consultation</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Begin Your Complimentary{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e]">
                Tech Audit
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed"
            >
              Let our experts analyze your current technology stack and provide actionable insights to optimize your digital infrastructure for growth.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-900 font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Book a Free Call
                </span>
              </button>
              
              <button className="group px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10">
                <span className="flex items-center gap-3">
                  Learn More
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#25ABC4]/10 to-transparent pointer-events-none" />
        <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-20 w-20 h-20 border border-[#25ABC4]/20 rounded-full" />
      </motion.section>

      <Footer />
    </>
  )
}

