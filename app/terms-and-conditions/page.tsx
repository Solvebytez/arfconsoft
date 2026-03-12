"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { FileText, Scale, Handshake, AlertTriangle, CreditCard, Clock, Ban, RefreshCw } from "lucide-react"

export default function TermsAndConditionsPage() {
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
              <FileText className="w-4 h-4 text-[#25ABC4]" />
              <span className="text-[#25ABC4] text-sm font-medium">Legal Agreement</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Terms and Conditions
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
                Welcome to Advait Softech. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. Please read them carefully before engaging our services.
              </p>
            </motion.div>

            {/* Sections */}
            {[
              {
                icon: Handshake,
                title: "1. Agreement to Terms",
                content: [
                  "By accessing our website or using our services, you agree to these Terms and Conditions.",
                  "If you disagree with any part of these terms, you may not access our services.",
                  "We reserve the right to modify these terms at any time with notice to existing clients.",
                  "Continued use of our services after changes constitutes acceptance of new terms."
                ]
              },
              {
                icon: Scale,
                title: "2. Services Description",
                content: [
                  "We provide software development, web development, mobile app development, and related IT services.",
                  "Service specifications, deliverables, and timelines are defined in individual project agreements.",
                  "We reserve the right to modify or discontinue services with reasonable notice.",
                  "Custom development work is subject to separate Statement of Work (SOW) agreements."
                ]
              },
              {
                icon: CreditCard,
                title: "3. Payment Terms",
                content: [
                  "Payment terms are specified in individual project contracts and invoices.",
                  "Standard payment terms are Net 30 unless otherwise agreed in writing.",
                  "Late payments may incur interest charges at 1.5% per month.",
                  "We reserve the right to suspend services for overdue accounts exceeding 60 days."
                ]
              },
              {
                icon: FileText,
                title: "4. Intellectual Property",
                content: [
                  "Upon full payment, clients receive ownership of custom-developed code and deliverables.",
                  "We retain rights to pre-existing code, frameworks, and reusable components.",
                  "Third-party libraries and tools remain subject to their respective licenses.",
                  "We may showcase completed projects in our portfolio unless otherwise agreed."
                ]
              },
              {
                icon: AlertTriangle,
                title: "5. Limitation of Liability",
                content: [
                  "Our liability is limited to the total amount paid for the specific service in question.",
                  "We are not liable for indirect, incidental, or consequential damages.",
                  "We do not guarantee uninterrupted or error-free service operation.",
                  "Clients are responsible for maintaining backups of their data and content."
                ]
              },
              {
                icon: Clock,
                title: "6. Project Timelines",
                content: [
                  "Estimated timelines are provided in good faith but are not guaranteed.",
                  "Delays caused by client feedback, approvals, or scope changes may extend timelines.",
                  "We will communicate any significant delays as soon as they are identified.",
                  "Rush projects may incur additional fees as specified in the project agreement."
                ]
              },
              {
                icon: Ban,
                title: "7. Termination",
                content: [
                  "Either party may terminate services with 30 days written notice.",
                  "Upon termination, clients pay for all work completed to date.",
                  "We will provide all deliverables and documentation upon final payment.",
                  "Termination for cause (breach of terms) may be immediate without notice."
                ]
              },
              {
                icon: RefreshCw,
                title: "8. Warranty and Support",
                content: [
                  "We provide a 90-day warranty period for bug fixes on delivered work.",
                  "Warranty covers defects in our code, not issues from client modifications.",
                  "Post-warranty support and maintenance are available under separate agreements.",
                  "We do not warrant compatibility with future third-party software updates."
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-10 p-6 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25ABC4]/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-[#25ABC4]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#25ABC4] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-gray-900 rounded-2xl text-center"
            >
              <Scale className="w-10 h-10 text-[#25ABC4] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Questions About Terms?</h3>
              <p className="text-gray-400 mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <a href="mailto:legal@advaitsoftech.com" className="text-[#25ABC4] hover:underline font-medium">
                legal@advaitsoftech.com
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
