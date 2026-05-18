"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ContactModal } from "@/components/contact-modal"
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  MessageSquare,
  Building2,
  Headphones,
} from "lucide-react"

const contactInfo = [
  {
    icon: Building2,
    title: "Head Office - Saudi Arabia",
    details: [
      "Khurais Road Exit 28, Al Naseem,",
      "Riyadh, 11421, Saudi Arabia"
    ],
  },
  {
    icon: MapPin,
    title: "Office - India",
    details: [
      "Pratap Vihar, Ghaziabad,",
      "(U.P) - 201009, India"
    ],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "+966 562467633 (Saudi Arabia)",
      "+91-9599179795 (India)"
    ],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: [
      "arafconinfo@gmail.com"
    ],
  },
]

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden bg-gray-950 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#25ABC4_0%,transparent_50%)] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#1e8a9e_0%,transparent_50%)] opacity-15" />

        {/* Vector Art - Envelope */}
        <div className="absolute top-32 right-16 hidden lg:block opacity-15">
          <svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="20" width="160" height="100" rx="12" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <path d="M10 32 L90 80 L170 32" stroke="#25ABC4" strokeWidth="2" fill="none" />
            <path d="M10 120 L70 70" stroke="#25ABC4" strokeWidth="1.5" fill="none" opacity="0.5" />
            <path d="M170 120 L110 70" stroke="#25ABC4" strokeWidth="1.5" fill="none" opacity="0.5" />
            <circle cx="90" cy="60" r="4" fill="#25ABC4" opacity="0.3" />
          </svg>
        </div>

        {/* Vector Art - Chat Bubbles */}
        <div className="absolute bottom-20 left-12 hidden lg:block opacity-15">
          <svg width="150" height="120" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="50" rx="10" stroke="#25ABC4" strokeWidth="1.5" fill="none" />
            <path d="M30 60 L30 75 L50 60" stroke="#25ABC4" strokeWidth="1.5" fill="none" />
            <rect x="20" y="25" width="40" height="4" rx="2" fill="#25ABC4" opacity="0.3" />
            <rect x="20" y="35" width="55" height="4" rx="2" fill="#25ABC4" opacity="0.2" />
            <rect x="60" y="50" width="80" height="50" rx="10" stroke="#25ABC4" strokeWidth="1.5" fill="none" />
            <path d="M120 100 L120 115 L100 100" stroke="#25ABC4" strokeWidth="1.5" fill="none" />
            <rect x="70" y="65" width="40" height="4" rx="2" fill="#25ABC4" opacity="0.3" />
            <rect x="70" y="75" width="55" height="4" rx="2" fill="#25ABC4" opacity="0.2" />
          </svg>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#25ABC4]/10 border border-[#25ABC4]/20 text-[#25ABC4] text-xs md:text-sm font-medium mb-4 md:mb-6">
              <MessageSquare className="w-3 h-3 md:w-4 md:h-4" />
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Let's Build Something
              <span className="text-[#25ABC4]"> Amazing Together</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Reach out and let's discuss how we can help transform your ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        {/* Vector Art - Phone */}
        <div className="absolute top-20 right-12 hidden lg:block opacity-10">
          <svg width="100" height="140" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="10" width="70" height="120" rx="12" stroke="#0891b2" strokeWidth="2" fill="none" />
            <rect x="25" y="25" width="50" height="80" rx="4" fill="#0891b2" opacity="0.08" />
            <circle cx="50" cy="118" r="6" stroke="#0891b2" strokeWidth="1.5" fill="none" />
            <rect x="40" y="15" width="20" height="3" rx="1.5" fill="#0891b2" opacity="0.2" />
          </svg>
        </div>

        {/* Vector Art - Location Pin */}
        <div className="absolute bottom-16 left-10 hidden lg:block opacity-10">
          <svg width="80" height="110" viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 5 C20 5 5 22 5 42 C5 70 40 105 40 105 C40 105 75 70 75 42 C75 22 60 5 40 5 Z" stroke="#0891b2" strokeWidth="2" fill="none" />
            <circle cx="40" cy="40" r="15" stroke="#0891b2" strokeWidth="1.5" fill="none" />
            <circle cx="40" cy="40" r="6" fill="#0891b2" opacity="0.2" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Info Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#25ABC4]/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-[#25ABC4]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-500 text-sm leading-relaxed">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100/50">
                <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/arafconsoft" },
                    { icon: Instagram, label: "Instagram", href: "https://instagram.com/arafconsoft" },
                    { icon: Twitter, label: "Twitter", href: "https://twitter.com/arafconsoft" },
                    { icon: Facebook, label: "Facebook", href: "https://facebook.com/arafconsoft" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-[#25ABC4] flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Vector Art - Question Mark */}
        <div className="absolute top-20 right-16 hidden lg:block opacity-10">
          <svg width="100" height="140" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 C25 10 10 30 10 50 C10 70 25 80 50 80 L50 100" stroke="#0891b2" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="50" cy="120" r="8" fill="#0891b2" opacity="0.3" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Find quick answers to common questions about working with us.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                question: "How quickly can you start on my project?",
                answer: "We typically begin project discovery within 1-2 business days of signing the agreement. Full development usually starts within a week after requirements gathering."
              },
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on complexity. Simple websites take 4-6 weeks, while complex applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer: "Yes, we offer comprehensive maintenance and support packages to ensure your software runs smoothly. This includes bug fixes, security updates, and feature enhancements."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We work with a wide range of technologies including React, Next.js, Node.js, Python, Java, .NET, React Native, Flutter, Salesforce, and various cloud platforms like AWS, Azure, and Google Cloud."
              },
              {
                question: "How do you handle project communication?",
                answer: "We use agile methodologies with regular sprint reviews, daily standups for complex projects, and tools like Slack, Jira, and Zoom to ensure transparent and consistent communication."
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#25ABC4] to-[#1e8a9e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1)_0%,transparent_60%)]" />

        {/* Vector Art - Rocket */}
        <div className="absolute top-1/2 left-12 -translate-y-1/2 hidden lg:block opacity-15">
          <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 10 L55 50 L55 80 L40 95 L25 80 L25 50 Z" stroke="white" strokeWidth="2" fill="none" />
            <path d="M25 60 L10 75 L25 80" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M55 60 L70 75 L55 80" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="40" cy="45" r="8" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M32 95 L28 115" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
            <path d="M40 95 L40 118" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
            <path d="M48 95 L52 115" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
          </svg>
        </div>

        {/* Vector Art - Headphones */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block opacity-15">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 55 C20 30 35 15 50 15 C65 15 80 30 80 55" stroke="white" strokeWidth="2" fill="none" />
            <rect x="10" y="50" width="15" height="30" rx="5" stroke="white" strokeWidth="2" fill="none" />
            <rect x="75" y="50" width="15" height="30" rx="5" stroke="white" strokeWidth="2" fill="none" />
            <path d="M20 65 L10 65" stroke="white" strokeWidth="2" fill="none" />
            <path d="M80 65 L90 65" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation call with our experts. We'll discuss your requirements and provide a customized solution roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="h-14 px-8 rounded-full bg-white text-[#25ABC4] hover:bg-gray-100 font-semibold text-base transition-all duration-300 flex items-center justify-center"
              >
                Schedule a Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <Link href="/portfolio">
                <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-white/30 bg-transparent text-white hover:bg-white/10 font-semibold text-base transition-all duration-300">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book a free call"
        description="Share your details and we'll schedule a consultation at your convenience."
      />

      <Footer />
    </>
  )
}
