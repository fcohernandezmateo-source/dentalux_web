import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Cookie } from 'lucide-react';

export default function Privacidad() {
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
            <p className="text-gray-500 tracking-[0.3em] uppercase text-xs mb-4">Legal</p>
            <h1 className="text-5xl md:text-6xl font-extralight mb-6">
              Información Legal
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Aviso Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6" />
              <h2 className="text-3xl font-light">Aviso Legal</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información 
                y de Comercio Electrónico, se informa de los siguientes aspectos legales:
              </p>
              
              <h3 className="text-xl font-medium text-black mt-8 mb-4">Datos Identificativos</h3>
              <ul className="space-y-2">
                <li><strong>Titular:</strong> DentaLux Clínica Dental y Estética</li>
                <li><strong>Dirección:</strong> C/ Torre del Loro, 16 - 21820 Lucena del Puerto, Huelva</li>
                <li><strong>Teléfono:</strong> 959 70 40 20</li>
                <li><strong>Email:</strong> info@dentalux.es</li>
              </ul>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">Propiedad Intelectual</h3>
              <p>
                Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, 
                tecnología, software, así como su diseño gráfico y códigos fuente, son propiedad de DentaLux 
                o de terceros que han autorizado su uso, y están protegidos por las leyes españolas e 
                internacionales sobre propiedad intelectual.
              </p>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">Responsabilidad</h3>
              <p>
                DentaLux no se hace responsable de la información y contenidos almacenados en foros, chats, 
                generadores de blogs, comentarios, redes sociales o cualquier otro medio que permita a terceros 
                publicar contenidos de forma independiente en la página web.
              </p>
            </div>
          </motion.div>

          {/* Política de Privacidad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6" />
              <h2 className="text-3xl font-light">Política de Privacidad</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 
                de Protección de Datos Personales y garantía de los derechos digitales, le informamos sobre 
                el tratamiento de sus datos personales.
              </p>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">Responsable del Tratamiento</h3>
              <ul className="space-y-2">
                <li><strong>Responsable:</strong> DentaLux Clínica Dental y Estética</li>
                <li><strong>Dirección:</strong> C/ Torre del Loro, 16 - 21820 Lucena del Puerto, Huelva</li>
                <li><strong>Email:</strong> info@dentalux.es</li>
              </ul>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">Finalidad del Tratamiento</h3>
              <p>
                Los datos personales que nos facilite a través del formulario de contacto serán utilizados 
                exclusivamente para gestionar su solicitud y responder a sus consultas. No almacenamos datos 
                personales en nuestros sistemas de forma permanente.
              </p>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">Base Legal</h3>
              <p>
                El tratamiento de sus datos se basa en el consentimiento otorgado al rellenar el formulario de contacto.
              </p>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">Derechos del Usuario</h3>
              <p>
                Puede ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento, 
                portabilidad y oposición mediante comunicación dirigida a info@dentalux.es. 
                Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos.
              </p>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">Conservación de Datos</h3>
              <p>
                Los datos se conservarán durante el tiempo estrictamente necesario para atender su consulta. 
                Una vez resuelta, procederemos a su eliminación, salvo que exista una obligación legal de conservación.
              </p>
            </div>
          </motion.div>

          {/* Política de Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="w-6 h-6" />
              <h2 className="text-3xl font-light">Política de Cookies</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Este sitio web utiliza cookies técnicas necesarias para su correcto funcionamiento. 
                Estas cookies son imprescindibles para navegar por la web y utilizar sus funciones.
              </p>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">¿Qué son las cookies?</h3>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita 
                un sitio web. Permiten que el sitio recuerde sus acciones y preferencias durante un período de tiempo.
              </p>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">Cookies que utilizamos</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Cookies técnicas:</strong> Necesarias para la navegación y el buen funcionamiento de nuestra web.</li>
                <li><strong>Cookies de preferencias:</strong> Guardan sus preferencias sobre el consentimiento de cookies.</li>
              </ul>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">Cookies que NO utilizamos</h3>
              <p>
                Este sitio web NO utiliza:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Cookies de análisis o seguimiento</li>
                <li>Cookies publicitarias</li>
                <li>Cookies de terceros para publicidad comportamental</li>
              </ul>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">Gestión de Cookies</h3>
              <p>
                Puede configurar su navegador para rechazar cookies o para que le avise cuando se envíe una cookie. 
                Sin embargo, si desactiva las cookies técnicas, algunas partes del sitio web podrían no funcionar correctamente.
              </p>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">Más Información</h3>
              <p>
                Para cualquier consulta sobre nuestra política de cookies, puede contactarnos en info@dentalux.es.
              </p>
            </div>
          </motion.div>

          {/* Last Update */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Última actualización: Febrero 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}