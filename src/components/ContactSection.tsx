
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our brands or interested in collaboration? Reach out to us!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                    <Input 
                      id="name" 
                      placeholder="Your Name" 
                      required 
                      className="border-gray-300 focus:border-xellence-teal focus:ring-xellence-teal"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      className="border-gray-300 focus:border-xellence-teal focus:ring-xellence-teal"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    required 
                    className="border-gray-300 focus:border-xellence-teal focus:ring-xellence-teal"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    rows={5} 
                    required 
                    className="border-gray-300 focus:border-xellence-teal focus:ring-xellence-teal"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-xellence-navy hover:bg-xellence-lightnavy text-white py-6"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
