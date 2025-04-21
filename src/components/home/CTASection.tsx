
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="bg-construction-secondary text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Construction Project?</h2>
            <p className="text-lg mb-8 text-gray-100">
              Contact Dream Town Developers today to discuss your vision. Our experts will guide you through every step of the construction process.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white text-construction-secondary hover:bg-gray-100">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">
                  Contact Our Team
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:text-right">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" 
              alt="Construction team" 
              className="rounded-lg shadow-lg max-h-[400px] w-full object-cover lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
