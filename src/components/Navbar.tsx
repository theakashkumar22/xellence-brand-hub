
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-xellence-navy">Xellence</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#brands">Brands</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <Button 
              className="bg-xellence-navy hover:bg-xellence-lightnavy text-white"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-xellence-navy"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="#brands" onClick={toggleMenu}>Brands</MobileNavLink>
            <MobileNavLink href="#about" onClick={toggleMenu}>About Us</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <Button 
              className="bg-xellence-navy hover:bg-xellence-lightnavy text-white w-full"
              asChild
            >
              <a href="#contact" onClick={toggleMenu}>Get in Touch</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => (
  <a 
    href={href}
    className={cn(
      "text-xellence-navy hover:text-xellence-teal transition-colors font-medium",
      className
    )}
  >
    {children}
  </a>
);

type MobileNavLinkProps = NavLinkProps & {
  onClick?: () => void;
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick, className }) => (
  <a 
    href={href}
    onClick={onClick}
    className={cn(
      "text-xellence-navy hover:text-xellence-teal py-2 font-medium",
      className
    )}
  >
    {children}
  </a>
);

export default Navbar;
