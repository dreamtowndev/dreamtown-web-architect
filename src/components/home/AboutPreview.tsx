
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'Over 15 years of industry experience',
  'Award-winning construction company',
  'Dedicated team of 200+ professionals',
  'Completed 500+ projects across Nepal',
  'Commitment to quality and timely delivery',
  'Sustainable and eco-friendly practices'
];

const AboutPreview: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" 
                alt="Dream Town Developers Team" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-construction-primary text-white p-6 rounded-lg hidden md:block">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm uppercase">Years of Excellence</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Excellence in Nepal Since 2005</h2>
            <p className="text-gray-700 mb-6">
              Dream Town Developers is one of Nepal's leading construction companies, delivering exceptional quality and innovation across residential, commercial, and industrial projects.
            </p>
            <p className="text-gray-700 mb-8">
              Our team of highly skilled professionals brings technical expertise, creative solutions, and a commitment to excellence to every project we undertake. From concept to completion, we ensure quality, safety, and client satisfaction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-construction-secondary mt-0.5 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="btn-primary">
              More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
