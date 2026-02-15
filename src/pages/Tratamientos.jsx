import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Bone, Apple, Check, ChevronDown } from 'lucide-react';
import tratamiento from '../assets/img/tratamiento.png';
import tratamientoOsteopatia from '../assets/img/osteopatia.png';

export default function Tratamientos() {
  const [activeCategory, setActiveCategory] = useState('odontologia');

  const categories = {
    odontologia: {
      icon: Sparkles,
      title: "Odontología Integral",
      subtitle: "Tecnología de última generación para tu sonrisa perfecta",
      image: tratamiento,
      treatments: [
        {
          name: "Implantes Dentales",
          description: "Solución permanente para dientes perdidos con materiales de máxima calidad y técnicas mínimamente invasivas."
        },
        {
          name: "Ortodoncia Invisible",
          description: "Alinea tus dientes de forma discreta con tecnología Invisalign® y férulas transparentes personalizadas."
        },
        {
          name: "Blanqueamiento Dental",
          description: "Recupera la luminosidad de tu sonrisa con tratamientos profesionales seguros y efectivos."
        },
        {
          name: "Carillas de Porcelana",
          description: "Transforma tu sonrisa con carillas ultrafinas que proporcionan un aspecto natural y duradero."
        },
        {
          name: "Endodoncia Avanzada",
          description: "Tratamientos de conducto con microscopio para máxima precisión y mínimas molestias."
        },
        {
          name: "Periodoncia",
          description: "Cuidado integral de encías y tejidos de soporte dental para una salud bucal óptima."
        }
      ]
    },
    estetica: {
      icon: Heart,
      title: "Medicina Estética",
      subtitle: "Realza tu belleza natural con tratamientos personalizados",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      treatments: [
        {
          name: "Ácido Hialurónico",
          description: "Hidratación profunda y relleno facial para recuperar el volumen y suavizar arrugas."
        },
        {
          name: "Toxina Botulínica",
          description: "Reduce las líneas de expresión de forma segura y natural, manteniendo tu expresividad."
        },
        {
          name: "Mesoterapia Facial",
          description: "Revitaliza tu piel con cócteles de vitaminas y nutrientes para un rostro luminoso."
        },
        {
          name: "Hilos Tensores",
          description: "Efecto lifting sin cirugía para redefinir el óvalo facial y tensar la piel."
        },
        {
          name: "Peeling Químico",
          description: "Renueva tu piel eliminando células muertas y estimulando la regeneración celular."
        },
        {
          name: "Tratamiento Antimanchas",
          description: "Unifica el tono de tu piel y reduce la hiperpigmentación de forma efectiva."
        }
      ]
    },
    osteopatia: {
      icon: Bone,
      title: "Osteopatía",
      subtitle: "Equilibrio y bienestar corporal a través de la terapia manual",
      image: tratamientoOsteopatia,
      treatments: [
        {
          name: "Osteopatía Estructural",
          description: "Tratamiento del sistema músculo-esquelético para aliviar dolores y mejorar la movilidad."
        },
        {
          name: "Osteopatía Craneal",
          description: "Técnicas suaves para equilibrar el sistema nervioso y aliviar cefaleas y estrés."
        },
        {
          name: "Osteopatía Visceral",
          description: "Mejora la función de los órganos internos y su relación con el sistema musculoesquelético."
        },
        {
          name: "Tratamiento ATM",
          description: "Especialización en disfunciones de la articulación temporomandibular y bruxismo."
        },
        {
          name: "Osteopatía Deportiva",
          description: "Prevención y tratamiento de lesiones para optimizar el rendimiento físico."
        },
        {
          name: "Terapia Postural",
          description: "Corrección de desequilibrios posturales para prevenir dolores crónicos."
        }
      ]
    }/*,
    dietetica: {
      icon: Apple,
      title: "Dietética y Nutrición",
      subtitle: "Planes nutricionales personalizados para tu bienestar",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
      treatments: [
        {
          name: "Plan Nutricional Personalizado",
          description: "Diseño de dietas adaptadas a tus objetivos, gustos y estilo de vida."
        },
        {
          name: "Nutrición Deportiva",
          description: "Optimiza tu rendimiento y recuperación con estrategias nutricionales específicas."
        },
        {
          name: "Control de Peso",
          description: "Pérdida o ganancia de peso saludable con seguimiento profesional continuo."
        },
        {
          name: "Nutrición Clínica",
          description: "Manejo dietético de patologías como diabetes, hipertensión o alergias alimentarias."
        },
        {
          name: "Coaching Nutricional",
          description: "Acompañamiento para cambiar hábitos alimentarios y mantener resultados a largo plazo."
        },
        {
          name: "Análisis de Composición Corporal",
          description: "Evaluación detallada de masa muscular, grasa y agua corporal para un plan preciso."
        }
      ]
    }*/
  };

  const current = categories[activeCategory];

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
            <p className="text-gray-500 tracking-[0.3em] uppercase text-xs mb-4">Nuestros servicios</p>
            <h1 className="text-5xl md:text-6xl font-extralight mb-6">
              Tratamientos
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl font-light">
              Descubre nuestra amplia gama de tratamientos diseñados para cuidar 
              tu salud y realzar tu belleza natural.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-0 bg-white border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-0 -mx-6 px-6 md:mx-0 md:px-0">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-5 text-sm tracking-wider uppercase whitespace-nowrap transition-all duration-300 border-b-2 ${
                  activeCategory === key
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Content */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="py-20"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Image & Info */}
              <div className="lg:sticky lg:top-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative mb-8">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full aspect-[4/3] object-cover grayscale"
                    />
                    <div className="absolute inset-0 border border-black/10" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <current.icon className="w-6 h-6 text-black stroke-[1.5]" />
                    <h2 className="text-3xl font-light">{current.title}</h2>
                  </div>
                  <p className="text-gray-500 font-light">{current.subtitle}</p>
                </motion.div>
              </div>

              {/* Treatments List */}
              <div className="space-y-4">
                {current.treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group p-6 border border-gray-100 hover:border-black transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-black group-hover:bg-black transition-all duration-300">
                        <Check className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-black mb-2">{treatment.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-light">
                          {treatment.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extralight mb-4">
            ¿Tienes dudas sobre algún <span className="font-medium">tratamiento</span>?
          </h2>
          <p className="text-gray-500 mb-8 font-light">
            Nuestro equipo estará encantado de asesorarte sin compromiso
          </p>
          <a
            href={createPageUrl("Contacto")}
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-gray-900 transition-all duration-300"
          >
            Solicitar información
          </a>
        </div>
      </section>
    </div>
  );
}

import { createPageUrl } from '@/utils';