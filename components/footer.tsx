import Link from "next/link"
import Image from "next/image"
import {
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gray-900 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,171,196,0.05)_0%,transparent_50%)]" />

      <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          <div>
            <div className="mb-6 flex justify-center">
              <div className="relative h-24 w-64 md:h-28 md:w-72">
                <Image
                  src="/footer-logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Transform your business with innovative technology solutions. We deliver scalable, secure, and efficient software tailored to your needs.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/advaitsoftech" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/advaitsoftech" },
                { icon: Twitter, label: "Twitter", href: "https://twitter.com/advaitsoftech" },
                { icon: Facebook, label: "Facebook", href: "https://facebook.com/advaitsoftech" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#25ABC4] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "#" },
                { label: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#25ABC4] transition-colors duration-300 text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Web Development", href: "/services/web-development" },
                { label: "Mobile Apps", href: "/services/mobile-app-development" },
                { label: "Software Development", href: "/services/software-development" },
                { label: "Digital Marketing", href: "/services/digital-marketing" },
                { label: "Blockchain", href: "/services/blockchain" },
              ].map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="text-gray-400 hover:text-[#25ABC4] transition-colors duration-300 text-sm">{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-[#25ABC4] text-xs font-semibold mb-1">HEAD OFFICE</p>
                <p className="text-gray-400 text-sm leading-relaxed">S-11, Second Floor Jagdamba Tower, Amrapali Circle, Vaishali Nagar, Jaipur, Rajasthan 302021 India</p>
              </li>
              <li>
                <p className="text-[#25ABC4] text-xs font-semibold mb-1">OFFICE IN USA</p>
                <p className="text-gray-400 text-sm leading-relaxed">10685-B Hazelhurst Dr Houston, TX 77043</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-gray-500 text-sm">&copy; 2026 Arafcon Soft. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-[#25ABC4] transition-colors duration-300 text-sm">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="text-gray-500 hover:text-[#25ABC4] transition-colors duration-300 text-sm">Terms of Service</Link>
              <Link href="/cookie-policy" className="text-gray-500 hover:text-[#25ABC4] transition-colors duration-300 text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

