"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Cookie, Settings, BarChart3, Target, Shield, ToggleLeft } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,171,196,0.15)_0%,transparent_50%)]" />
        
        <div className="relative z-10 px-8 lg:px-16 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25ABC4]/10 border border-[#25ABC4]/20 mb-6">
              <Cookie className="w-4 h-4 text-[#25ABC4]" />
              <span className="text-[#25ABC4] text-sm font-medium">Cookie Information</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Last updated: March 1, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="px-8 lg:px-16 max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-gray-600 leading-relaxed">
                This Cookie Policy explains how Advait Softech uses cookies and similar tracking technologies when you visit our website. We use cookies to enhance your browsing experience, analyze website traffic, and understand where our visitors come from.
              </p>
            </motion.div>

            {/* What Are Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10 p-6 bg-[#25ABC4]/5 rounded-2xl border border-[#25ABC4]/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#25ABC4]/10 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-[#25ABC4]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">What Are Cookies?</h2>
              </div>
              <p className="text-gray-600">
                Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, login information, and browsing behavior. Cookies can be "persistent" (remain on your device until deleted) or "session" cookies (deleted when you close your browser).
              </p>
            </motion.div>

            {/* Cookie Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              
              <div className="grid gap-6">
                {[
                  {
                    icon: Settings,
                    title: "Essential Cookies",
                    description: "Required for the website to function properly. They enable core features like security, network management, and accessibility.",
                    examples: ["Session management", "Security tokens", "Load balancing"],
                    required: true
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics Cookies",
                    description: "Help us understand how visitors interact with our website by collecting and reporting information anonymously.",
                    examples: ["Google Analytics", "Page views tracking", "User journey analysis"],
                    required: false
                  },
                  {
                    icon: Target,
                    title: "Marketing Cookies",
                    description: "Used to track visitors across websites to display relevant advertisements based on their browsing behavior.",
                    examples: ["Ad personalization", "Conversion tracking", "Remarketing"],
                    required: false
                  },
                  {
                    icon: ToggleLeft,
                    title: "Preference Cookies",
                    description: "Allow the website to remember choices you make (such as language or region) and provide enhanced features.",
                    examples: ["Language preferences", "Theme settings", "Form autofill"],
                    required: false
                  }
                ].map((cookie, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#25ABC4]/10 flex items-center justify-center">
                          <cookie.icon className="w-5 h-5 text-[#25ABC4]" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{cookie.title}</h3>
                      </div>
                      {cookie.required && (
                        <span className="px-3 py-1 bg-[#25ABC4]/10 text-[#25ABC4] text-xs font-medium rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{cookie.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cookie.examples.map((example, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white border border-gray-200 text-gray-500 text-sm rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cookie Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specific Cookies We Use</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-4 py-3 text-left text-sm font-semibold rounded-tl-xl">Cookie Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Duration</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold rounded-tr-xl">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { name: "_ga", purpose: "Google Analytics - Distinguishes users", duration: "2 years", type: "Analytics" },
                      { name: "_gid", purpose: "Google Analytics - Distinguishes users", duration: "24 hours", type: "Analytics" },
                      { name: "_gat", purpose: "Google Analytics - Throttle request rate", duration: "1 minute", type: "Analytics" },
                      { name: "sessionId", purpose: "Maintains user session state", duration: "Session", type: "Essential" },
                      { name: "csrfToken", purpose: "Security - Prevents CSRF attacks", duration: "Session", type: "Essential" },
                      { name: "cookieConsent", purpose: "Stores cookie consent preferences", duration: "1 year", type: "Essential" },
                      { name: "language", purpose: "Stores language preference", duration: "1 year", type: "Preference" },
                    ].map((cookie, index) => (
                      <tr key={index} className="bg-white hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-sm font-mono text-[#25ABC4]">{cookie.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{cookie.purpose}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{cookie.duration}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            cookie.type === "Essential" ? "bg-green-100 text-green-700" :
                            cookie.type === "Analytics" ? "bg-blue-100 text-blue-700" :
                            "bg-purple-100 text-purple-700"
                          }`}>
                            {cookie.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Managing Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10 p-6 bg-gray-50 rounded-2xl border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#25ABC4]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#25ABC4]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
              </div>
              <p className="text-gray-600 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="space-y-3">
                {[
                  "Browser Settings: Most browsers allow you to refuse or delete cookies through their settings menu.",
                  "Our Cookie Banner: When you first visit our site, you can choose which non-essential cookies to accept.",
                  "Third-Party Tools: You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.",
                  "Do Not Track: We honor 'Do Not Track' browser signals where technically feasible."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#25ABC4] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-gray-900 rounded-2xl text-center"
            >
              <Cookie className="w-10 h-10 text-[#25ABC4] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Questions About Cookies?</h3>
              <p className="text-gray-400 mb-4">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <a href="mailto:privacy@advaitsoftech.com" className="text-[#25ABC4] hover:underline font-medium">
                privacy@advaitsoftech.com
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
