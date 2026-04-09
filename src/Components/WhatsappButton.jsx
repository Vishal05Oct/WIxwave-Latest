import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "917479787717";
const whatsappMessage = "Hi%20Wixwave%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services.";

const WhatsappButton = () => {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Wixwave on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white  transition duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
    >
      <FaWhatsapp className="h-5 w-5" />
      <span className="hidden md:inline-block text-sm font-semibold">WhatsApp</span>
    </a>
  );
};

export default WhatsappButton;
