
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 sm:py-32 bg-xellence-gray overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-xellence-navy/5 to-xellence-teal/5 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-xellence-teal/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-xellence-navy/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/5 w-24 h-24 bg-xellence-teal/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Innovating The Future
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Xellence, a subsidiary of Ashes Lifestyle, bringing innovative digital products and experiences to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="bg-xellence-navy hover:bg-xellence-lightnavy text-white px-8 py-6 group"
              onClick={() => scrollToSection('brands')}
            >
              Explore Our Brands
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              className="border-xellence-navy text-xellence-navy hover:bg-xellence-navy hover:text-white px-8 py-6 transition-colors"
              onClick={() => scrollToSection('about')}
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('brands')}>
        <ChevronDown className="w-8 h-8 text-xellence-navy opacity-70" />
      </div>
      
      {/* Abstract shapes for visual interest */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-xellence-teal/10 z-0"></div>
      <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-xellence-navy/5 z-0"></div>
    </section>
  );
};

export default Hero;
