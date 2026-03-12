"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import {
  ArrowRight,
  ArrowLeft,
  Megaphone,
  Search,
  BarChart3,
  TrendingUp,
  Mail,
  Share2,
  PenTool,
  Globe,
  Target,
  Users,
  CheckCircle2,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Zap,
  Eye,
  MousePointerClick,
  LineChart,
  ShoppingCart,
  Video,
  MessageSquare,
  Layers,
} from "lucide-react"

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Data-driven search engine optimization strategies that improve rankings, drive organic traffic, and establish your brand authority across Google and beyond.",
    stats: "300% avg traffic increase",
  },
  {
    icon: MousePointerClick,
    title: "PPC Advertising",
    description:
      "Precision-targeted pay-per-click campaigns on Google Ads, Bing, and social platforms that maximize ROI with smart bidding and continuous optimization.",
    stats: "5.2x avg ROAS",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Strategic social media management across Instagram, Facebook, LinkedIn, and Twitter with engaging content that builds communities and drives conversions.",
    stats: "180% engagement lift",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description:
      "Compelling content strategies including blogs, whitepapers, infographics, and video scripts that educate audiences and nurture leads through the funnel.",
    stats: "2.5x lead generation",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Personalized email campaigns with advanced segmentation, automation workflows, A/B testing, and analytics to boost open rates and conversions.",
    stats: "42% open rate avg",
  },
  {
    icon: Video,
    title: "Video Marketing",
    description:
      "Engaging video content for YouTube, TikTok, and Reels including production, editing, optimization, and distribution strategy for maximum reach.",
    stats: "10x share rate",
  },
]

const processSteps = [
  { step: "01", title: "Audit & Analysis", description: "Deep dive into your current digital presence, competitor landscape, and market opportunities.", icon: Search },
  { step: "02", title: "Strategy & Planning", description: "Custom marketing blueprint with channel selection, budget allocation, and KPI framework.", icon: Target },
  { step: "03", title: "Content Creation", description: "Produce high-quality content including copy, visuals, videos, and ad creatives.", icon: PenTool },
  { step: "04", title: "Campaign Launch", description: "Deploy campaigns across selected channels with precise targeting and bidding strategies.", icon: Megaphone },
  { step: "05", title: "Monitor & Optimize", description: "Real-time performance tracking, A/B testing, and continuous optimization for peak results.", icon: LineChart },
  { step: "06", title: "Report & Scale", description: "Comprehensive analytics reports with actionable insights and scaling recommendations.", icon: TrendingUp },
]

