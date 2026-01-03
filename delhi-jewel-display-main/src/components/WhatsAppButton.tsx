import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20jewelry%20collection."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;
