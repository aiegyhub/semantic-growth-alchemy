
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingContactButtons />
      <FloatingOffersButton />
    </div>
  );
}
