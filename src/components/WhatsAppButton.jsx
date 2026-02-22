import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "34959704020"; // El número de la clínica con el prefijo 34
  const message = encodeURIComponent("¡Hola! Quiero una cita.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip opcional que aparece al pasar el ratón */}
      <span className="absolute right-full mr-4 bg-white text-black text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap pointer-events-none">
        ¿Necesitas ayuda? Escríbenos
      </span>
      <MessageCircle className="w-7 h-7 fill-current" />
    </a>
  );
}