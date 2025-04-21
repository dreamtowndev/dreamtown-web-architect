
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Construction3D from './Construction3D';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-construction-dark text-white">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80')",
          backgroundPosition: "center 25%"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content container */}
      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 md:py-16 lg:py-20">
          {/* Text content */}
          <div className="flex flex-col justify-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building Dreams Into <span className="text-construction-accent">Reality</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Nepal's premier construction company with over 15 years of excellence in delivering high-quality residential, commercial, and industrial projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="btn-accent">
                <Link to="/projects">
                  Explore Our Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild className="bg-white text-construction-dark hover:bg-gray-100">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          
          {/* 3D Model */}
          <div className="w-full h-[400px] lg:h-[600px] animate-fade-in">
            <Construction3D />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
