import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ChevronRight, Sparkles, Heart, Bone, Apple, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/img/logo.png';
import salaEspera from '../assets/img/sala_espera.png';
import radioGrafia from '../assets/img/radioGrafia.png';
export default function Home() {
  const services = [
    {
      icon: Sparkles,
      title: "Odontología Integral",
      description: "Tratamientos dentales avanzados con tecnología de última generación"
    },
    {
      icon: Heart,
      title: "Medicina Estética",
      description: "Realza tu belleza natural con tratamientos personalizados"
    },
    {
      icon: Bone,
      title: "Osteopatía",
      description: "Terapia manual para el equilibrio y bienestar corporal"
    },
    {
      icon: Apple,
      title: "Dietética",
      description: "Planes nutricionales adaptados a tus necesidades"
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            src={salaEspera}
            alt="Clinica Dental"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-white/70 tracking-[0.3em] uppercase text-sm mb-6 font-light">
            Bienvenidos a
          </p>
          <img 
            src={logo}
            alt="DentaLux Clínica Dental y Estética"
            className="max-w-2xl w-full mx-auto mb-6"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="w-20 h-px bg-white/40 mx-auto my-8" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Donde la excelencia médica se encuentra con el diseño contemporáneo. 
            Transformamos sonrisas y realzamos tu belleza natural.
          </p>
          <Link
            to={createPageUrl("Tratamientos")}
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm tracking-widest uppercase hover:bg-gray-100 transition-all duration-300"
          >
            Descubre nuestros tratamientos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            {...fadeIn}
          >
            <p className="text-gray-400 tracking-[0.3em] uppercase text-xs mb-4">Nuestros servicios</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6">
              Excelencia en cada <span className="font-medium">tratamiento</span>
            </h2>
            <div className="w-16 h-px bg-black/20 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group p-8 border border-gray-100 hover:border-black transition-all duration-500 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <service.icon className="w-8 h-8 text-black mb-6 stroke-[1.5]" />
                <h3 className="text-lg font-medium text-black mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
                <Link 
                  to={createPageUrl("Tratamientos")} 
                  className="mt-6 flex items-center gap-2 text-black text-sm group-hover:opacity-100 transition-opacity"
                >
                  <span className="tracking-wider">Saber más</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 tracking-[0.3em] uppercase text-xs mb-4">Sobre nosotros</p>
              <h2 className="text-4xl md:text-5xl font-extralight mb-8">
                Tecnología de <span className="font-medium">vanguardia</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6 font-light">
                En DentaLux combinamos la última tecnología con un equipo de profesionales 
                altamente cualificados para ofrecerte los mejores resultados en odontología, 
                medicina estética, osteopatía y dietética.
              </p>
              <p className="text-gray-400 leading-relaxed mb-10 font-light">
                Nuestras instalaciones están diseñadas para proporcionarte una experiencia 
                única, donde el confort y la excelencia médica van de la mano.
              </p>
              <Link
                to={createPageUrl("Equipo")}
                className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                Conoce al equipo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={radioGrafia}
                alt="Clinica Dental Lucena del Puerto"
                className="w-full grayscale"
              />
              <div className="absolute inset-0 border border-white/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-black mb-6">
              ¿Listo para <span className="font-medium">transformar</span> tu sonrisa?
            </h2>
            <p className="text-gray-500 text-lg mb-10 font-light">
              Reserva tu primera consulta y descubre cómo podemos ayudarte
            </p>
            <Link
              to={createPageUrl("Contacto")}
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 text-sm tracking-widest uppercase hover:bg-gray-900 transition-all duration-300"
            >
              Contactar ahora
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}