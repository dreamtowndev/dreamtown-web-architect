
import React from "react";
import {
  Building,
  Home,
  Ruler,
  Sofa,
  Wrench,
  House,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const services = [
  {
    icon: Building,
    name: "Building Construction",
    description:
      "We bring your vision to life with robust, efficient, and sustainable building construction services. From commercial offices to residential high-rises, our expert team manages every detail with safety and quality at the forefront. Benefit from impeccable project management and leading-edge technology.",
    unique:
      "Dream Town Developers is renowned for delivering on time and within budget, while crafting structures built to last.",
  },
  {
    icon: Home,
    name: "House Renovation",
    description:
      "Transform your home with our comprehensive renovation solutions. Whether it's a kitchen remodel, extension, or full interior overhaul, we upgrade spaces for comfort, beauty, and value. Our process is smooth, with minimal disruption and attention to every detail.",
    unique:
      "Our bespoke approach ensures your renovation reflects your lifestyle and personality.",
  },
  {
    icon: Ruler,
    name: "Architecture Design",
    description:
      "Our talented architects blend creativity with function to design buildings that inspire. We provide innovative concepts, detailed blueprints, and visualizations that communicate potential and elegance.",
    unique:
      "Dream Town Developers sets itself apart with a collaborative process that puts your needs and style at the heart of design.",
  },
  {
    icon: Sofa,
    name: "Interior Design",
    description:
      "Elevate your interiors with our tailor-made design solutions. We consider everything from space planning to the selection of colors, finishes, and furnishings to create harmonious, inviting environments.",
    unique:
      "Our designers are celebrated for creating interiors that are both beautifully functional and uniquely yours.",
  },
  {
    icon: Wrench,
    name: "Fixing & Support",
    description:
      "Maintain the integrity of your investments with our reliable support services. We handle repairs, upgrades, and proactive maintenance for homes and commercial spaces, ensuring long-term performance and peace of mind.",
    unique:
      "Clients trust us for our quick response times, skilled workmanship, and commitment to excellence.",
  },
  {
    icon: House,
    name: "Real Estate Services",
    description:
      "Find your perfect property with the help of our experienced real estate team. We guide you through buying, selling, or leasing processes with transparency and insight into current market trends.",
    unique:
      "Our local expertise and dedication to client satisfaction make property transactions seamless and rewarding.",
  },
];

const Services = () => (
  <>
    <Header />
    <section className="section-padding bg-gray-50 min-h-screen">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dream Town Developers offers a comprehensive suite of services tailored to your construction, renovation, and real estate needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.name} className="animate-fade-in hover:shadow-lg transition-shadow duration-200 bg-white">
              <CardHeader className="flex flex-row items-center space-x-4">
                <service.icon className="h-10 w-10 text-construction-primary flex-shrink-0" />
                <CardTitle className="text-xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">{service.description}</CardDescription>
                <div className="text-construction-secondary text-sm font-semibold">{service.unique}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Services;
