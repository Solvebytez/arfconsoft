"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ExternalLink, ArrowRight, Code2, Palette, Settings, Globe, Smartphone, Database, ShoppingCart } from "lucide-react"

const projects = [
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
    size: "",
    height: "h-[300px]",
    image: "/portfolio/colonialspirits.png",
    url: "https://www.colonialspirits.com/",
  },
  {
    title: "Kamine",
    category: "Online Shopping",
    desc: "Kamine is a modern online clothing platform designed to offer a seamless shopping experience. With a user-friendly interface, secure payments, and fast checkout, Kamine makes fashion accessible anytime, anywhere.",
    tags: ["E-Commerce", "React", "Node.js"],
    color: "from-pink-500 to-rose-600",
    size: "",
    height: "h-[300px]",
    image: "/portfolio/pf-logo1.webp",
    url: "",
  },
  {
    title: "Dream Shots",
    category: "Fantasy Cricket",
    desc: "Dream Fantasy is an immersive cricket fantasy app that lets users create their dream teams, participate in live contests, and win real rewards based on player performances. Designed for cricket enthusiasts.",
    tags: ["Mobile App", "React Native", "Node.js"],
    color: "from-green-500 to-emerald-600",
    size: "",
    height: "h-[300px]",
    image: "/portfolio/pf-logo2.webp",
    url: "",
  },
  {
    title: "AST Exchange",
    category: "Exchange Software",
    desc: "AST Exchange is a fast and secure crypto exchange platform for buying, selling, and trading digital currencies. It supports multiple cryptocurrencies, provides real-time price updates, and ensures quick transactions.",
    tags: ["Blockchain", "Web3", "Node.js"],
    color: "from-violet-500 to-purple-600",
    size: "",
    height: "h-[300px]",
    image: "/portfolio/pf-logo3.webp",
    url: "",
  },
  {
    title: "Azido",
    category: "Home Service",
    desc: "Azido is a home service platform that helps you find trusted professionals for cleaning, repairs, plumbing, and more. Book services easily through the app and get fast, reliable help at your doorstep.",
    tags: ["Mobile App", "React Native", "Node.js"],
    color: "from-teal-500 to-cyan-600",
    size: "",
    height: "h-[300px]",
    image: "/portfolio/pf-logo4.webp",
    url: "",
  },
  {
    title: "AST Crypto Wallet",
    category: "Wallet Application",
    desc: "AST Wallet is a secure and easy-to-use multi-currency wallet for storing, sending, and receiving different cryptocurrencies. It supports multiple digital assets, allowing seamless transactions in one place.",
    tags: ["Blockchain", "Web3", "React Native"],
    color: "from-indigo-500 to-blue-600",
    size: "",
    height: "h-[300px]",
    image: "/portfolio/pf-logo5.webp",
    url: "",
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#25ABC4_0%,transparent_50%)] opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#1e8a9e_0%,transparent_50%)] opacity-[0.15]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(37,171,196,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,171,196,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-24 w-28 h-28 border border-[#25ABC4]/20 rounded-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-48 left-16 w-20 h-20 border border-[#25ABC4]/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-14 h-14 bg-[#25ABC4]/10 rounded-lg blur-sm"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 pt-24 pb-16">
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
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#25ABC4]/15 border border-[#25ABC4]/30 rounded-full mb-8"
            >
              <Code2 className="w-5 h-5 text-[#25ABC4]" />
              <span className="text-[#25ABC4] text-sm font-medium">
                Our Portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e]">
                Projects
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Explore our portfolio of successful digital solutions that have transformed businesses across industries.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 max-w-4xl w-full"
            >
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "150+", label: "Happy Clients" },
                { value: "12+", label: "Years Experience" },
                { value: "50+", label: "Expert Team" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#25ABC4]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1e8a9e]/5 rounded-full blur-[100px]" />

        <div className="relative z-10 px-8 lg:px-16 max-w-[90rem] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#25ABC4] rounded-full" />
              <span className="text-[#25ABC4] font-medium uppercase tracking-wider text-sm">
                Our Work
              </span>
              <div className="w-8 h-1 bg-[#25ABC4] rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our portfolio of innovative digital solutions that drive business success.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#25ABC4]/20"
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative w-full h-64 md:h-80 overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Featured Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#25ABC4]/10 border border-[#25ABC4]/20 rounded-full mb-4">
                    <span className="w-1.5 h-1.5 bg-[#25ABC4] rounded-full" />
                    <span className="text-[#25ABC4] text-xs font-semibold uppercase tracking-wider">FEATURED</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-[#25ABC4] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200 hover:bg-[#25ABC4] hover:text-white hover:border-[#25ABC4] transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {project.url && (
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <button className="group/btn flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-[#25ABC4] hover:bg-[#1e8a9e] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#25ABC4]/30">
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        <span className="text-sm md:text-base">Live Demo</span>
                      </button>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="relative py-24 lg:py-32 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#25ABC4_0%,transparent_50%)] opacity-10" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(37,171,196,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,171,196,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

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
              <span className="text-[#25ABC4] font-medium uppercase tracking-wider text-sm">Skills & Expertise</span>
              <div className="w-8 h-1 bg-[#25ABC4] rounded-full" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Technologies We Master
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our expertise spans across the entire development stack, from frontend to backend and everything in between.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Mobile App Development",
                icon: Smartphone,
                iconColor: "bg-purple-500",
                skills: ["iOS", "Android", "Kotlin", "Swift", "React Native", "Flutter", "Xamarin", "Ionic"],
              },
              {
                title: "Web & Full-Stack",
                icon: Code2,
                iconColor: "bg-blue-500",
                skills: ["React", "Next.js", "Vue.js", "Angular", "Laravel", "Node.js", "Django", "ASP.NET"],
              },
              {
                title: "Blockchain Development",
                icon: Globe,
                iconColor: "bg-emerald-500",
                skills: ["Ethereum", "Solidity", "Web3.js", "Hardhat", "Polygon", "Hyperledger"],
              },
              {
                title: "CMS & E-Commerce",
                icon: ShoppingCart,
                iconColor: "bg-orange-500",
                skills: ["WordPress", "Shopify", "Magento", "WooCommerce", "Drupal", "Strapi"],
              },
              {
                title: "Databases",
                icon: Database,
                iconColor: "bg-rose-500",
                skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "SQLite"],
              },
              {
                title: "Design & Dev Tools",
                icon: Palette,
                iconColor: "bg-indigo-500",
                skills: ["Figma", "Adobe XD", "Sketch", "VS Code", "Git", "Docker", "AWS", "Jira"],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 md:p-8 overflow-hidden hover:border-[#25ABC4]/40 transition-all duration-500"
              >
                {/* Hover gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.iconColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${category.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${category.iconColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {category.title}
                  </h3>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:bg-[#25ABC4] hover:text-white hover:border-[#25ABC4] transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${category.iconColor} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`} />
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
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gray-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#25ABC4]/20 via-transparent to-transparent" />

        <div className="relative z-10 px-8 lg:px-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#25ABC4]/20 border border-[#25ABC4]/30 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-[#25ABC4] rounded-full animate-pulse" />
            <span className="text-[#25ABC4] text-sm font-medium">
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
            Ready to Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e]">
              Project?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Begin your complimentary tech audit. Let our experts analyze your current technology stack and provide actionable insights to optimize your digital infrastructure for growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#25ABC4] to-[#1e8a9e] hover:from-[#1e8a9e] hover:to-[#25ABC4] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[#25ABC4]/30 hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-3">
                  Book a Free Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
            <Link href="/about">
              <button className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-20 w-20 h-20 border border-[#25ABC4]/20 rounded-full" />
      </motion.section>

      <Footer />
    </>
  )
}
