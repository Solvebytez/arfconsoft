"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CareersForm } from "@/components/careers-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import {
  ArrowRight,
  Users,
  Award,
  Globe,
  Rocket,
  Heart,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  Coffee,
  Laptop,
  Plane,
  HeartPulse,
  DollarSign,
  BookOpen,
  ChevronRight,
} from "lucide-react"

const benefits = [
  { icon: HeartPulse, title: "Health Insurance", description: "Comprehensive medical coverage for you and your family" },
  { icon: Laptop, title: "Remote Flexibility", description: "Work from anywhere with our hybrid work policy" },
  { icon: GraduationCap, title: "Learning Budget", description: "Annual allowance for courses, certifications & conferences" },
  { icon: Plane, title: "Paid Time Off", description: "Generous vacation days plus national holidays" },
  { icon: DollarSign, title: "Competitive Salary", description: "Industry-leading compensation with regular reviews" },
  { icon: Coffee, title: "Team Events", description: "Regular team outings, celebrations & fun activities" },
  { icon: Rocket, title: "Career Growth", description: "Clear progression paths and mentorship programs" },
  { icon: BookOpen, title: "Knowledge Sharing", description: "Weekly tech talks and internal workshops" },
]


const cultureImages = [
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop", alt: "Team collaboration" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop", alt: "Office workspace" },
  { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop", alt: "Team meeting" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop", alt: "Team event" },
]

