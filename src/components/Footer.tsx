
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-xellence-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Xellence</h3>
            <p className="text-gray-300">
              A subsidiary of Ashes Lifestyle, bringing innovative digital solutions to life.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Brands</h4>
            <ul className="space-y-2">
              <li><a href="https://reflect.xellence.xyz" className="text-gray-300 hover:text-xellence-teal transition-colors">Reflect</a></li>
              <li><a href="https://preview--goldflow-app.lovable.app" className="text-gray-300 hover:text-xellence-teal transition-colors">Goldpay</a></li>
              <li><a href="https://preview--vaultify-cloud.lovable.app/" className="text-gray-300 hover:text-xellence-teal transition-colors">BlockVault</a></li>
              <li><a href="https://blokrite.site" className="text-gray-300 hover:text-xellence-teal transition-colors">Blokrite</a></li>
              <li><a href="https://preview--biker-camp-connect.lovable.app/" className="text-gray-300 hover:text-xellence-teal transition-colors">TheBikersOrg</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-xellence-teal transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-xellence-teal transition-colors">About Us</a></li>
              <li><a href="#brands" className="text-gray-300 hover:text-xellence-teal transition-colors">Our Brands</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-xellence-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Ashes Lifestyle</li>
              <li className="text-gray-300">info@xellence.xyz</li>
              <li className="text-gray-300">+91 956 663 2725</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Xellence. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-xellence-teal transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-xellence-teal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
