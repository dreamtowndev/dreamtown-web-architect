
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Himalaya Heights Residential Tower',
    category: 'Residential',
    location: 'Kathmandu',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
  },
  {
    id: 2,
    title: 'Everest Business Complex',
    category: 'Commercial',
    location: 'Pokhara',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
  },
  {
    id: 3,
    title: 'Lumbini Gardens Community',
    category: 'Residential',
    location: 'Lumbini',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
  }
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="section-padding bg-construction-primary text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Projects</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Showcasing some of our finest work across Nepal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg cursor-pointer">
              <div className="h-96 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <p className="text-construction-accent font-medium mb-2">
                    {project.category} | {project.location}
                  </p>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <Button variant="link" className="p-0 text-white hover:text-construction-accent">
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-white text-construction-primary hover:bg-gray-100">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
