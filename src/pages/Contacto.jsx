import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Enviamos el estado directamente
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      alert('Error de conexión. Revisa tu internet e inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      lines: ["C/ Torre del Loro, 16", "21820 Lucena del Puerto, Huelva"]
    },
    {
      icon: Phone,
      title: "Teléfono",
      lines: ["959 70 40 20"]
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["info@dentalux.es", "citas@dentalux.es"]
    },
    {
      icon: Clock,
      title: "Horario",
      lines: ["Lun - Jue:","Mañanas 10:00 - 13:30","Tardes 16:00 - 20:30", "Vie: 10:00 - 13:30"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-500 tracking-[0.3em] uppercase text-xs mb-4">Contacto</p>
            <h1 className="text-5xl md:text-6xl font-extralight mb-6">
              ¿Hablamos?
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl font-light">
              Estamos aquí para resolver tus dudas y ayudarte a dar el primer paso 
              hacia tu bienestar. Contacta con nosotros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-extralight mb-8">
                  Información de <span className="font-medium">contacto</span>
                </h2>
                <div className="space-y-8 mb-12">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-black stroke-[1.5]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-black mb-1">{item.title}</h3>
                        {item.lines.map((line, i) => (
                          <p key={i} className="text-gray-500 text-sm">{line}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map */}
                <div className="relative">
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.056461427506!2d-6.729112223450915!3d37.30560207210874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1185012351663f%3A0x867332c8c4f3a76e!2sC.%20Torre%20del%20Loro%2C%2016%2C%2021820%20Lucena%20del%20Puerto%2C%20Huelva!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'grayscale(100%)' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="absolute inset-0 border border-black/10 pointer-events-none" />
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-50 p-8 md:p-12">
                <h2 className="text-3xl font-extralight mb-2">
                  Solicita tu <span className="font-medium">cita</span>
                </h2>
                <p className="text-gray-500 text-sm mb-8 font-light">
                  Rellena el formulario y nos pondremos en contacto contigo en menos de 24 horas
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-black flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-light mb-2">¡Mensaje enviado!</h3>
                    <p className="text-gray-500 font-light">
                      Gracias por contactarnos. Te responderemos lo antes posible.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      className="mt-6 variant-outline bg-transparent border border-black text-black hover:bg-black hover:text-white transition-colors"
                    >
                      Enviar otro mensaje
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Nombre completo</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="border-gray-200 focus:border-black rounded-none h-12 bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Teléfono</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="border-gray-200 focus:border-black rounded-none h-12 bg-white"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-gray-200 focus:border-black rounded-none h-12 bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Servicio de interés</label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="border-gray-200 focus:border-black rounded-none h-12 bg-white">
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="odontologia">Odontología Integral</SelectItem>
                          <SelectItem value="estetica">Medicina Estética</SelectItem>
                          <SelectItem value="osteopatia">Osteopatía</SelectItem>
                          <SelectItem value="dietetica">Dietética y Nutrición</SelectItem>
                          <SelectItem value="otro">Otro / Consulta general</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Mensaje</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="border-gray-200 focus:border-black rounded-none min-h-[120px] bg-white resize-none"
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-black hover:bg-gray-900 text-white rounded-none h-14 text-sm tracking-widest uppercase"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Enviar mensaje
                          <Send className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}