"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowLeft,
  Gamepad2,
  Smartphone,
  Globe,
  Layers,
  Cpu,
  Paintbrush,
  Users,
  Headphones,
  CheckCircle2,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Zap,
  Target,
  Trophy,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Gamepad2,
    title: "Custom Game Development",
    description:
      "From concept to launch, we build immersive games tailored to your vision across all platforms with stunning graphics and engaging gameplay.",
  },
  {
    icon: Smartphone,
    title: "Mobile Game Development",
    description:
      "Native and cross-platform mobile games for iOS and Android with optimized performance, monetization strategies, and social features.",
  },
  {
    icon: Globe,
    title: "Web & Browser Games",
    description:
      "HTML5 and WebGL-based browser games that deliver console-quality experiences without downloads, accessible on any device.",
  },
  {
    icon: Layers,
    title: "AR/VR Game Development",
    description:
      "Cutting-edge augmented and virtual reality experiences that push the boundaries of immersive entertainment and training simulations.",
  },
  {
    icon: Cpu,
    title: "Game Engine Development",
    description:
      "Custom game engines and tools built for specific gameplay mechanics, enabling unique experiences not possible with off-the-shelf solutions.",
  },
  {
    icon: Paintbrush,
    title: "Game Art & Design",
    description:
      "2D/3D art, character design, environment modeling, animation, and UI/UX design that bring your game world to life with stunning visuals.",
  },
]

