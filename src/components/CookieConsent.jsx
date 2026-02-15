import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-black text-white shadow-2xl border border-white/10">
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Cookie className="w-6 h-6 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-2">Aviso de Cookies</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Este sitio web utiliza cookies técnicas necesarias para el correcto funcionamiento de la web. 
                    No utilizamos cookies de seguimiento ni almacenamos datos personales. 
                    Para más información, consulta nuestra{' '}
                    <Link 
                      to={createPageUrl('Privacidad')} 
                      className="text-white underline hover:text-gray-300"
                      onClick={() => setShowBanner(false)}
                    >
                      Política de Privacidad
                    </Link>.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={acceptCookies}
                      className="bg-white text-black hover:bg-gray-100 rounded-none"
                    >
                      Aceptar
                    </Button>
                    <Button
                      onClick={rejectCookies}
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 rounded-none"
                    >
                      Rechazar
                    </Button>
                  </div>
                </div>
                <button
                  onClick={rejectCookies}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}