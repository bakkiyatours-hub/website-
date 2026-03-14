import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { initScrollReveal } from '../effects/scrollReveal';
import { initParallax } from '../effects/parallax';

export function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    const cleanupReveal = initScrollReveal();
    const cleanupParallax = initParallax();

    return () => {
      cleanupReveal();
      cleanupParallax();
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
