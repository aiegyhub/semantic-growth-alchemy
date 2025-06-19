
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingContactButtons from './FloatingContactButtons';
import FloatingOffersButton from './FloatingOffersButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <Header />
      <main className="flex-1 relative">
        {children}
      </main>
      <Footer />
      <FloatingContactButtons />
      <FloatingOffersButton />
    </div>
  );
}
