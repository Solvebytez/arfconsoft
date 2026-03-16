import Link from "next/link"

const WHATSAPP_NUMBER = "966562467633"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 transition-transform duration-200 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7 text-white"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M16 3C9.373 3 4 8.373 4 15c0 2.108.554 4.068 1.52 5.78L4 29l8.45-1.48A11.9 11.9 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.9 9.9 0 0 1-3.992-.84l-.286-.122-4.977.872.865-4.86-.148-.25A9.9 9.9 0 0 1 6 15C6 9.486 10.486 5 16 5zm-3.043 4.5c-.26 0-.676.098-1.03.488-.354.39-1.35 1.318-1.35 3.214 0 1.896 1.383 3.73 1.576 3.988.194.26 2.622 4.186 6.476 5.7 3.2 1.26 3.853 1.01 4.545.946.692-.065 2.242-.917 2.558-1.802.316-.886.316-1.644.223-1.802-.093-.158-.354-.26-.74-.452-.385-.19-2.275-1.123-2.627-1.25-.354-.13-.61-.195-.867.196-.258.39-1 1.25-1.227 1.508-.228.26-.452.293-.838.098-.385-.194-1.627-.6-3.1-1.913-1.147-1.025-1.92-2.29-2.148-2.68-.228-.39-.024-.6.171-.79.175-.173.39-.45.585-.676.194-.228.258-.39.39-.65.13-.26.065-.488-.033-.68-.098-.195-.867-2.145-1.23-2.94-.323-.707-.668-.765-.93-.772z"
          />
        </svg>
      </Link>
    </div>
  )
}

