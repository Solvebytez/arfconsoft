"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import {
  ArrowRight,
  Users,
  Target,
  Award,
  Globe,
  Lightbulb,
  Rocket,
  Shield,
  Heart,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  CheckCircle,
  Code,
  Zap,
  TrendingUp,
} from "lucide-react"

const stats = [
  { number: "12+", label: "Years of Excellence", icon: Award },
  { number: "500+", label: "Projects Delivered", icon: Rocket },
  { number: "150+", label: "Happy Clients", icon: Heart },
  { number: "50+", label: "Expert Team Members", icon: Users },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the competition.",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We build lasting relationships through transparent communication, honest dealings, and unwavering commitment to our promises.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We deeply understand your challenges and craft solutions that drive real business outcomes.",
  },
  {
    icon: Target,
    title: "Excellence Driven",
    description: "We set high standards and consistently exceed them, delivering quality that speaks for itself in every project we undertake.",
  },
  {
    icon: Zap,
    title: "Agile & Adaptive",
    description: "In a rapidly evolving tech landscape, we stay nimble and responsive, adapting quickly to changing requirements and market dynamics.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "With offices in India and USA, we bring diverse perspectives and 24/7 support capabilities to our worldwide client base.",
  },
]

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
  { name: "Priya Sharma", role: "CTO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face" },
  { name: "Amit Patel", role: "Head of Engineering", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
  { name: "Sneha Gupta", role: "Design Director", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" },
]

const milestones = [
  { year: "2012", title: "Company Founded", description: "Started with a vision to transform businesses through technology" },
  { year: "2015", title: "USA Expansion", description: "Opened our first international office in Houston, Texas" },
  { year: "2018", title: "100+ Projects", description: "Celebrated delivery of 100+ successful projects across industries" },
  { year: "2020", title: "Digital Transformation", description: "Launched dedicated cloud and AI/ML service divisions" },
  { year: "2023", title: "500+ Projects", description: "Achieved milestone of 500+ projects with 95% client retention" },
  { year: "2026", title: "Global Leader", description: "Recognized as a leading IT solutions provider with worldwide presence" },
]

export default function AboutPage() {
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950 pt-20 md:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,171,196,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,171,196,0.1)_0%,transparent_50%)]" />

        {/* Vector Art - Team/People (top-right) */}
        <div className="absolute top-32 right-12 hidden lg:block opacity-20">
          <svg width="180" height="160" viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="35" r="25" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <circle cx="90" cy="28" r="10" fill="rgba(37,171,196,0.15)" />
            <path d="M60 85 Q90 60 120 85 L125 130 L55 130 Z" stroke="#25ABC4" strokeWidth="2" fill="rgba(37,171,196,0.08)" />
            <circle cx="40" cy="55" r="18" stroke="#25ABC4" strokeWidth="1.5" fill="none" opacity="0.6" />
            <circle cx="40" cy="50" r="7" fill="rgba(37,171,196,0.1)" />
            <path d="M20 95 Q40 75 60 95 L63 125 L17 125 Z" stroke="#25ABC4" strokeWidth="1.5" fill="rgba(37,171,196,0.05)" opacity="0.6" />
            <circle cx="140" cy="55" r="18" stroke="#25ABC4" strokeWidth="1.5" fill="none" opacity="0.6" />
            <circle cx="140" cy="50" r="7" fill="rgba(37,171,196,0.1)" />
            <path d="M120 95 Q140 75 160 95 L163 125 L117 125 Z" stroke="#25ABC4" strokeWidth="1.5" fill="rgba(37,171,196,0.05)" opacity="0.6" />
          </svg>
        </div>

        {/* Vector Art - Growth Chart (bottom-left) */}
        <div className="absolute bottom-20 left-12 hidden lg:block opacity-20">
          <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="100" width="20" height="15" fill="rgba(37,171,196,0.3)" rx="2" />
            <rect x="40" y="85" width="20" height="30" fill="rgba(37,171,196,0.4)" rx="2" />
            <rect x="70" y="65" width="20" height="50" fill="rgba(37,171,196,0.5)" rx="2" />
            <rect x="100" y="40" width="20" height="75" fill="rgba(37,171,196,0.6)" rx="2" />
            <rect x="130" y="15" width="20" height="100" fill="rgba(37,171,196,0.7)" rx="2" />
            <path d="M20 95 L50 80 L80 60 L110 35 L140 10" stroke="#25ABC4" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="20" cy="95" r="4" fill="#25ABC4" />
            <circle cx="50" cy="80" r="4" fill="#25ABC4" />
            <circle cx="80" cy="60" r="4" fill="#25ABC4" />
            <circle cx="110" cy="35" r="4" fill="#25ABC4" />
            <circle cx="140" cy="10" r="4" fill="#25ABC4" />
          </svg>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#25ABC4]/10 border border-[#25ABC4]/30 rounded-full mb-4 md:mb-6">
                <span className="w-2 h-2 bg-[#25ABC4] rounded-full animate-pulse" />
                <span className="text-[#25ABC4] text-xs md:text-sm font-medium">About Advait Softech</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
                Transforming Ideas Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e]">
                  Digital Reality
                </span>
              </h1>
              <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
                Since 2012, we have been at the forefront of digital innovation, helping businesses worldwide leverage technology to achieve their goals. Our team of experts combines creativity with technical excellence to deliver solutions that make a difference.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e] text-white px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold hover:shadow-lg hover:shadow-[#25ABC4]/30 transition-all duration-300 flex items-center gap-2 text-sm md:text-base w-full sm:w-auto justify-center">
                    Start a Project
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-2 border-gray-600 text-white px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold hover:border-[#25ABC4]/50 hover:bg-[#25ABC4]/10 transition-all duration-300 text-sm md:text-base w-full sm:w-auto justify-center">
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-[#25ABC4] to-[#1e8a9e] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xl md:text-3xl font-bold text-gray-900">95%</p>
                    <p className="text-gray-500 text-xs md:text-sm">Client Retention Rate</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,171,196,0.05)_0%,transparent_70%)]" />
        
        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-xl md:rounded-2xl bg-[#25ABC4]/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#25ABC4] transition-colors duration-300">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-[#25ABC4] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 md:mb-2">{stat.number}</p>
                <p className="text-gray-500 text-xs md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
        {/* Vector Art - Book/Story (top-left) */}
        <div className="absolute top-16 left-12 hidden lg:block opacity-15">
          <svg width="140" height="120" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20 L70 10 L70 100 L10 110 Z" stroke="#25ABC4" strokeWidth="2" fill="rgba(37,171,196,0.08)" />
            <path d="M70 10 L130 20 L130 110 L70 100 Z" stroke="#25ABC4" strokeWidth="2" fill="rgba(37,171,196,0.05)" />
            <line x1="25" y1="35" x2="55" y2="30" stroke="#25ABC4" strokeWidth="1" opacity="0.4" />
            <line x1="25" y1="50" x2="55" y2="45" stroke="#25ABC4" strokeWidth="1" opacity="0.4" />
            <line x1="25" y1="65" x2="55" y2="60" stroke="#25ABC4" strokeWidth="1" opacity="0.4" />
            <line x1="85" y1="30" x2="115" y2="35" stroke="#25ABC4" strokeWidth="1" opacity="0.4" />
            <line x1="85" y1="45" x2="115" y2="50" stroke="#25ABC4" strokeWidth="1" opacity="0.4" />
            <line x1="85" y1="60" x2="115" y2="65" stroke="#25ABC4" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop"
                  alt="Our journey"
                  className="rounded-2xl md:rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-32 md:w-48 h-32 md:h-48 border-4 border-[#25ABC4]/20 rounded-2xl md:rounded-3xl -z-10 hidden md:block" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="w-6 md:w-8 h-1 bg-[#25ABC4] rounded-full" />
                <span className="text-[#25ABC4] font-medium uppercase tracking-wider text-xs md:text-sm">Our Story</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                A Journey of Innovation & Growth
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                Founded in 2012 in Jaipur, India, Advait Softech began with a simple mission: to help businesses harness the power of technology. What started as a small team of passionate developers has grown into a global technology partner trusted by companies across continents.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                Today, with offices in India and the USA, we continue to push boundaries and deliver innovative solutions that drive real business value. Our commitment to excellence, combined with our deep technical expertise, has made us a preferred partner for organizations ranging from ambitious startups to Fortune 500 companies.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#25ABC4]" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#25ABC4]" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">CMMI Level 3</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,171,196,0.1)_0%,transparent_50%)]" />

        {/* Vector Art - Diamond/Value (top-right) */}
        <div className="absolute top-16 right-16 hidden lg:block opacity-20">
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="60,10 110,50 60,130 10,50" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <polygon points="60,10 110,50 60,50 10,50" stroke="#25ABC4" strokeWidth="1.5" fill="rgba(37,171,196,0.1)" />
            <line x1="60" y1="10" x2="60" y2="130" stroke="#25ABC4" strokeWidth="1" opacity="0.4" />
            <line x1="10" y1="50" x2="110" y2="50" stroke="#25ABC4" strokeWidth="1" opacity="0.4" />
            <line x1="35" y1="30" x2="35" y2="90" stroke="#25ABC4" strokeWidth="0.8" opacity="0.3" />
            <line x1="85" y1="30" x2="85" y2="90" stroke="#25ABC4" strokeWidth="0.8" opacity="0.3" />
          </svg>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-6 md:w-8 h-1 bg-[#25ABC4] rounded-full" />
              <span className="text-[#25ABC4] font-medium uppercase tracking-wider text-xs md:text-sm">Our Values</span>
              <div className="w-6 md:w-8 h-1 bg-[#25ABC4] rounded-full" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Our core values shape every decision we make and every solution we deliver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-[#25ABC4]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-[#25ABC4]/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#25ABC4] transition-colors duration-300">
                  <value.icon className="w-5 h-5 md:w-7 md:h-7 text-[#25ABC4] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
        {/* Vector Art - Clock (bottom-right) */}
        <div className="absolute bottom-16 right-12 hidden lg:block opacity-15">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70" cy="70" r="60" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <circle cx="70" cy="70" r="55" stroke="#25ABC4" strokeWidth="1" fill="none" opacity="0.5" />
            <circle cx="70" cy="70" r="4" fill="#25ABC4" />
            <line x1="70" y1="70" x2="70" y2="30" stroke="#25ABC4" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="70" y1="70" x2="100" y2="85" stroke="#25ABC4" strokeWidth="2" strokeLinecap="round" />
            <circle cx="70" cy="15" r="3" fill="#25ABC4" opacity="0.5" />
            <circle cx="125" cy="70" r="3" fill="#25ABC4" opacity="0.5" />
            <circle cx="70" cy="125" r="3" fill="#25ABC4" opacity="0.5" />
            <circle cx="15" cy="70" r="3" fill="#25ABC4" opacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-6 md:w-8 h-1 bg-[#25ABC4] rounded-full" />
              <span className="text-[#25ABC4] font-medium uppercase tracking-wider text-xs md:text-sm">Our Journey</span>
              <div className="w-6 md:w-8 h-1 bg-[#25ABC4] rounded-full" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Milestones That Define Us
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#25ABC4] via-[#25ABC4]/50 to-transparent hidden md:block" />

            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-start md:items-center gap-4 md:gap-8 pl-8 md:pl-0 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                    <span className="inline-block px-3 md:px-4 py-1 bg-[#25ABC4]/10 text-[#25ABC4] font-bold rounded-full mb-2 md:mb-3 text-sm md:text-base">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{milestone.description}</p>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#25ABC4] border-4 border-white shadow-lg hidden md:block" />
                  
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
        {/* Vector Art - Network (top-left) */}
        <div className="absolute top-20 left-12 hidden lg:block opacity-15">
          <svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="70" r="15" stroke="#25ABC4" strokeWidth="2" fill="rgba(37,171,196,0.1)" />
            <circle cx="30" cy="30" r="10" stroke="#25ABC4" strokeWidth="1.5" fill="none" />
            <circle cx="130" cy="30" r="10" stroke="#25ABC4" strokeWidth="1.5" fill="none" />
            <circle cx="30" cy="110" r="10" stroke="#25ABC4" strokeWidth="1.5" fill="none" />
            <circle cx="130" cy="110" r="10" stroke="#25ABC4" strokeWidth="1.5" fill="none" />
            <line x1="80" y1="55" x2="35" y2="35" stroke="#25ABC4" strokeWidth="1" opacity="0.5" />
            <line x1="80" y1="55" x2="125" y2="35" stroke="#25ABC4" strokeWidth="1" opacity="0.5" />
            <line x1="80" y1="85" x2="35" y2="105" stroke="#25ABC4" strokeWidth="1" opacity="0.5" />
            <line x1="80" y1="85" x2="125" y2="105" stroke="#25ABC4" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-6 md:w-8 h-1 bg-[#25ABC4] rounded-full" />
              <span className="text-[#25ABC4] font-medium uppercase tracking-wider text-xs md:text-sm">Leadership</span>
              <div className="w-6 md:w-8 h-1 bg-[#25ABC4] rounded-full" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Passionate experts driving innovation and excellence in everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="relative mb-3 md:mb-6 overflow-hidden rounded-xl md:rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#25ABC4] transition-colors duration-300">
                      <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                    <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#25ABC4] transition-colors duration-300">
                      <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </div>
                </div>
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-0.5 md:mb-1">{member.name}</h3>
                <p className="text-[#25ABC4] font-medium text-xs md:text-base">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#25ABC4] to-[#1e8a9e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

        {/* Vector Art - Handshake (left) */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 50 L30 50 L45 35 L60 50 L75 35 L90 50 L110 50" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 50 L30 75 L45 75" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M90 50 L90 75 L75 75" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="60" cy="50" r="8" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.2)" />
          </svg>
        </div>

        {/* Vector Art - Rocket (right) */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <svg width="100" height="140" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 Q70 30 70 60 L70 90 L50 100 L30 90 L30 60 Q30 30 50 10" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)" />
            <circle cx="50" cy="50" r="10" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M30 75 L15 85 L20 95 L30 90" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M70 75 L85 85 L80 95 L70 90" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M40 100 L38 125" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 100 L50 130" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M60 100 L62 125" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 text-base md:text-lg lg:text-xl mb-6 md:mb-10 max-w-2xl mx-auto">
              Let us be your technology partner. Together, we will build solutions that drive growth and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
              <Link href="/contact">
                <Button className="bg-white text-[#25ABC4] px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm md:text-base w-full sm:w-auto">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-2 border-white/30 text-white px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 text-sm md:text-base w-full sm:w-auto">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
