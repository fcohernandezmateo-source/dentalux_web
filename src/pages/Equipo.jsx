import React from 'react';
import { motion } from 'framer-motion';

import fotoCharo from '../assets/img/charo.png';
import fotoMariaJose from '../assets/img/mariajose.png';
import fotoMiriam from '../assets/img/miriam.png';
import fotoNuria from '../assets/img/nuria.png';
import fotoJulia from '../assets/img/julia.png';
import fotoMairAngeles from '../assets/img/mariangeles.png';
import fotoAntonio from '../assets/img/antonio.png';
import fotoFatima from '../assets/img/fatima.png';
import fotoSandra from '../assets/img/sandra.png';
import fotoRocio from '../assets/img/rocio.png';
import fotoEsperanza from '../assets/img/esperanza.png';

export default function Equipo() {
  const team = [
    {
      name: "Rosario Barroso",
      role: "Directora",
      specialty: "Dirección Clínica",
      image: fotoCharo,
      description: "Directora de DentaLux, liderando el equipo con excelencia y compromiso en cada tratamiento."
    },
    {
      name: "María Jose Vega",
      role: "Administrativa",
      specialty: "Gestión y Atención al Paciente",
      image: fotoMariaJose,
      description: "Responsable de la gestión administrativa y primera atención a nuestros pacientes."
    },
    {
      name: "Miriam Santos",
      role: "Auxiliar",
      specialty: "Asistencia Clínica",
      image: fotoMiriam,
      description: "Auxiliar de clínica, garantizando el correcto funcionamiento de nuestros tratamientos."
    },
    {
      name: "Nuria Martín",
      role: "Auxiliar",
      specialty: "Asistencia Clínica",
      image: fotoNuria,
      description: "Auxiliar de clínica, comprometida con la excelencia en la atención al paciente."
    },
    {
      name: "Rocío Sánchez",
      role: "Ortodoncista",
      specialty: "Ortodoncia",
      image: fotoRocio,
      description: "Especialista en ortodoncia, dedicada a conseguir sonrisas perfectas y saludables."
    },
    {
      name: "Fátima Raso",
      role: "Endodoncista y Odontopediatra",
      specialty: "Endodoncia y Odontopediatría",
      image: fotoFatima,
      description: "Experta en endodoncia y odontología infantil, cuidando las sonrisas de toda la familia."
    },
    {
      name: "Sandra Domínguez",
      role: "Odontóloga General",
      specialty: "Odontología General",
      image: fotoSandra,
      description: "Odontóloga general, ofreciendo tratamientos integrales con máxima calidad."
    },
    {
      name: "María Ángeles Macías",
      role: "Cirujana",
      specialty: "Cirugía Oral",
      image: fotoMairAngeles,
      description: "Cirujana especializada en cirugía oral con técnicas avanzadas y mínimamente invasivas."
    },
    {
      name: "Julia Álvarez",
      role: "Cirujana",
      specialty: "Cirugía Oral",
      image: fotoJulia,
      description: "Cirujana con amplia experiencia en implantología y cirugía reconstructiva."
    },
    {
      name: "Esperanza García",
      role: "Médico Estético",
      specialty: "Medicina Estética",
      image: fotoEsperanza,
      description: "Médico especializado en estética facial, realzando la belleza natural de cada paciente."
    },
    {
      name: "Antonio Vázquez",
      role: "Osteópata y Quiromasajista",
      specialty: "Osteopatía y Quiromasaje",
      image: fotoAntonio,
      description: "Especialista en osteopatía y quiromasaje, restaurando el equilibrio y bienestar corporal."
    }/*,
    {
      name: "Nose Nose",
      role: "Dietista",
      specialty: "Dietética y Nutrición",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80",
      description: "Dietista especializado en planes nutricionales personalizados para tu bienestar."
    }*/
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
            <p className="text-gray-500 tracking-[0.3em] uppercase text-xs mb-4">Profesionales</p>
            <h1 className="text-5xl md:text-6xl font-extralight mb-6">
              Nuestro Equipo
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl font-light">
              Un equipo multidisciplinar de profesionales altamente cualificados, 
              comprometidos con la excelencia y tu bienestar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 tracking-wider uppercase mb-2">{member.specialty}</p>
                  <h3 className="text-xl font-medium text-black mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gray-400 tracking-[0.3em] uppercase text-xs mb-4">Nuestra filosofía</p>
            <h2 className="text-4xl font-extralight">
              Valores que nos <span className="font-medium">definen</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Excelencia",
                description: "Nos comprometemos con los más altos estándares de calidad en cada tratamiento que realizamos."
              },
              {
                title: "Innovación",
                description: "Incorporamos constantemente las últimas tecnologías y técnicas para ofrecer los mejores resultados."
              },
              {
                title: "Cercanía",
                description: "Creamos relaciones de confianza con nuestros pacientes, escuchando y atendiendo sus necesidades."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gray-200 flex items-center justify-center">
                  <span className="text-2xl font-extralight">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}