export default function CareersPage() {
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950 pt-20 md:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,171,196,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,171,196,0.1)_0%,transparent_50%)]" />

        {/* Vector Art - Briefcase */}
        <div className="absolute top-32 right-16 hidden lg:block opacity-15">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="35" width="100" height="70" rx="8" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <rect x="40" y="15" width="40" height="25" rx="4" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <line x1="40" y1="35" x2="40" y2="25" stroke="#25ABC4" strokeWidth="2" />
            <line x1="80" y1="35" x2="80" y2="25" stroke="#25ABC4" strokeWidth="2" />
            <rect x="45" y="60" width="30" height="20" rx="3" fill="#25ABC4" opacity="0.3" />
          </svg>
        </div>

        {/* Vector Art - Growth Chart */}
        <div className="absolute bottom-32 left-16 hidden lg:block opacity-15">
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="20" y1="80" x2="120" y2="80" stroke="#25ABC4" strokeWidth="2" />
            <line x1="20" y1="80" x2="20" y2="20" stroke="#25ABC4" strokeWidth="2" />
            <path d="M30 70 L50 55 L70 60 L90 35 L110 25" stroke="#25ABC4" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="30" cy="70" r="4" fill="#25ABC4" opacity="0.5" />
            <circle cx="50" cy="55" r="4" fill="#25ABC4" opacity="0.5" />
            <circle cx="70" cy="60" r="4" fill="#25ABC4" opacity="0.5" />
            <circle cx="90" cy="35" r="4" fill="#25ABC4" opacity="0.5" />
            <circle cx="110" cy="25" r="4" fill="#25ABC4" opacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#25ABC4]/10 border border-[#25ABC4]/30 text-[#25ABC4] text-xs md:text-sm font-medium mb-4 md:mb-6">
                <Rocket className="w-3 h-3 md:w-4 md:h-4" />
                Join Our Team
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
                Build Your Career
                <span className="block text-[#25ABC4]">With Us</span>
              </h1>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg">
                Join a team of passionate innovators shaping the future of technology. We offer exciting challenges, continuous learning, and a culture that celebrates creativity.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                <a href="#openings">
                  <Button className="bg-[#25ABC4] hover:bg-[#1e8a9e] text-white px-6 md:px-8 py-4 md:py-6 rounded-full text-sm md:text-base font-semibold w-full sm:w-auto justify-center">
                    View Open Positions
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </a>
                <a href="#culture">
                  <Button variant="outline" className="border-2 border-gray-600 text-white px-6 md:px-8 py-4 md:py-6 rounded-full text-sm md:text-base font-semibold hover:bg-white/5 bg-transparent w-full sm:w-auto justify-center">
                    Our Culture
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#25ABC4]/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                  alt="Team collaboration"
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#25ABC4]/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#25ABC4]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">50+</p>
                      <p className="text-gray-500 text-sm">Team Members</p>
                    </div>
                  </div>
                </motion.div>
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-[#25ABC4] to-[#1e8a9e] rounded-xl p-4 shadow-xl"
                >
                  <p className="text-white text-sm font-semibold">We are hiring!</p>
                  <p className="text-white/80 text-xs">8 open positions</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
        {/* Vector Art - Heart */}
        <div className="absolute top-16 right-12 hidden lg:block opacity-10">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 70 C20 50 10 35 10 25 C10 15 20 5 30 5 C35 5 40 10 40 15 C40 10 45 5 50 5 C60 5 70 15 70 25 C70 35 60 50 40 70Z" stroke="#25ABC4" strokeWidth="2" fill="none" />
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
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#25ABC4]/10 text-[#25ABC4] text-xs md:text-sm font-medium mb-3 md:mb-4">Why Join Us</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Benefits & Perks</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">We believe in taking care of our team. Here's what you can expect when you join AdvaitSoftech.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-4 md:p-6 bg-gray-50 rounded-xl md:rounded-2xl hover:bg-[#25ABC4] transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#25ABC4]/10 group-hover:bg-white/20 flex items-center justify-center mb-3 md:mb-4 transition-colors duration-300">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-[#25ABC4] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 group-hover:text-white mb-1 md:mb-2 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-600 group-hover:text-white/80 text-xs md:text-sm leading-relaxed transition-colors duration-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="relative py-16 md:py-24 lg:py-32 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,171,196,0.08)_0%,transparent_60%)]" />

        {/* Vector Art - People */}
        <div className="absolute top-20 left-12 hidden lg:block opacity-15">
          <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="12" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <path d="M5 65 C5 50 12 40 20 40 C28 40 35 50 35 65" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <circle cx="50" cy="15" r="12" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <path d="M35 60 C35 45 42 35 50 35 C58 35 65 45 65 60" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <circle cx="80" cy="20" r="12" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <path d="M65 65 C65 50 72 40 80 40 C88 40 95 50 95 65" stroke="#25ABC4" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#25ABC4]/10 text-[#25ABC4] text-xs md:text-sm font-medium mb-3 md:mb-4">Our Culture</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">A Place Where You Belong</h2>
              <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                At AdvaitSoftech, we've built a culture that values collaboration, innovation, and personal growth. We believe that when our team thrives, our clients succeed.
              </p>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Open and transparent communication",
                  "Flat hierarchy with direct access to leadership",
                  "Regular hackathons and innovation days",
                  "Diversity and inclusion initiatives",
                  "Work-life balance as a priority",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 md:gap-3 text-gray-300 text-sm md:text-base"
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#25ABC4]/20 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-[#25ABC4]" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-2 md:gap-4"
            >
              {cultureImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`overflow-hidden rounded-xl md:rounded-2xl ${index === 0 ? "row-span-2" : ""}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${index === 0 ? "h-full" : "h-32 md:h-48"}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="relative py-16 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
        {/* Vector Art - Document */}
        <div className="absolute top-20 left-16 hidden lg:block opacity-10">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="100" rx="8" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <line x1="25" y1="35" x2="75" y2="35" stroke="#25ABC4" strokeWidth="2" />
            <line x1="25" y1="50" x2="75" y2="50" stroke="#25ABC4" strokeWidth="1.5" opacity="0.6" />
            <line x1="25" y1="65" x2="60" y2="65" stroke="#25ABC4" strokeWidth="1.5" opacity="0.4" />
            <line x1="25" y1="80" x2="70" y2="80" stroke="#25ABC4" strokeWidth="1.5" opacity="0.3" />
            <circle cx="75" cy="95" r="8" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <path d="M72 95 L74 97 L78 93" stroke="#25ABC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Vector Art - Pen */}
        <div className="absolute bottom-20 right-16 hidden lg:block opacity-10">
          <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10 L70 20 L25 65 L15 70 L20 60 Z" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <line x1="55" y1="15" x2="65" y2="25" stroke="#25ABC4" strokeWidth="2" />
            <path d="M15 70 L10 85 L25 80" stroke="#25ABC4" strokeWidth="1.5" fill="none" opacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#25ABC4]/10 text-[#25ABC4] text-xs md:text-sm font-medium mb-3 md:mb-4">Apply Now</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Join Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Take the first step towards an exciting career. Fill out the form below and we'll get back to you soon.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12 shadow-xl shadow-gray-100/50"
          >
            <CareersForm />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#25ABC4] to-[#1e8a9e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

        {/* Vector Art - Rocket */}
        <div className="absolute top-16 right-20 hidden lg:block opacity-20">
          <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 5 C40 5 60 25 60 50 C60 70 50 85 40 95 C30 85 20 70 20 50 C20 25 40 5 40 5Z" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="40" cy="45" r="8" stroke="white" strokeWidth="2" fill="none" />
            <path d="M20 60 L5 75" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M60 60 L75 75" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M35 95 L35 100 L40 97 L45 100 L45 95" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-white/80 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll reach out when a suitable position opens up.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-[#25ABC4] hover:bg-gray-100 px-6 md:px-8 py-4 md:py-6 rounded-full text-sm md:text-base font-semibold">
                Send Your Resume
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
