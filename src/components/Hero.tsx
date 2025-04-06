
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-32 bg-xellence-gray overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-xellence-navy/5 to-xellence-teal/5 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Innovating The Future
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Xellence, a subsidiary of Ashes Lifestyle, bringing innovative digital products and experiences to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-xellence-navy hover:bg-xellence-lightnavy text-white px-8 py-6"
              asChild
            >
              <a href="#brands">
                Explore Our Brands
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-xellence-navy text-xellence-navy hover:bg-xellence-navy hover:text-white px-8 py-6"
              asChild
            >
              <a href="#about">Learn About Us</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes for visual interest */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-xellence-teal/10 z-0"></div>
      <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-xellence-navy/5 z-0"></div>
    </section>
  );
};

export default Hero;
