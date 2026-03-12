"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Facebook, Instagram, Globe, Plus, Minus, ArrowRight } from "lucide-react"
import { CodingAnimation } from "@/components/coding-animation"
import { TypingEffect } from "@/components/typing-effect"
import { CodeEditorTyping } from "@/components/code-editor-typing"
import SiteLoader from "@/components/site-loader"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { motion } from "framer-motion"

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
        className={`w-full flex items-center justify-between p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border transition-all duration-300 ${
          isOpen ? 'border-[#25ABC4] shadow-lg shadow-[#25ABC4]/10' : 'border-gray-200 hover:border-[#25ABC4]/50'
        }`}
      >
        <span className={`text-left font-semibold text-sm md:text-lg transition-colors duration-300 pr-4 ${isOpen ? 'text-[#25ABC4]' : 'text-gray-900'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
          isOpen ? 'bg-[#25ABC4] rotate-0' : 'bg-gray-100 group-hover:bg-[#25ABC4]/10'
        }`}>
          {isOpen ? (
            <Minus className="w-4 h-4 md:w-5 md:h-5 text-white" />
          ) : (
            <Plus className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-[#25ABC4]" />
          )}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-4 md:p-6 pt-3 md:pt-4">
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      <SiteLoader />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
      >
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <CodingAnimation />
        </motion.div>

        <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/80 via-transparent to-transparent" />

        <Header variant="light" showHomeLink={false} />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-16 pt-24 md:pt-28 lg:pt-32 pb-20 lg:pb-0 min-h-screen lg:min-h-0">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="max-w-2xl text-center lg:text-left"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-4 text-xs md:text-sm font-semibold uppercase tracking-wider text-[#25ABC4]"
            >
              TECH SOLUTIONS:
            </motion.p>
            <TypingEffect />
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mb-8 lg:mb-10 max-w-xl text-sm md:text-base leading-relaxed text-gray-700 mx-auto lg:mx-0"
            >
              Transform your business with innovative software solutions. We deliver scalable, secure, and efficient
              technology tailored to your needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0, rotateY: -30 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="relative hidden lg:block"
            style={{ perspective: 1000 }}
          >
            <CodeEditorTyping />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-6 md:bottom-12 left-6 md:left-16 z-10 flex gap-4 md:gap-6"
        >
          <Twitter className="h-5 w-5 cursor-pointer text-gray-700 transition-all duration-300 hover:text-[#25ABC4] hover:drop-shadow-[0_0_12px_rgba(37,171,196,0.9)]" />
          <Linkedin className="h-5 w-5 cursor-pointer text-gray-700 transition-all duration-300 hover:text-[#25ABC4] hover:drop-shadow-[0_0_12px_rgba(37,171,196,0.9)]" />
          <Facebook className="h-5 w-5 cursor-pointer text-gray-700 transition-all duration-300 hover:text-[#25ABC4] hover:drop-shadow-[0_0_12px_rgba(37,171,196,0.9)]" />
          <Instagram className="h-5 w-5 cursor-pointer text-gray-700 transition-all duration-300 hover:text-[#25ABC4] hover:drop-shadow-[0_0_12px_rgba(37,171,196,0.9)]" />
        </motion.div>
      </motion.div>

      {/* About Section - Removed all dark: classes */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative bg-gradient-to-br from-gray-100 via-white to-gray-50 py-16 md:py-24 px-4 md:px-8 overflow-hidden"
      >
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(37,171,196,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,171,196,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="w-full relative z-10">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-10 md:mb-16 px-4 md:px-8"
          >
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#25ABC4] mb-3">WHO ARE WE</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-[#25ABC4]">Advait Softech</span>
            </h2>
            <p className="text-gray-600 max-w-2xl text-sm md:text-base">
              A Global IT Consulting And Software Development Company Specializing In Building Reliable And Scalable
              Digital Solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr_350px] gap-6 md:gap-8 items-start px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, rotateY: -90, x: -50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ perspective: 1000 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200 h-full bg-gradient-to-br from-[#25ABC4]/10 to-[#25ABC4]/5 p-8 md:p-12 flex items-center justify-center hidden lg:flex"
            >
              <svg viewBox="0 0 200 200" className="w-full h-auto">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#25ABC4" strokeWidth="2" opacity="0.2" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#25ABC4" strokeWidth="2" opacity="0.3" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="#25ABC4" strokeWidth="2" opacity="0.4" />
                <path d="M60 100 L140 100 M100 60 L100 140" stroke="#25ABC4" strokeWidth="3" strokeLinecap="round" />
                <circle cx="60" cy="100" r="8" fill="#25ABC4" />
                <circle cx="140" cy="100" r="8" fill="#25ABC4" />
                <circle cx="100" cy="60" r="8" fill="#25ABC4" />
                <circle cx="100" cy="140" r="8" fill="#25ABC4" />
                <circle cx="100" cy="100" r="12" fill="#25ABC4" />
                <path d="M80 80 L90 70 L110 70 L120 80" fill="none" stroke="#25ABC4" strokeWidth="2" opacity="0.6" />
                <path
                  d="M80 120 L90 130 L110 130 L120 120"
                  fill="none"
                  stroke="#25ABC4"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-12"
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                  Unlock The Potential Of Your Business.
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Advait Softech Is A Global IT Consulting And Software Development Company Specializing In Building
                  Reliable And Scalable Digital Solutions. Established In 2014, We Partner With Businesses Across
                  Industries To Support Their Digital Transformation Initiatives.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 relative pt-6 md:pt-8">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute top-4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                />

                <motion.div
                  initial={{ y: 50, opacity: 0, scale: 0.8 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="flex justify-center mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#25ABC4] border-4 border-white flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Customized Solutions</h4>
                  <p className="text-gray-600 text-sm">
                    Our Team Combines Technical Expertise, Industry Knowledge, And Process Discipline To Deliver
                    Solutions.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0, scale: 0.8 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="flex justify-center mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#25ABC4] border-4 border-white flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Quality Reliability</h4>
                  <p className="text-gray-600 text-sm">
                    We Have Successfully Delivered Solutions To Over 1000+ Clients Across Multiple Regions.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6 hidden lg:block"
            >
              <motion.div
                initial={{ rotateX: 90, opacity: 0 }}
                whileInView={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                style={{ perspective: 1000 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 flex items-center justify-center h-[250px] md:h-[300px]"
              >
                <svg viewBox="0 0 200 150" className="w-full h-auto">
                  {/* Gear 1 */}
                  <g transform="translate(60, 75)">
                    <circle cx="0" cy="0" r="30" fill="none" stroke="#25ABC4" strokeWidth="3" />
                    <circle cx="0" cy="0" r="15" fill="#25ABC4" opacity="0.3" />
                    {[0, 60, 120, 180, 240, 300].map((angle) => (
                      <rect
                        key={angle}
                        x="-4"
                        y="-35"
                        width="8"
                        height="10"
                        fill="#25ABC4"
                        transform={`rotate(${angle})`}
                      />
                    ))}
                  </g>
                  {/* Gear 2 */}
                  <g transform="translate(140, 75)">
                    <circle cx="0" cy="0" r="25" fill="none" stroke="#25ABC4" strokeWidth="3" />
                    <circle cx="0" cy="0" r="12" fill="#25ABC4" opacity="0.3" />
                    {[0, 60, 120, 180, 240, 300].map((angle) => (
                      <rect
                        key={`gear2-${angle}`}
                        x="-3"
                        y="-30"
                        width="6"
                        height="8"
                        fill="#25ABC4"
                        transform={`rotate(${angle})`}
                      />
                    ))}
                  </g>
                  {/* Code brackets */}
                  <text x="20" y="30" fill="#25ABC4" fontSize="40" fontWeight="bold" opacity="0.4">
                    {"</>"}
                  </text>
                  <text x="150" y="130" fill="#25ABC4" fontSize="30" fontWeight="bold" opacity="0.3">
                    {"{ }"}
                  </text>
                </svg>
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.7, type: "spring", bounce: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full bg-[#25ABC4] shadow-2xl flex flex-col items-center justify-center">
                    <div className="text-6xl font-bold text-gray-900">10</div>
                    <div className="text-xl font-medium text-gray-900">Years</div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-900 animate-[spin_20s_linear_infinite]" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Engagement Models Section - Removed all dark: classes */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative bg-white py-16 md:py-24 px-4 md:px-8 overflow-hidden"
      >
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="mb-10 md:mb-16 px-4 md:px-8"
          >
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#25ABC4] mb-3">ENGAGEMENT MODELS</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Flexible <span className="text-[#25ABC4]">Engagement Models</span>
            </h2>
            <p className="text-gray-600 max-w-4xl leading-relaxed text-sm md:text-base">
              We Believe That Every Business Is Unique, And Therefore We Provide Our Clients The Advantage Of Picking
              Any Of The Mostly Accepted Models That Are Listed Below Or A Mixture Of These At Different Stages Of Their
              Project. However, These Models Are Flexible And Can Be Customized To Accommodate The Needs Of The Client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
            {[
              {
                title: "Fixed Project Model",
                desc: "Suitable When The Scope, Requirements, And Timeline Are Clearly Defined.",
                delay: 0.1,
                offset: 0,
                initialX: -100,
                initialRotate: -10,
              },
              {
                title: "Milestone-Based Billing",
                desc: "Ensures Transparency And Structured Delivery For Phase-Based Developments.",
                delay: 0.2,
                offset: 8,
                initialX: -50,
                initialRotate: 10,
              },
              {
                title: "Time & Material Model",
                desc: "Recommended For Projects With Evolving Features And Ongoing Iterations.",
                delay: 0.3,
                offset: 0,
                initialX: 50,
                initialRotate: -10,
              },
              {
                title: "Dedicated Resource Model",
                desc: "Hire Full-Time Developers, Designers, Or Project Teams Working Exclusively On Your Requirements.",
                delay: 0.4,
                offset: 8,
                initialX: 100,
                initialRotate: 10,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, x: card.initialX, rotate: card.initialRotate, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: card.delay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, amount: 0.2 }}
                className={`group relative bg-gradient-to-br from-[#25ABC4] to-[#1e8a9e] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:shadow-[#25ABC4]/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden lg:translate-y-${card.offset}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 group-hover:translate-y-[200%] transition-all duration-700" />
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{card.title}</h3>
                  <p className="text-white/90 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">{card.desc}</p>
                  <div className="flex justify-center mt-auto">
                    {index === 0 && (
                      <svg viewBox="0 0 120 100" className="w-32 h-32">
                        <rect x="20" y="30" width="40" height="50" rx="3" fill="white" opacity="0.9" />
                        <rect x="65" y="20" width="35" height="40" rx="3" fill="white" opacity="0.7" />
                        <path d="M30 45 L50 45 M30 50 L50 50 M30 55 L50 55" stroke="#25ABC4" strokeWidth="2" />
                        <circle cx="45" cy="75" r="8" fill="#1e8a9e" />
                        <path d="M80 45 L90 35" stroke="#25ABC4" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    )}
                    {index === 1 && (
                      <div className="flex flex-col gap-3 mt-auto w-full">
                        <div className="relative h-3 bg-white/30 rounded-full overflow-hidden">
                          <div className="absolute left-0 top-0 h-full w-[70%] bg-white rounded-full" />
                        </div>
                        <div className="relative h-3 bg-white/30 rounded-full overflow-hidden">
                          <div className="absolute left-0 top-0 h-full w-[90%] bg-white rounded-full" />
                        </div>
                        <div className="relative h-3 bg-white/30 rounded-full overflow-hidden">
                          <div className="absolute left-0 top-0 h-full w-[45%] bg-white rounded-full" />
                        </div>
                        <div className="h-12 border-l-2 border-dashed border-white/50 mx-auto" />
                      </div>
                    )}
                    {index === 2 && (
                      <div className="relative w-28 h-28">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="4" />
                          <circle cx="50" cy="50" r="38" fill="white" opacity="0.2" />
                          <line x1="50" y1="50" x2="50" y2="20" stroke="white" strokeWidth="3" strokeLinecap="round" />
                          <line x1="50" y1="50" x2="70" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round" />
                          <circle cx="50" cy="50" r="4" fill="white" />
                          <rect x="45" y="10" width="10" height="6" rx="2" fill="white" />
                        </svg>
                      </div>
                    )}
                    {index === 3 && (
                      <svg viewBox="0 0 100 100" className="w-28 h-28">
                        <rect x="20" y="20" width="60" height="70" rx="5" fill="white" opacity="0.9" />
                        <rect x="25" y="25" width="50" height="40" rx="3" fill="#25ABC4" opacity="0.3" />
                        <path d="M30 75 L45 75 M30 82 L55 82" stroke="#1e8a9e" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="70" cy="30" r="3" fill="#1e8a9e" />
                      </svg>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies Section - Removed all dark: classes */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 md:py-24 px-4 md:px-8 overflow-hidden"
      >
        {/* Animated background grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(37,171,196,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,171,196,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Floating tech symbols background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1 }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              className="absolute text-[#25ABC4]/10 text-8xl font-bold"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            >
              {["</>", "{ }", "[]", "()", "=>", "&&"][i]}
            </motion.div>
          ))}
        </div>

        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="mb-10 md:mb-16 text-center px-4"
          >
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#25ABC4] mb-3">OUR TECH STACK</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technologies <span className="text-[#25ABC4]">We Master</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
              We Build Secure And Scalable Applications Using Industry-Leading Technologies And Frameworks
            </p>
          </motion.div>

          {/* Hexagon Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 md:px-0">
            {[
              {
                title: "Mobile App Development",
                techs: ["iOS", "Android", "Kotlin", "Swift", "React Native", "Flutter", "Xamarin", "Ionic"],
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                ),
                gradient: "from-purple-500/20 to-pink-500/20",
                delay: 0.1,
              },
              {
                title: "Web & Full-Stack",
                techs: ["React", "Next.js", "Vue.js", "Angular", "Laravel", "Node.js", "Django", "ASP.NET"],
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
                gradient: "from-blue-500/20 to-cyan-500/20",
                delay: 0.2,
              },
              {
                title: "Blockchain Development",
                techs: ["Ethereum", "Solidity", "Web3.js", "Hardhat", "Polygon", "Hyperledger"],
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
                gradient: "from-emerald-500/20 to-teal-500/20",
                delay: 0.3,
              },
              {
                title: "CMS & E-Commerce",
                techs: ["WordPress", "Shopify", "Magento", "WooCommerce", "Drupal", "Strapi"],
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                ),
                gradient: "from-orange-500/20 to-amber-500/20",
                delay: 0.4,
              },
              {
                title: "Databases",
                techs: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "SQLite"],
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                ),
                gradient: "from-rose-500/20 to-red-500/20",
                delay: 0.5,
              },
              {
                title: "Design & Dev Tools",
                techs: ["Figma", "Adobe XD", "Sketch", "VS Code", "Git", "Docker", "AWS", "Jira"],
                icon: (
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                ),
                gradient: "from-indigo-500/20 to-violet-500/20",
                delay: 0.6,
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.8, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{
                  duration: 0.7,
                  delay: category.delay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="group relative"
              >
                <div
                  className={`relative bg-gradient-to-br ${category.gradient} backdrop-blur-sm border border-gray-200 rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 h-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#25ABC4]/20 overflow-hidden`}
                >
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#25ABC4]/10 rounded-bl-full transition-all duration-500 group-hover:w-40 group-hover:h-40" />

                  {/* Glowing orb on hover */}
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#25ABC4]/0 rounded-full blur-3xl transition-all duration-500 group-hover:bg-[#25ABC4]/20" />

                  {/* Icon and title */}
                  <div className="relative z-10 flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 md:w-12 lg:w-14 md:h-12 lg:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#25ABC4] to-[#1e8a9e] flex items-center justify-center text-white shadow-lg [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6 lg:[&>svg]:w-8 lg:[&>svg]:h-8"
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>

                  {/* Tech tags */}
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {category.techs.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: category.delay + techIndex * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 text-sm font-medium bg-white/80 text-gray-700 rounded-full border border-gray-200 backdrop-blur-sm cursor-default transition-all duration-300 hover:bg-[#25ABC4] hover:text-white hover:border-[#25ABC4]"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Bottom decorative line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#25ABC4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section - Interactive Accordion Style */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative bg-gray-900 py-16 md:py-24 lg:py-32 overflow-hidden"
      >
        {/* Animated background grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(37,171,196,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,171,196,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent z-10" />

        <div className="w-full relative z-20 px-4 md:px-8 lg:px-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="mb-10 md:mb-16 lg:mb-20"
          >
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#25ABC4] mb-3 md:mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white leading-none">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e]">Services</span>
            </h2>
          </motion.div>

          {/* Services List - Interactive Accordion */}
          <div className="space-y-0">
            {[
              {
                num: "01",
                title: "Web Development",
                desc: "Custom websites and applications optimized for performance. We build responsive, fast, and secure web solutions.",
                tags: ["React", "Next.js", "Vue", "Node.js"],
                href: "/services/web-development",
              },
              {
                num: "02",
                title: "Software Development",
                desc: "End-to-end development of custom software solutions tailored to your unique business requirements.",
                tags: ["Java", "Python", ".NET", "Cloud"],
                href: "/services/software-development",
              },
              {
                num: "03",
                title: "Mobile App Development",
                desc: "Native and cross-platform mobile applications for iOS and Android that users love.",
                tags: ["iOS", "Android", "Flutter", "React Native"],
                href: "/services/mobile-app-development",
              },
              {
                num: "04",
                title: "UI/UX Design",
                desc: "User experience strategy and interface design that creates meaningful connections with users.",
                tags: ["Figma", "Prototyping", "Research", "Testing"],
                href: "/services/web-development",
              },
              {
                num: "05",
                title: "E-Commerce Solutions",
                desc: "Secure e-commerce stores with integrated management systems and seamless checkout experiences.",
                tags: ["Shopify", "WooCommerce", "Magento", "Custom"],
                href: "/services/web-development",
              },
              {
                num: "06",
                title: "Blockchain Development",
                desc: "Smart contracts, crypto exchanges, wallets, and NFT marketplaces with decentralized technologies.",
                tags: ["Ethereum", "Solidity", "Web3", "DeFi"],
                href: "/services/blockchain",
              },
              {
                num: "07",
                title: "Digital Marketing",
                desc: "Performance-driven marketing strategies to increase visibility, engagement, and sustainable growth.",
                tags: ["SEO", "PPC", "Social", "Analytics"],
                href: "/services/digital-marketing",
              },
            ].map((service, index) => (
              <Link key={service.num} href={service.href}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="group relative border-t border-gray-800 hover:border-[#25ABC4]/50 transition-all duration-500"
                >
                  <div className="py-6 md:py-8 lg:py-12 flex flex-col lg:flex-row lg:items-center gap-4 md:gap-6 lg:gap-12 cursor-pointer">
                  {/* Number */}
                  <motion.span 
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-900 group-hover:from-[#25ABC4] group-hover:to-[#1e8a9e] transition-all duration-500 leading-none"
                    whileHover={{ scale: 1.1 }}
                  >
                    {service.num}
                  </motion.span>

                  {/* Content */}
                  <div className="flex-1 space-y-2 md:space-y-4">
                    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-white group-hover:text-[#25ABC4] transition-all duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 group-hover:text-gray-300 transition-all duration-500 max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 overflow-hidden">
                      {service.desc}
                    </p>
                  </div>

                  {/* Tags - Show on hover */}
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 lg:max-w-xs">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-[#25ABC4]/10 text-[#25ABC4] rounded-full border border-[#25ABC4]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="hidden md:flex w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-gray-800 group-hover:border-[#25ABC4] group-hover:bg-[#25ABC4] items-center justify-center transition-all duration-500"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-white transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </div>

                {/* Hover line animation */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e] group-hover:w-full transition-all duration-700" />
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 lg:py-32 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#25ABC4]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#25ABC4]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="w-full relative z-10 px-4 md:px-8 lg:px-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="mb-10 md:mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 md:gap-8"
          >
            <div>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#25ABC4] mb-3 md:mb-4">Our Work</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-gray-900 leading-none">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e]">Projects</span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-md text-sm md:text-base lg:text-lg leading-relaxed">
              Explore our portfolio of successful digital solutions that have transformed businesses across industries.
            </p>
          </motion.div>

          {/* Portfolio Grid - Asymmetric Masonry Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Pagnian",
                category: "Online Gaming Parts Platform",
                desc: "Pagnian is an award winning Australian owned and operated company supplying the widest range of simulation products in Australia including world leading simulation brands such as Next Level Racing, Thrustmaster, Fanatec, Buttkicker, Moza, BJ and more.",
                tags: ["Shopify", "Handlebars", "Google Analytics"],
                color: "from-blue-600 to-indigo-700",
                size: "lg:col-span-2 lg:row-span-2",
                height: "h-[400px] lg:h-full",
                image: "/portfolio/Pagnian.png",
                url: "https://pagnianimports.com.au/",
              },
              {
                title: "Blue Stone",
                category: "Online Jewellery Platform",
                desc: "An award-winning online jewellery platform with world class experience and cutting edge innovation. Each product is a symbol of perfection, crafted with great attention to detail.",
                tags: ["E-Commerce", "React", "Node.js"],
                color: "from-emerald-500 to-teal-600",
                size: "",
                height: "h-[300px]",
                image: "/portfolio/blue-stone.png",
                url: "https://www.bluestone.com/",
              },
              {
                title: "Shop Marketplace Foods",
                category: "Online Grocery and Liquor Platform",
                desc: "At MarketPlace Foods your health and safety is our priority. We go above and beyond to make sure our products are safe, healthy and handled with the utmost care.",
                tags: ["Shopify", "ASP.NET", "Azure"],
                color: "from-rose-500 to-pink-600",
                size: "",
                height: "h-[300px]",
                image: "/portfolio/shopmarketplacefoods.png",
                url: "https://shopmarketplacefoods.com/",
              },
              {
                title: "Connect for Health Colorado",
                category: "Online Healthcare Platform",
                desc: "The Health Insurance Marketplace for Coloradans: Connect for Health Colorado works to expand access, affordability and choice for individuals purchasing health insurance throughout our state.",
                tags: ["WordPress", "PHP", "AWS"],
                color: "from-purple-600 to-violet-700",
                size: "",
                height: "h-[300px]",
                image: "/portfolio/connectforhealthco.png",
                url: "https://connectforhealthco.com/",
              },
              {
                title: "Colonial Spirits",
                category: "Premier Liquor Store Platform",
                desc: "Colonial Spirits is the premier liquor store in the Greater Boston area. Visit the store on Rt 2A in Acton for the best selection of beer, liquor & wine in the area, or order online for shipping, delivery & in-store pickup.",
                tags: ["WordPress", "WooCommerce", "PHP"],
                color: "from-amber-500 to-orange-600",
                size: "lg:col-span-2",
                height: "h-[300px]",
                image: "/portfolio/colonialspirits.png",
                url: "https://www.colonialspirits.com/",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`group relative ${project.size} ${project.height} rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer`}
              >
                {/* Background Image or Gradient */}
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 transition-all duration-700" />
                  </>
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-all duration-700`} />
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
                    <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  </>
                )}

                {/* Floating shapes */}
                <div className="absolute top-8 right-8 w-20 h-20 border-2 border-white/20 rounded-full group-hover:scale-150 group-hover:rotate-45 transition-all duration-700" />
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-lg group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-6 lg:p-8">
                  {/* Top - Category */}
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-sm text-white rounded-full">
                      {project.category}
                    </span>
                    {project.url ? (
                      <Link href={project.url} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 45 }}
                          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.div>
                      </Link>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.div>
                    )}
                  </div>

                  {/* Bottom - Title & Info */}
                  <div className="transform group-hover:-translate-y-2 transition-all duration-500">
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <Link href="/portfolio">
              <button className="group relative px-8 py-4 bg-gray-900 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/20">
                <span className="relative z-10 flex items-center gap-3">
                  View All Projects
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section - Infinite Slider */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative bg-gray-900 py-16 md:py-24 lg:py-32 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#25ABC4]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#25ABC4]/10 rounded-full blur-[80px]" />
        </div>

        {/* Quote marks decoration */}
        <div className="absolute top-10 md:top-20 left-4 md:left-10 text-[80px] md:text-[150px] lg:text-[200px] font-serif text-[#25ABC4]/5 leading-none select-none">"</div>
        <div className="absolute bottom-10 md:bottom-20 right-4 md:right-10 text-[80px] md:text-[150px] lg:text-[200px] font-serif text-[#25ABC4]/5 leading-none select-none rotate-180">"</div>

        <div className="w-full relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
            className="mb-10 md:mb-16 lg:mb-20 text-center px-4 md:px-8"
          >
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#25ABC4] mb-3 md:mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-none">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e]">Clients Say</span>
            </h2>
          </motion.div>

          {/* Infinite Sliding Testimonials - Row 1 */}
          <div className="relative mb-4 md:mb-8">
            <div className="flex animate-slide hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                  {[
                    {
                      name: "Sarah Johnson",
                      role: "CEO, TechStart Inc.",
                      quote: "Arafcon Soft transformed our vision into a stunning mobile app. Their attention to detail exceeded expectations.",
                      rating: 5,
                    },
                    {
                      name: "Michael Chen",
                      role: "Founder, FinFlow",
                      quote: "Working with them on our fintech platform was a game-changer. Their blockchain expertise gave us confidence.",
                      rating: 5,
                    },
                    {
                      name: "Emily Rodriguez",
                      role: "Marketing Director, RetailHub",
                      quote: "The e-commerce solution increased our online sales by 150%. They understood our needs perfectly.",
                      rating: 5,
                    },
                  ].map((testimonial, index) => (
                    <div
                      key={`${setIndex}-${index}`}
                      className="group relative w-[280px] sm:w-[320px] md:w-[400px] flex-shrink-0 p-5 md:p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-gray-700 shadow-lg hover:shadow-2xl hover:shadow-[#25ABC4]/20 hover:border-[#25ABC4]/50 transition-all duration-500 hover:-translate-y-2"
                    >
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-3 md:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 md:mb-6 group-hover:text-white transition-colors duration-300">
                        "{testimonial.quote}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#25ABC4] to-[#1e8a9e] flex items-center justify-center text-white font-bold text-sm md:text-base">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm md:text-base">{testimonial.name}</h4>
                          <p className="text-gray-400 text-xs md:text-sm">{testimonial.role}</p>
                        </div>
                      </div>

                      {/* Hover accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e] rounded-t-2xl md:rounded-t-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Infinite Sliding Testimonials - Row 2 (Reverse Direction) */}
          <div className="relative">
            <div className="flex animate-slide-reverse hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                  {[
                    {
                      name: "David Kim",
                      role: "CTO, HealthTech Solutions",
                      quote: "Their healthcare portal streamlined our patient management. The UI/UX is intuitive and adoption was immediate.",
                      rating: 5,
                    },
                    {
                      name: "Amanda Foster",
                      role: "Product Manager, CloudSync",
                      quote: "Exceptional SaaS dashboard work. The real-time analytics have become essential for our operations.",
                      rating: 5,
                    },
                    {
                      name: "James Wilson",
                      role: "Director, GlobalTrade",
                      quote: "Professional and innovative from start to finish. Their digital marketing helped us reach new markets.",
                      rating: 5,
                    },
                  ].map((testimonial, index) => (
                    <div
                      key={`${setIndex}-${index}`}
                      className="group relative w-[280px] sm:w-[320px] md:w-[400px] flex-shrink-0 p-5 md:p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-gray-700 shadow-lg hover:shadow-2xl hover:shadow-[#25ABC4]/20 hover:border-[#25ABC4]/50 transition-all duration-500 hover:-translate-y-2"
                    >
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-3 md:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 md:mb-6 group-hover:text-white transition-colors duration-300">
                        "{testimonial.quote}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#25ABC4] to-[#1e8a9e] flex items-center justify-center text-white font-bold text-sm md:text-base">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm md:text-base">{testimonial.name}</h4>
                          <p className="text-gray-400 text-xs md:text-sm">{testimonial.role}</p>
                        </div>
                      </div>

                      {/* Hover accent */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e] rounded-b-2xl md:rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 border-t border-gray-700 pt-8 md:pt-16 px-4 md:px-8 lg:px-16"
          >
            {[
              { number: "1000+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Countries Served" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e]">
                  {stat.number}
                </span>
                <p className="text-gray-400 mt-1 md:mt-2 text-xs md:text-sm lg:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </motion.section>

      {/* Global Presence & Partners Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative bg-gradient-to-b from-white via-gray-50 to-white pt-16 md:pt-24 lg:pt-32 overflow-hidden"
      >
        {/* Animated world map dots background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #25ABC4 1px, transparent 1px), radial-gradient(circle at 80% 20%, #25ABC4 1px, transparent 1px), radial-gradient(circle at 40% 70%, #25ABC4 1px, transparent 1px), radial-gradient(circle at 60% 50%, #25ABC4 1px, transparent 1px), radial-gradient(circle at 90% 80%, #25ABC4 1px, transparent 1px), radial-gradient(circle at 10% 60%, #25ABC4 1px, transparent 1px), radial-gradient(circle at 30% 90%, #25ABC4 1px, transparent 1px), radial-gradient(circle at 70% 40%, #25ABC4 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-10 md:top-20 left-10 md:left-20 w-32 md:w-64 h-32 md:h-64 bg-[#25ABC4]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-40 md:w-80 h-40 md:h-80 bg-[#25ABC4]/5 rounded-full blur-[120px]" />

        <div className="w-full relative z-10 px-4 md:px-8 lg:px-16">
          {/* Main Heading with animated counter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
              <div className="w-8 md:w-16 h-[2px] bg-gradient-to-r from-transparent to-[#25ABC4]" />
              <span className="text-[#25ABC4] uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-semibold">Global Reach</span>
              <div className="w-8 md:w-16 h-[2px] bg-gradient-to-l from-transparent to-[#25ABC4]" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Serving In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e]">70+</span> Countries
            </h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-500 mt-3 md:mt-4 font-light">
              For Software Development
            </p>
          </motion.div>

          {/* Countries floating tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-5xl mx-auto mb-12 md:mb-24"
          >
            {[
              "United States", "Mexico", "Switzerland", "Spain", "Germany", "Canada", 
              "Australia", "Netherlands", "Norway", "UAE", "United Kingdom", "Kuwait", 
              "Singapore", "Saudi Arabia", "Qatar", "Finland", "France", "Ireland", 
              "New Zealand", "India", "Japan", "Brazil"
            ].map((country, index) => (
              <motion.span
                key={country}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-white shadow-md border border-gray-200 hover:border-[#25ABC4]/50 hover:bg-[#25ABC4]/10 rounded-full text-gray-700 hover:text-[#25ABC4] text-xs md:text-sm transition-all duration-300 cursor-default"
              >
                {country}
              </motion.span>
            ))}
            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-[#25ABC4]/10 border border-[#25ABC4]/50 rounded-full text-[#25ABC4] text-xs md:text-sm font-semibold">
              + 50 More
            </span>
          </motion.div>

          {/* Technology Partners */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20"
          >
            <h3 className="text-center text-gray-500 uppercase tracking-widest text-xs md:text-sm mb-6 md:mb-10">Technology Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-20">
              {[
                { name: "AWS", subtitle: "Amazon Web Services" },
                { name: "MongoDB", subtitle: "Database Partner" },
                { name: "Shopify", subtitle: "Partner" },
                { name: "Microsoft", subtitle: "Gold Partner" },
              ].map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group text-center"
                >
                  <div className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-[#25ABC4] transition-colors duration-300">
                    {partner.name}
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">
                    {partner.subtitle}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-24 h-[1px] bg-gradient-to-r from-transparent via-[#25ABC4]/30 to-transparent"
          />
        </div>
      </motion.section>

      {/* Quick Call CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative py-12 md:py-16 lg:py-20 overflow-hidden"
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

        <div className="relative z-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#25ABC4]/20 border border-[#25ABC4]/30 rounded-full mb-6 md:mb-8"
            >
              <span className="w-2 h-2 bg-[#25ABC4] rounded-full animate-pulse" />
              <span className="text-[#25ABC4] text-xs md:text-sm font-medium">Free Consultation</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6"
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
              className="text-gray-300 text-sm md:text-lg lg:text-xl max-w-2xl mb-6 md:mb-10 leading-relaxed"
            >
              Let our experts analyze your current technology stack and provide actionable insights to optimize your digital infrastructure for growth.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Link href="/contact">
                <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-900 font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:shadow-2xl text-sm md:text-base">
                  <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Book a Free Call
                  </span>
                </button>
              </Link>
              
              <Link href="/about">
                <button className="group px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 text-sm md:text-base">
                  <span className="flex items-center justify-center gap-2 md:gap-3">
                    Learn More
                    <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#25ABC4]/10 to-transparent pointer-events-none hidden md:block" />
        <div className="absolute top-10 right-10 w-20 md:w-32 h-20 md:h-32 border border-white/10 rounded-full hidden md:block" />
        <div className="absolute bottom-10 right-20 w-14 md:w-20 h-14 md:h-20 border border-[#25ABC4]/20 rounded-full hidden md:block" />
      </motion.section>

      {/* FAQ Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(37,171,196,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,171,196,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-6 md:w-8 h-1 bg-[#25ABC4] rounded-full" />
              <span className="text-[#25ABC4] font-medium uppercase tracking-wider text-xs md:text-sm">FAQ</span>
              <div className="w-6 md:w-8 h-1 bg-[#25ABC4] rounded-full" />
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
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
            className="mt-10 md:mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 md:gap-4 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
              <p className="text-gray-600 text-sm md:text-base">Still have questions?</p>
              <Link href="/contact">
                <button className="px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#25ABC4]/30 transition-all duration-300 flex items-center gap-2 text-sm md:text-base">
                  Contact Our Team
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
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

