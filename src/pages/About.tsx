
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Check, ShieldCheck, Star, Users, Briefcase, Building, History } from 'lucide-react';

const coreValues = [
  { icon: <ShieldCheck className="text-construction-primary w-6 h-6" />, title: "Integrity", desc: "We uphold honesty, transparency, and ethical practices across every project." },
  { icon: <Check className="text-construction-primary w-6 h-6" />, title: "Quality", desc: "Relentless focus on delivering excellence and durable results." },
  { icon: <Star className="text-construction-primary w-6 h-6" />, title: "Innovation", desc: "We embrace new technologies and creative solutions to set benchmarks in construction." },
  { icon: <Users className="text-construction-primary w-6 h-6" />, title: "Teamwork", desc: "Our success is built upon collaboration, respect, and a shared vision." },
  { icon: <Briefcase className="text-construction-primary w-6 h-6" />, title: "Professionalism", desc: "We maintain the highest standards in safety, delivery, and client relations." },
  { icon: <Building className="text-construction-primary w-6 h-6" />, title: "Sustainability", desc: "We prioritize eco-friendly and responsible building practices." },
];

const milestones = [
  { year: "2005", event: "Founded in Kathmandu, Nepal" },
  { year: "2008", event: "Completed 50+ residential & commercial projects" },
  { year: "2013", event: "Received National Best Construction Practice Award" },
  { year: "2017", event: "Crossed 200+ completed projects milestone" },
  { year: "2020", event: "Expanded operations nationwide with 200+ professionals" },
  { year: "2023", event: "Recognized for sustainable and innovative construction leadership" },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        {/* Hero Banner */}
        <section className="bg-construction-primary text-white py-20 relative">
          <div className="container animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dream Town Developers</h1>
            <p className="text-xl max-w-2xl mb-6">
              Building Nepal’s dreams into reality through excellence, innovation, and client trust—since 2005.
            </p>
            <span className="inline-flex items-center bg-construction-secondary px-4 py-2 rounded-full font-semibold mt-2 animate-fade-in">
              Shaping the nation, one project at a time
            </span>
          </div>
        </section>

        {/* Mission, Vision, Core Values */}
        <section className="container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Mission */}
            <div className="p-8 rounded-lg bg-construction-muted shadow-md flex flex-col items-start">
              <ShieldCheck className="w-10 h-10 text-construction-primary mb-4" />
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-construction-dark text-base">
                To deliver exceptional construction solutions—setting the highest standards for quality, safety, and innovation—while exceeding client expectations and building a better Nepal.
              </p>
            </div>
            {/* Vision */}
            <div className="p-8 rounded-lg bg-construction-muted shadow-md flex flex-col items-start">
              <Star className="w-10 h-10 text-construction-primary mb-4" />
              <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
              <p className="text-construction-dark text-base">
                To be Nepal’s most trusted and innovative construction company, leading transformative projects that inspire progress and prosperity for generations.
              </p>
            </div>
            {/* Core Values */}
            <div className="p-8 rounded-lg bg-construction-muted shadow-md flex flex-col items-start">
              <Check className="w-10 h-10 text-construction-primary mb-4" />
              <h2 className="text-2xl font-bold mb-2">Core Values</h2>
              <ul className="text-construction-dark space-y-2 mt-2">
                <li><span className="font-semibold">Integrity</span> • <span>Quality</span> • <span>Innovation</span></li>
                <li><span className="font-semibold">Teamwork</span> • <span>Professionalism</span> • <span>Sustainability</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Timeline / History */}
        <section className="bg-construction-muted py-16">
          <div className="container">
            <div className="mb-12 flex items-center gap-3">
              <History className="text-construction-secondary w-8 h-8" />
              <h2 className="text-3xl font-bold text-construction-primary">Our Journey & Major Milestones</h2>
            </div>
            <div className="relative pl-6 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-1 before:bg-construction-accent/20">
              {milestones.map((m, idx) => (
                <div key={m.year} className="mb-10 flex items-start relative">
                  <div className="flex flex-col items-center mr-4 z-10">
                    <span className="w-6 h-6 bg-construction-accent rounded-full flex items-center justify-center text-white font-bold shadow">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-construction-secondary">{m.year}</h4>
                    <p className="text-construction-dark">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Commitment Section */}
        <section className="container section-padding grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-construction-primary">Our Commitment</h2>
            <p className="text-construction-dark text-lg mb-4">
              At Dream Town Developers, unwavering dedication to quality, safety, and sustainability defines every project. We harness modern construction technologies, maintain industry best practices, and adopt eco-friendly methods to deliver results that last and inspire.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="text-construction-secondary w-5 h-5" />
                Client satisfaction at the heart of every project
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-construction-secondary w-5 h-5" />
                Commitment to timely delivery and cost efficiency
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-construction-secondary w-5 h-5" />
                Continuous workforce training and motivation
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-construction-secondary w-5 h-5" />
                Safe work culture for all stakeholders
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
              alt="Dream Town Developers quality construction"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* Team & Impact */}
        <section className="bg-construction-accent/10 py-16 mt-12">
          <div className="container grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-construction-primary mb-4 flex items-center gap-2">
                <Users className="text-construction-secondary w-8 h-8" /> Meet Our Team
              </h2>
              <p className="text-construction-dark text-lg mb-4">
                Our diverse team—over 200 engineers, architects, designers, and craftsmen—drives our reputation for outstanding outcomes. Their technical expertise, creativity, and shared passion turn visions into reality, delivering projects that uplift communities and redefine Nepal's cityscape.
              </p>
              <ul className="space-y-2 text-construction-dark">
                <li className="flex items-center gap-2">
                  <Briefcase className="text-construction-secondary w-5 h-5" />
                  200+ professionals across disciplines
                </li>
                <li className="flex items-center gap-2">
                  <Building className="text-construction-secondary w-5 h-5" />
                  500+ successful projects—residential, commercial & industrial
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-construction-secondary w-5 h-5" />
                  Recognized for engineering excellence and client-first approach
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-inner animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=800&q=80"
                alt="Dream Town Developers team"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
