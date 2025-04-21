
import React from "react";
import { Award, FolderOpen, MapPin, Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const completedProjects = [
  {
    name: "Gautam Buddha International Airport",
    location: "Lumbini, Nepal",
    description:
      "A landmark international aviation hub. Dream Town Developers played a pivotal role as a leading contractor in the successful completion of Nepal’s second international airport, elevating regional connectivity.",
    features: [
      "Runway construction meeting ICAO standards",
      "State-of-the-art terminal and control tower",
      "Advanced security & navigation",
      "Completed ahead of schedule with zero safety incidents"
    ],
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80", // river + airport
    highlight: true
  },
  {
    name: "Everest Business Complex",
    location: "Pokhara, Nepal",
    description:
      "A contemporary commercial center with eco-conscious design and premium office spaces catering to multinational corporations.",
    features: [
      "LEED-certified green building",
      "Modern amenities and ample parking",
      "Integrated security & IT infrastructure"
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Himalaya Heights Residential Tower",
    location: "Kathmandu, Nepal",
    description:
      "A premium 18-story residential development offering luxury living, panoramic city views, and community-centric spaces.",
    features: [
      "Earthquake-resistant structure",
      "Smart home integrations",
      "Rooftop gardens and wellness amenities"
    ],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80"
  }
];

const ongoingProjects = [
  {
    name: "Lumbini Gardens Township",
    location: "Lumbini, Nepal",
    description:
      "A sustainable, master-planned community blending eco-homes, green parks, and modern infrastructure – set to redefine urban living.",
    features: [
      "Solar-powered smart homes",
      "Community parks & playgrounds",
      "Eco-friendly water management"
    ],
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Digital Innovation Park",
    location: "Butwal, Nepal",
    description:
      "A hub for IT startups and R&D, designed with collaborative workspaces and cutting-edge digital infrastructure.",
    features: [
      "Fibre optic backbone",
      "Flexible co-working offices",
      "Dedicated event and seminar spaces"
    ],
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&q=80"
  }
];

const SectionTitle = ({ icon: Icon, children } : { icon: React.ElementType, children: React.ReactNode }) => (
  <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-6 gap-2">
    <Icon className="h-7 w-7 text-construction-primary" /> {children}
  </h2>
);

const ProjectCard = ({ project }: { project: typeof completedProjects[0] }) => (
  <Card className={`animate-fade-in hover:shadow-xl transition-shadow duration-200 bg-white border ${project.highlight ? "border-construction-secondary" : ""}`}>
    <CardHeader className="p-0 rounded-t-lg overflow-hidden relative">
      <img src={project.image} alt={project.name} className="w-full h-52 object-cover" />
      {project.highlight && (
        <span className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 bg-construction-secondary text-white text-xs rounded-full font-semibold">
          <Star className="w-3 h-3 mr-1" /> Notable Project
        </span>
      )}
    </CardHeader>
    <CardContent className="p-6">
      <CardTitle className="mb-1 text-xl flex items-center gap-2">
        {project.name}
        {project.highlight && <Award className="text-construction-accent w-5 h-5" />}
      </CardTitle>
      <div className="flex items-center gap-2 text-construction-primary font-medium mb-2">
        <MapPin className="w-4 h-4" /> {project.location}
      </div>
      <div className="mb-3 text-gray-700">{project.description}</div>
      <ul className="mb-2 pl-5 list-disc text-gray-600 text-sm space-y-1">
        {project.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Projects: React.FC = () => (
  <>
    <Header />
    <section className="min-h-screen bg-gray-50 py-12 section-padding">
      <div className="container max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-3">Our Project Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dream Town Developers is proud to showcase a diverse portfolio of landmark projects across Nepal, reflecting our commitment to quality, innovation, and sustainability.
          </p>
        </div>

        {/* Completed Projects */}
        <div className="mb-14">
          <SectionTitle icon={FolderOpen}>Completed Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        {/* Ongoing Projects */}
        <div>
          <SectionTitle icon={Award}>Ongoing Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ongoingProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Projects;
