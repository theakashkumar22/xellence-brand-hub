
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

interface BrandCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  url: string;
}

const BrandCard: React.FC<BrandCardProps> = ({ title, description, icon, color, url }) => {
  const handleVisit = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
    toast({
      title: `Visiting ${title}`,
      description: "Opening in a new tab...",
      duration: 3000,
    });
  };

  return (
    <Card className="border-none brand-card-shadow overflow-hidden h-full flex flex-col transition-all hover:translate-y-[-5px]">
      <div className={`h-2 ${color}`}></div>
      <CardHeader>
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-xellence-gray mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600 text-base">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="ghost" 
          className="p-0 hover:bg-transparent text-xellence-navy hover:text-xellence-teal group"
          onClick={() => {
            toast({
              title: `About ${title}`,
              description: description,
              duration: 5000,
            });
          }}
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button 
          variant="outline" 
          className="flex items-center gap-1 hover:bg-xellence-navy hover:text-white transition-colors"
          onClick={handleVisit}
        >
          Visit <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const BrandsSection: React.FC = () => {
  const brands = [
    {
      title: "Reflect",
      description: "A local storage markdown note-taking app with powerful functionality for managing your thoughts and ideas.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-xellence-teal"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 3v9l9 9"></path><path d="M3 16a9 9 0 0 0 9 9"></path></svg>,
      color: "bg-teal-500",
      url: "https://reflect.xellence.xyz",
    },
    {
      title: "Goldpay",
      description: "A revolutionary platform that enables users to make day-to-day payments using gold as a secure medium of exchange.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>,
      color: "bg-amber-500",
      url: "https://preview--goldflow-app.lovable.app",
    },
    {
      title: "BlockVault",
      description: "A decentralized storage system allowing users to rent storage space and earn passive income through blockchain technology.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path><path d="M9 3v18"></path></svg>,
      color: "bg-blue-500",
      url: "https://preview--safefile-vault.lovable.app",
    },
    {
      title: "Blokrite",
      description: "A collaborative note-taking app fostering teamwork and productivity with real-time syncing and intuitive organization.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>,
      color: "bg-indigo-500",
      url: "https://blokrite.site",
    },
    {
      title: "TheBikersOrg",
      description: "The world's first biker camping organization, uniting motorcycle enthusiasts with thrilling adventures and experiences.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>,
      color: "bg-red-500",
      url: "https://preview--biker-camp-connect.lovable.app",
    },
  ];

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Innovative Brands</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of cutting-edge products and services, each designed to push boundaries and enhance lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <BrandCard
              key={index}
              title={brand.title}
              description={brand.description}
              icon={brand.icon}
              color={brand.color}
              url={brand.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
