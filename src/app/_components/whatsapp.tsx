// components/FloatingWhatsApp.js
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = ({ phoneNumber }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const whatsappUrl = `https://wa.me/${5534996472326}?text=Olá, vim pelo site e gostaria de mais informações.`;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600"
      >
        <MessageCircle size={32} color="white" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
