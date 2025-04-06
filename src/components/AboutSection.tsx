
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FounderCardProps {
  name: string;
  role: string;
  description: string;
}

const FounderCard: React.FC<FounderCardProps> = ({ name, role, description }) => {
  return (
    <Card className="border-none brand-card-shadow h-full">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm text-xellence-teal mb-4">{role}</p>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-xellence-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Ashes Lifestyle</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A partnership firm founded by visionaries dedicated to creating innovative solutions for modern challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-xellence-navy">Our Story</h3>
            <p className="text-gray-600">
              Ashes Lifestyle was founded as a partnership between Ashwin Sivakumar and Akash Kumar P R, 
              two entrepreneurs with a shared vision of creating technology that enhances everyday experiences.
            </p>
            <p className="text-gray-600">
              Xellence emerged as a subsidiary focused specifically on digital innovation, bringing together 
              a portfolio of brands that solve real-world problems through thoughtful technology solutions.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-xellence-navy">Our Vision</h3>
            <p className="text-gray-600">
              We believe in the power of technology to transform lives and businesses. Our brands are built 
              with a commitment to user-centered design, technical excellence, and meaningful innovation.
            </p>
            <p className="text-gray-600">
              From productivity tools to financial technology and adventure experiences, our diverse portfolio 
              reflects our mission to create products that matter in people's lives.
            </p>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-xellence-navy text-center mb-8">Our Founders</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FounderCard 
            name="Ashwin Sivakumar"
            role="Co-Founder"
            description="A visionary entrepreneur with expertise in product development and strategic planning. Ashwin drives the company's innovation strategy and overall business direction."
          />
          <FounderCard 
            name="Akash Kumar P R"
            role="Co-Founder"
            description="A technical leader with a passion for creating solutions that make a difference. Akash brings deep expertise in technology architecture and implementation."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