const techStack = [
  { name: "Unity", category: "Engine" },
  { name: "Unreal Engine", category: "Engine" },
  { name: "Godot", category: "Engine" },
  { name: "C#", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Blender", category: "Tool" },
  { name: "Maya", category: "Tool" },
  { name: "Photoshop", category: "Tool" },
  { name: "Substance Painter", category: "Tool" },
]

const genres = [
  "Action / Adventure",
  "RPG / MMORPG",
  "Strategy / Puzzle",
  "Sports / Racing",
  "Simulation",
  "Educational Games",
  "Casino / Card Games",
  "Metaverse / Social",
]

export default function GameDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-emerald-950 to-gray-900">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#10b981_0%,transparent_50%)] opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#059669_0%,transparent_50%)] opacity-[0.15]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Floating game elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-24 w-28 h-28 border border-emerald-500/20 rounded-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-48 left-16 w-20 h-20 border border-green-400/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-14 h-14 bg-emerald-500/10 rounded-lg blur-sm"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-8 h-8 bg-green-400/20 rounded-full"
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
              <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                <ArrowLeft className="w-4 h-4" />
                Back to All Services
              </Link>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-emerald-500/15 border border-emerald-500/30 rounded-full mb-8"
            >
              <Gamepad2 className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Game Development</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Crafting Next-Gen{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                Gaming Experiences
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              We excel in game development, crafting bespoke gaming solutions with stunning visuals, immersive gameplay, and cutting-edge technology that captivate millions of players worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300">
                Start Your Game
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button className="px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-emerald-500 text-white font-semibold rounded-full transition-all duration-300 hover:bg-emerald-500/10">
                View Our Games
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
              { value: "200+", label: "Games Delivered" },
              { value: "50M+", label: "Downloads" },
              { value: "4.8", label: "Avg. Rating" },
              { value: "15+", label: "Platforms" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Offer - Hexagonal / Staggered Masonry Layout */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-[100px]" />

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
              <div className="w-8 h-1 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 font-medium uppercase tracking-wider text-sm">What We Offer</span>
              <div className="w-8 h-1 bg-emerald-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Game Development Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              End-to-end game development from concept art to post-launch support, across every platform and genre.
            </p>
          </motion.div>

          {/* Staggered 2-column layout with offset */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
            {services.map((service, index) => {
              const isRight = index % 2 !== 0
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group ${isRight ? 'lg:mt-12' : ''}`}
                >
                  <div className="relative flex gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 overflow-hidden">
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-emerald-500/20">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Development Process - Horizontal Steps with Connecting Lines */}
      <section className="relative py-24 lg:py-32 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#10b981_0%,transparent_50%)] opacity-10" />

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
              <div className="w-8 h-1 bg-emerald-500 rounded-full" />
              <span className="text-emerald-400 font-medium uppercase tracking-wider text-sm">Our Process</span>
              <div className="w-8 h-1 bg-emerald-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              From Idea to Launch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our streamlined game development pipeline delivers quality at every phase
            </p>
          </motion.div>

          {/* Process - Large numbered cards in a row */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Concept & Strategy", desc: "Game design documents, mechanics planning, monetization strategy, and market research.", icon: Target },
                { step: "02", title: "Art & Prototyping", desc: "Visual style exploration, concept art, character design, and playable prototypes.", icon: Paintbrush },
                { step: "03", title: "Core Development", desc: "Engine setup, gameplay programming, AI systems, physics, and multiplayer infrastructure.", icon: Cpu },
                { step: "04", title: "QA & Optimization", desc: "Rigorous playtesting, bug fixing, performance tuning, and device compatibility checks.", icon: Zap },
                { step: "05", title: "Launch & Growth", desc: "Store deployment, live ops, analytics integration, updates, and community management.", icon: Trophy },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Step circle on connecting line */}
                  <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full mb-4 w-10 h-10 bg-emerald-500 rounded-full items-center justify-center text-white font-bold text-sm shadow-lg shadow-emerald-500/40 z-10">
                    {item.step}
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 h-full hover:border-emerald-500/40 transition-all duration-500 text-center relative overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                    
                    <div className="relative z-10">
                      <div className="lg:hidden text-sm font-bold text-emerald-400 mb-3">Step {item.step}</div>
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors duration-300">
                        <item.icon className="w-7 h-7 text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Game Genres & Tech Stack - Split Screen Layout */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Genres */}
          <div className="bg-emerald-600 py-24 px-8 lg:px-16 relative">
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3N2Zz4=")` }} />
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-white/50 rounded-full" />
                <span className="text-white/70 font-medium uppercase tracking-wider text-sm">Genres</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Game Genres We Master
              </h2>
              <div className="space-y-4">
                {genres.map((genre, index) => (
                  <motion.div
                    key={genre}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90 font-medium group-hover:text-white transition-colors duration-300">{genre}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Tech Stack */}
          <div className="bg-gray-900 py-24 px-8 lg:px-16 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#10b981_0%,transparent_60%)] opacity-5" />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-lg ml-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-emerald-500/50 rounded-full" />
                <span className="text-emerald-400 font-medium uppercase tracking-wider text-sm">Technology</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Our Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="px-5 py-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-emerald-500/40 transition-all duration-300">
                      <span className="text-white font-medium text-sm">{tech.name}</span>
                      <span className="block text-emerald-400 text-xs mt-0.5">{tech.category}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Numbered Feature Strip */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
              <div className="w-8 h-1 bg-emerald-500 rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
          </motion.div>

          {/* Horizontal scrolling feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
            {[
              { num: "01", title: "Cross-Platform Experts", desc: "Seamlessly deploy on PC, console, mobile, and web from a single codebase.", icon: Layers },
              { num: "02", title: "Player-Centric Design", desc: "Data-driven game design focused on engagement, retention, and player satisfaction.", icon: Users },
              { num: "03", title: "24/7 Live Ops Support", desc: "Continuous monitoring, content updates, and community engagement post-launch.", icon: Headphones },
              { num: "04", title: "Scalable Multiplayer", desc: "Robust server infrastructure supporting millions of concurrent players globally.", icon: Globe },
            ].map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-8 bg-white hover:bg-emerald-50 transition-all duration-500 ${
                  index < 3 ? 'lg:border-r border-b lg:border-b-0 border-gray-200' : 'border-b lg:border-b-0'
                }`}
              >
                {/* Large watermark number */}
                <div className="absolute top-4 right-4 text-6xl font-black text-gray-100 group-hover:text-emerald-100 transition-colors duration-500">
                  {item.num}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-200 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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
            backgroundImage: `url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gray-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-transparent" />

        <div className="relative z-10 px-8 lg:px-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium">Let's Build Together</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Ready to Create Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              Next Hit Game?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Schedule a free consultation with our game development experts and turn your vision into a bestselling game.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:shadow-2xl">
              <span className="relative z-10 flex items-center gap-3">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </motion.div>
        </div>

        <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-20 w-20 h-20 border border-emerald-500/20 rounded-full" />
      </motion.section>

      <Footer />
    </>
  )
}
