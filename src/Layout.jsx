import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CookieConsent from '@/components/CookieConsent';
import logo from './assets/img/logo2.png'; 
import logoPie from './assets/img/logopie.png'; 

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', page: 'Home' },
    { name: 'Tratamientos', page: 'Tratamientos' },
    { name: 'Equipo', page: 'Equipo' },
    { name: 'Contacto', page: 'Contacto' }
  ];

  const isActive = (page) => {
    const currentPath = location.pathname;
    if (page === 'Home') return currentPath === '/' || currentPath === '/Home';
    return currentPath === `/${page}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="hidden md:block bg-black text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+34959704020" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Phone className="w-3 h-3" />
              959 70 40 20
            </a>
            <a href="https://wa.me/34959704020?text=Hola!!!%20me%20gustaría%20coger%20cita" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <MessageCircle className="w-3 h-3" />
              WhatsApp
            </a>
            <a href="mailto:info@dentalux.es" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Mail className="w-3 h-3" />
              info@dentalux.es
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/dentaluxclinicadental" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com/dentaluxclinicadental" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header
        className={`fixed top-0 md:top-8 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to={createPageUrl('Home')}
              className="transition-opacity hover:opacity-80"
            >
              <img 
                src={logo}
                alt="DentaLux"
                className="h-12 md:h-14 w-auto"
                style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`text-sm tracking-wider uppercase transition-all duration-300 ${
                    scrolled
                      ? isActive(link.page)
                        ? 'text-black'
                        : 'text-gray-500 hover:text-black'
                      : isActive(link.page)
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.page}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={createPageUrl(link.page)}
                    className={`text-2xl font-light tracking-wider ${
                      isActive(link.page) ? 'text-white' : 'text-white/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-6 mt-8"
              >
                <a href="https://instagram.com/dentaluxclinicadental" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/dentaluxclinicadental" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://wa.me/34959704020?text=Hola!!!%20me%20gustaría%20coger%20cita" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>{children}</main>

      {/* Cookie Consent */}
      <CookieConsent />

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <img 
                src={logoPie}
                alt="DentaLux"
                className="h-12 w-auto mb-4"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <p className="text-gray-500 font-light leading-relaxed max-w-md">
                Clínica dental y estética de referencia en Lucena de Puerto, Huelva. Combinamos tecnología 
                de vanguardia con un equipo de profesionales altamente cualificados.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm tracking-wider uppercase mb-6">Navegación</h4>
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="block text-gray-500 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm tracking-wider uppercase mb-6">Contacto</h4>
              <div className="space-y-3 text-gray-500 text-sm">
                <p>C/ Torre del Loro, 16</p>
                <p>21820 Lucena del Puerto, Huelva</p>
                <a href="tel:+34959704020" className="block hover:text-white transition-colors">959 70 40 20</a>
                <a href="https://wa.me/34959704020?text=Hola!!!%20me%20gustaría%20coger%20cita" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <p>info@dentalux.es</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 DentaLux. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link to={createPageUrl("Privacidad")} className="text-gray-600 hover:text-white transition-colors text-sm">
                Política de Privacidad
              </Link>
              <Link to={createPageUrl("Privacidad")} className="text-gray-600 hover:text-white transition-colors text-sm">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}