const techTools = [
  { name: "Google Analytics", category: "Analytics" },
  { name: "SEMrush", category: "SEO" },
  { name: "Ahrefs", category: "SEO" },
  { name: "Mailchimp", category: "Email" },
  { name: "HubSpot", category: "CRM" },
  { name: "Hootsuite", category: "Social" },
  { name: "Google Ads", category: "PPC" },
  { name: "Meta Ads", category: "PPC" },
  { name: "Canva Pro", category: "Design" },
  { name: "Adobe Suite", category: "Design" },
  { name: "Moz", category: "SEO" },
  { name: "Buffer", category: "Social" },
  { name: "ActiveCampaign", category: "Email" },
  { name: "Hotjar", category: "Analytics" },
  { name: "Figma", category: "Design" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-commerce" },
  { name: "Zapier", category: "Automation" },
]

const industries = [
  { icon: ShoppingCart, name: "E-Commerce", desc: "Drive sales and ROAS" },
  { icon: Users, name: "Healthcare", desc: "Patient acquisition" },
  { icon: Globe, name: "SaaS & Tech", desc: "User growth strategies" },
  { icon: Layers, name: "Real Estate", desc: "Lead generation" },
  { icon: MessageSquare, name: "Education", desc: "Enrollment campaigns" },
  { icon: BarChart3, name: "Finance", desc: "Trust-building content" },
]

export default function DigitalMarketingPage() {
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Hero Section - Split diagonal layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-950 via-gray-950 to-amber-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.1)_0%,transparent_50%)]" />

        {/* Vector Art - Megaphone / Speaker */}
        <div className="absolute top-[12%] right-[6%] hidden lg:block opacity-20">
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [-3, 3, -3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 60 L140 25 L140 135 L50 100 Z" stroke="#f97316" strokeWidth="2" fill="rgba(249,115,22,0.08)" />
              <rect x="30" y="60" width="20" height="40" rx="4" stroke="#f97316" strokeWidth="2" fill="none" />
              <rect x="140" y="20" width="15" height="120" rx="6" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1.5" />
              <path d="M155 50 Q180 45 175 80 Q180 115 155 110" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.5" />
              <path d="M160 40 Q195 30 190 80 Q195 130 160 120" stroke="#f97316" strokeWidth="1" fill="none" opacity="0.3" />
              <line x1="30" y1="100" x2="20" y2="140" stroke="#f97316" strokeWidth="1.5" />
              <line x1="50" y1="100" x2="40" y2="140" stroke="#f97316" strokeWidth="1.5" />
              <rect x="15" y="140" width="30" height="8" rx="3" fill="rgba(249,115,22,0.1)" />
            </svg>
          </motion.div>
        </div>

        {/* Vector Art - Bar Chart */}
        <div className="absolute bottom-[15%] right-[10%] hidden lg:block opacity-20">
          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <svg width="150" height="120" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="20" y1="100" x2="140" y2="100" stroke="#f97316" strokeWidth="1.5" />
              <line x1="20" y1="100" x2="20" y2="15" stroke="#f97316" strokeWidth="1.5" />
              <rect x="35" y="65" width="16" height="35" rx="3" fill="rgba(249,115,22,0.25)" />
              <rect x="58" y="45" width="16" height="55" rx="3" fill="rgba(249,115,22,0.35)" />
              <rect x="81" y="30" width="16" height="70" rx="3" fill="rgba(245,158,11,0.4)" />
              <rect x="104" y="20" width="16" height="80" rx="3" fill="rgba(249,115,22,0.5)" />
              <path d="M43 62 L66 42 L89 27 L112 17" stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
              <circle cx="43" cy="62" r="3" fill="#fbbf24" opacity="0.6" />
              <circle cx="66" cy="42" r="3" fill="#fbbf24" opacity="0.6" />
              <circle cx="89" cy="27" r="3" fill="#fbbf24" opacity="0.6" />
              <circle cx="112" cy="17" r="3" fill="#fbbf24" opacity="0.6" />
            </svg>
          </motion.div>
        </div>

        {/* Vector Art - Target / Bullseye */}
        <div className="absolute top-[55%] right-[28%] hidden lg:block opacity-20">
          <motion.div
            animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="35" stroke="#f97316" strokeWidth="1.5" fill="none" />
              <circle cx="40" cy="40" r="25" stroke="#f97316" strokeWidth="1.2" fill="none" opacity="0.6" />
              <circle cx="40" cy="40" r="15" stroke="#f97316" strokeWidth="1" fill="none" opacity="0.4" />
              <circle cx="40" cy="40" r="5" fill="#f97316" opacity="0.5" />
              <line x1="40" y1="2" x2="40" y2="15" stroke="#f97316" strokeWidth="0.8" opacity="0.3" />
              <line x1="40" y1="65" x2="40" y2="78" stroke="#f97316" strokeWidth="0.8" opacity="0.3" />
              <line x1="2" y1="40" x2="15" y2="40" stroke="#f97316" strokeWidth="0.8" opacity="0.3" />
              <line x1="65" y1="40" x2="78" y2="40" stroke="#f97316" strokeWidth="0.8" opacity="0.3" />
            </svg>
          </motion.div>
        </div>

        {/* Vector Art - @ Symbol */}
        <div className="absolute top-[70%] right-[5%] hidden lg:block opacity-15">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="25" stroke="#f97316" strokeWidth="2" fill="none" />
              <circle cx="30" cy="30" r="10" stroke="#f97316" strokeWidth="1.5" fill="none" />
              <path d="M40 30 A10 10 0 0 0 30 20 A10 10 0 0 0 20 30 A10 10 0 0 0 30 40 L40 40 L40 30" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.5" />
            </svg>
          </motion.div>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto w-full pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-300 mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Services</span>
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
                <Megaphone className="w-4 h-4 text-orange-400" />
                <span className="text-orange-300 text-sm font-medium">Digital Marketing</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Grow Your
                <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
                Data-driven digital marketing strategies that amplify your brand, drive qualified traffic, and convert visitors into loyal customers. From SEO to social media, we deliver measurable results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 flex items-center gap-2">
                    Start a Campaign
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <button className="px-8 py-4 border-2 border-orange-500/30 text-orange-300 font-semibold rounded-full hover:bg-orange-500/10 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "300%", label: "Avg Traffic Growth", color: "from-orange-500 to-amber-500" },
                  { value: "5.2x", label: "Average ROAS", color: "from-amber-500 to-yellow-500" },
                  { value: "98%", label: "Client Retention", color: "from-yellow-500 to-orange-500" },
                  { value: "150+", label: "Campaigns Launched", color: "from-orange-600 to-red-500" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.15 }}
                    className="bg-gray-900/60 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300"
                  >
                    <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Offset cards with stats badge */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px]" />

        {/* Vector Art - Pie Chart (top-right) */}
        <div className="absolute top-16 right-12 hidden lg:block opacity-20">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70" cy="70" r="55" stroke="#f97316" strokeWidth="1.5" fill="none" />
            <path d="M70 70 L70 15 A55 55 0 0 1 120 95 Z" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1" />
            <path d="M70 70 L120 95 A55 55 0 0 1 40 118 Z" fill="rgba(245,158,11,0.08)" stroke="#f97316" strokeWidth="1" opacity="0.6" />
            <path d="M70 70 L40 118 A55 55 0 0 1 70 15 Z" fill="rgba(251,191,36,0.06)" stroke="#f97316" strokeWidth="1" opacity="0.4" />
            <circle cx="70" cy="70" r="20" fill="white" stroke="#f97316" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>

        {/* Vector Art - Funnel (bottom-left) */}
        <div className="absolute bottom-12 left-10 hidden lg:block opacity-20">
          <svg width="120" height="160" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 L110 10 L75 65 L75 130 L45 130 L45 65 Z" stroke="#f97316" strokeWidth="1.5" fill="none" />
            <line x1="15" y1="25" x2="105" y2="25" stroke="#f97316" strokeWidth="0.8" opacity="0.3" />
            <line x1="25" y1="40" x2="95" y2="40" stroke="#f97316" strokeWidth="0.8" opacity="0.3" />
            <line x1="38" y1="55" x2="82" y2="55" stroke="#f97316" strokeWidth="0.8" opacity="0.3" />
            <rect x="45" y="130" width="30" height="15" rx="4" fill="rgba(249,115,22,0.1)" stroke="#f97316" strokeWidth="1" />
            <circle cx="60" cy="18" r="4" fill="#f97316" opacity="0.15" />
            <circle cx="40" cy="18" r="3" fill="#f97316" opacity="0.1" />
            <circle cx="80" cy="18" r="3" fill="#f97316" opacity="0.1" />
            <circle cx="60" cy="33" r="3" fill="#f97316" opacity="0.12" />
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
            <span className="text-orange-500 font-semibold text-sm tracking-widest uppercase">Our Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">Marketing Services</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Comprehensive digital marketing solutions to boost your online visibility, engagement, and revenue.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500"
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.stats}
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                <ArrowRight className="w-5 h-5 text-orange-500 mt-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms - Dark floating tags */}
      <section className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08)_0%,transparent_60%)]" />

        {/* Vector Art - Laptop with analytics (top-left) */}
        <div className="absolute top-12 left-6 hidden lg:block opacity-20">
          <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="8" width="120" height="78" rx="6" stroke="#f97316" strokeWidth="1.5" fill="none" />
            <rect x="26" y="14" width="108" height="60" rx="3" fill="rgba(249,115,22,0.05)" />
            <path d="M15 86 L20 86 L20 90 Q20 92 22 92 L138 92 Q140 92 140 90 L140 86 L145 86 L152 100 Q153 103 150 103 L10 103 Q7 103 8 100 Z" fill="rgba(249,115,22,0.08)" stroke="#f97316" strokeWidth="1" />
            <polyline points="36,58 50,42 64,50 78,30 92,38 106,22 120,26" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.5" />
            <circle cx="50" cy="42" r="2.5" fill="#f97316" opacity="0.4" />
            <circle cx="78" cy="30" r="2.5" fill="#f97316" opacity="0.4" />
            <circle cx="106" cy="22" r="2.5" fill="#f97316" opacity="0.4" />
          </svg>
        </div>

        {/* Vector Art - Magnifying glass with graph (bottom-right) */}
        <div className="absolute bottom-16 right-10 hidden lg:block opacity-20">
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="45" cy="45" r="35" stroke="#f97316" strokeWidth="2" fill="none" />
            <circle cx="45" cy="45" r="28" stroke="#f97316" strokeWidth="0.8" fill="none" opacity="0.3" />
            <line x1="72" y1="72" x2="100" y2="100" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
            <polyline points="25,55 35,42 45,48 55,30 65,38" stroke="#fbbf24" strokeWidth="1.5" fill="none" opacity="0.5" />
            <circle cx="55" cy="30" r="2" fill="#fbbf24" opacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-start gap-16"
          >
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase">Tools & Platforms</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">Our Marketing Stack</h2>
              <p className="text-gray-400 leading-relaxed">We leverage industry-leading tools and platforms to deliver data-driven campaigns with measurable results.</p>
            </div>

            <div className="lg:w-2/3 flex flex-wrap gap-3">
              {techTools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  viewport={{ once: true }}
                  className="group px-5 py-3 bg-gray-800/50 border border-gray-700/50 rounded-full hover:border-orange-500/40 hover:bg-orange-500/10 transition-all duration-300 cursor-default"
                >
                  <span className="text-gray-300 text-sm font-medium group-hover:text-orange-300 transition-colors duration-300">{tool.name}</span>
                  <span className="text-gray-600 text-xs ml-2 group-hover:text-orange-500/60 transition-colors duration-300">{tool.category}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section - Zigzag timeline */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[120px]" />

        {/* Vector Art - Rocket with trail */}
        <div className="absolute top-20 left-8 hidden lg:block opacity-20">
          <svg width="90" height="150" viewBox="0 0 90 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45 8 Q45 8 58 40 L58 90 Q58 98 45 102 Q32 98 32 90 L32 40 Q45 8 45 8Z" stroke="#f97316" strokeWidth="1.5" fill="none" />
            <path d="M45 8 Q41 25 38 38 L52 38 Q49 25 45 8Z" fill="rgba(249,115,22,0.1)" />
            <circle cx="45" cy="52" r="6" stroke="#f97316" strokeWidth="1" fill="rgba(249,115,22,0.08)" />
            <path d="M32 75 L18 98 L32 92Z" fill="rgba(249,115,22,0.12)" />
            <path d="M58 75 L72 98 L58 92Z" fill="rgba(249,115,22,0.12)" />
            <path d="M38 102 Q42 118 45 135 Q48 118 52 102" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.4" />
          </svg>
        </div>

        {/* Vector Art - Checklist */}
        <div className="absolute bottom-16 right-16 hidden lg:block opacity-20">
          <svg width="100" height="130" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="5" width="80" height="120" rx="8" stroke="#f97316" strokeWidth="1.5" fill="none" />
            <rect x="10" y="5" width="80" height="22" rx="8" fill="rgba(249,115,22,0.08)" />
            <rect x="30" y="12" width="40" height="5" rx="2.5" fill="#f97316" opacity="0.2" />
            <rect x="25" y="38" width="10" height="10" rx="2" stroke="#f97316" strokeWidth="1" fill="none" />
            <path d="M27 43 L30 46 L37 38" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.5" />
            <rect x="42" y="40" width="38" height="4" rx="2" fill="#f97316" opacity="0.12" />
            <rect x="25" y="58" width="10" height="10" rx="2" stroke="#f97316" strokeWidth="1" fill="none" />
            <path d="M27 63 L30 66 L37 58" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.5" />
            <rect x="42" y="60" width="38" height="4" rx="2" fill="#f97316" opacity="0.12" />
            <rect x="25" y="78" width="10" height="10" rx="2" stroke="#f97316" strokeWidth="1" fill="none" />
            <rect x="42" y="80" width="38" height="4" rx="2" fill="#f97316" opacity="0.08" />
            <rect x="25" y="98" width="10" height="10" rx="2" stroke="#f97316" strokeWidth="1" fill="none" />
            <rect x="42" y="100" width="28" height="4" rx="2" fill="#f97316" opacity="0.06" />
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
            <span className="text-orange-500 font-semibold text-sm tracking-widest uppercase">Our Approach</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">Marketing Process</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -top-2 -left-2 text-7xl font-black text-orange-500/8 select-none">{step.step}</div>
                <div className="relative pl-4 pt-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Metric cards */}
      <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">

        {/* Vector Art - Trophy */}
        <div className="absolute top-12 right-10 hidden lg:block opacity-20">
          <svg width="100" height="130" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 10 L70 10 L70 55 Q70 80 50 90 Q30 80 30 55 Z" stroke="#f97316" strokeWidth="1.5" fill="none" />
            <path d="M30 20 Q15 20 15 35 Q15 50 30 50" stroke="#f97316" strokeWidth="1.5" fill="none" />
            <path d="M70 20 Q85 20 85 35 Q85 50 70 50" stroke="#f97316" strokeWidth="1.5" fill="none" />
            <line x1="50" y1="90" x2="50" y2="105" stroke="#f97316" strokeWidth="2" />
            <rect x="32" y="105" width="36" height="10" rx="4" fill="rgba(249,115,22,0.1)" stroke="#f97316" strokeWidth="1" />
            <path d="M42 35 L46 45 L56 45 L48 52 L50 62 L42 55 L34 62 L36 52 L28 45 L38 45 Z" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Vector Art - Handshake */}
        <div className="absolute bottom-8 left-10 hidden lg:block opacity-20">
          <svg width="140" height="80" viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 40 L35 20 L55 35 L75 35 L95 20 L130 40" stroke="#f97316" strokeWidth="1.5" fill="none" />
            <path d="M55 35 L45 50 L60 55 L50 65 L70 60" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.5" />
            <path d="M75 35 L85 50 L70 55 L80 65 L60 60" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.5" />
            <circle cx="10" cy="40" r="4" fill="#f97316" opacity="0.15" />
            <circle cx="130" cy="40" r="4" fill="#f97316" opacity="0.15" />
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
            <span className="text-orange-500 font-semibold text-sm tracking-widest uppercase">Why Advait Softech</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">Results That Speak</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "Data-Driven", description: "Every decision backed by analytics, A/B tests, and real performance data." },
              { icon: Target, title: "ROI Focused", description: "Campaigns optimized for conversions and revenue, not just vanity metrics." },
              { icon: Eye, title: "Full Transparency", description: "Real-time dashboards and detailed reports so you always know where you stand." },
              { icon: Zap, title: "Agile Execution", description: "Rapid campaign iterations with weekly optimization cycles for peak performance." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dm-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="rgba(249,115,22,0.5)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dm-dots)" />
          </svg>
        </div>

        {/* Vector Art - Signal / Broadcast waves */}
        <div className="absolute top-16 right-8 hidden lg:block opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="90" r="6" fill="#f97316" opacity="0.4" />
            <path d="M42 78 A25 25 0 0 1 78 78" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M30 68 A40 40 0 0 1 90 68" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.3" />
            <path d="M18 58 A55 55 0 0 1 102 58" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.2" />
            <path d="M6 48 A70 70 0 0 1 114 48" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.15" />
          </svg>
        </div>

        {/* Vector Art - Connected nodes */}
        <div className="absolute bottom-12 left-8 hidden lg:block opacity-20">
          <svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="50" r="8" stroke="#f97316" strokeWidth="1.5" fill="rgba(249,115,22,0.08)" />
            <circle cx="80" cy="25" r="8" stroke="#f97316" strokeWidth="1.5" fill="rgba(249,115,22,0.08)" />
            <circle cx="130" cy="50" r="8" stroke="#f97316" strokeWidth="1.5" fill="rgba(249,115,22,0.08)" />
            <circle cx="80" cy="75" r="8" stroke="#f97316" strokeWidth="1.5" fill="rgba(249,115,22,0.08)" />
            <line x1="38" y1="46" x2="72" y2="29" stroke="#f97316" strokeWidth="1" opacity="0.3" />
            <line x1="88" y1="29" x2="122" y2="46" stroke="#f97316" strokeWidth="1" opacity="0.3" />
            <line x1="38" y1="54" x2="72" y2="71" stroke="#f97316" strokeWidth="1" opacity="0.3" />
            <line x1="88" y1="71" x2="122" y2="54" stroke="#f97316" strokeWidth="1" opacity="0.3" />
            <line x1="80" y1="33" x2="80" y2="67" stroke="#f97316" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
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
            <span className="text-orange-400 font-semibold text-sm tracking-widest uppercase">Industries</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">Sectors We Serve</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 bg-gray-900/50 border border-gray-800 rounded-2xl p-5 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <industry.icon className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{industry.name}</h3>
                  <p className="text-gray-500 text-xs">{industry.desc}</p>
                </div>
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
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gray-950/85 backdrop-blur-sm" />

        {/* Vector Art - Envelope */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="10" width="110" height="60" rx="8" stroke="#fff" strokeWidth="1.5" fill="none" />
            <path d="M5 18 L60 48 L115 18" stroke="#fff" strokeWidth="1.5" fill="none" />
            <path d="M5 70 L45 42" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
            <path d="M115 70 L75 42" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Vector Art - Click cursor */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5 L15 50 L25 42 L35 60 L42 56 L32 38 L45 38 Z" stroke="#fff" strokeWidth="1.5" fill="rgba(255,255,255,0.06)" />
            <circle cx="15" cy="5" r="3" fill="rgba(249,115,22,0.4)" />
            <circle cx="15" cy="5" r="8" stroke="rgba(249,115,22,0.2)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <Megaphone className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">Ready to Grow?</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Launch Your Next
              <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Marketing Campaign</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Get a free digital marketing audit and discover untapped opportunities to grow your business online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 flex items-center gap-2">
                  Get Free Audit
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                  All Services
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
