
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface BrandDetailProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  url: string;
  imageUrl?: string;
}

const BrandDetail: React.FC<BrandDetailProps> = ({ 
  title, 
  description, 
  features, 
  icon, 
  color, 
  url,
  imageUrl = "https://placehold.co/600x400/f8fafc/1e293b?text=" + title
}) => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 flex items-center justify-center rounded-md ${color.replace('bg-', 'text-')}`}>
                {icon}
              </div>
              <h2 className="text-3xl font-bold">{title}</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8">{description}</p>
            
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className={`${color} hover:opacity-90 text-white`}
              onClick={() => {
                window.open(url, '_blank', 'noopener,noreferrer');
                toast({
                  title: `Visiting ${title}`,
                  description: "Opening in a new tab...",
                });
              }}
            >
              Visit {title} <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[300px] md:h-[400px]">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${color.replace('bg-', 'bg-')} opacity-20`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Brands: React.FC = () => {
  const brandsData = [
    {
      title: "Reflect",
      description: "A powerful local storage markdown note-taking app designed to help you organize your thoughts, ideas, and notes in a clean, intuitive interface.",
      features: [
        "Markdown support for rich text formatting",
        "Local storage for privacy and offline access",
        "Tags and categories for easy organization",
        "Distraction-free writing mode",
        "Dark and light themes"
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 3v9l9 9"></path><path d="M3 16a9 9 0 0 0 9 9"></path></svg>,
      color: "bg-teal-500",
      url: "https://reflect.xellence.xyz",
    },
    {
      title: "Goldpay",
      description: "A revolutionary platform that enables users to make day-to-day payments using gold as a secure and stable medium of exchange, protecting your wealth from inflation.",
      features: [
        "Gold-backed digital payments",
        "Protection against currency devaluation",
        "Instant transfers between users",
        "Physical gold redemption option",
        "Detailed transaction history and analytics"
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>,
      color: "bg-amber-500",
      url: "https://preview--goldflow-app.lovable.app",
    },
    {
      title: "BlockVault",
      description: "A decentralized storage system leveraging blockchain technology that allows users to rent out unused storage space and earn passive income while providing secure, distributed storage solutions.",
      features: [
        "Decentralized file storage and sharing",
        "Blockchain-secured encryption",
        "Passive income for storage providers",
        "Pay-as-you-go pricing model",
        "Redundant storage for maximum reliability"
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path><path d="M9 3v18"></path></svg>,
      color: "bg-blue-500",
      url: "https://preview--safefile-vault.lovable.app",
    },
    {
      title: "Blokrite",
      description: "A collaborative note-taking app that fosters teamwork and productivity with real-time syncing, intuitive organization, and powerful sharing capabilities.",
      features: [
        "Real-time collaborative editing",
        "Rich text and markdown support",
        "Comments and discussion threads",
        "Version history and rollback",
        "Advanced permission management"
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>,
      color: "bg-indigo-500",
      url: "https://blokrite.site",
    },
    {
      title: "TheBikersOrg",
      description: "The world's first biker camping organization, uniting motorcycle enthusiasts with thrilling adventures, community-driven experiences, and unforgettable journeys.",
      features: [
        "Community-organized motorcycle camping trips",
        "Route planning and sharing",
        "Equipment recommendations and reviews",
        "Meetups and social events",
        "Safety training and resources"
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>,
      color: "bg-red-500",
      url: "https://preview--biker-camp-connect.lovable.app",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-xellence-gray">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <Link to="/">
                <Button variant="ghost" className="gap-1">
                  <ArrowLeft className="h-4 w-4" /> Back to Home
                </Button>
              </Link>
            </div>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Brand Portfolio</h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Discover our diverse collection of innovative digital products and services, 
                each designed to push boundaries and enhance lives.
              </p>
            </div>
          </div>
        </section>

        {brandsData.map((brand, index) => (
          <BrandDetail
            key={index}
            title={brand.title}
            description={brand.description}
            features={brand.features}
            icon={brand.icon}
            color={brand.color}
            url={brand.url}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Brands;
