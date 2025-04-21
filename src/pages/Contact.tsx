
import React, { useRef } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Temporary Mapbox map (see instructions below component)
const OfficeMap = () => {
  const mapboxContainer = useRef<HTMLIFrameElement>(null);

  // This iframe is a stand-in; for a real Mapbox experience you should add your own Mapbox public token.
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <iframe
        ref={mapboxContainer}
        title="Office Location Map"
        className="w-full h-64 border-0"
        // Updated to Pepsicola Kathmandu location approximate bounding box for map embed
        src="https://www.openstreetmap.org/export/embed.html?bbox=85.312%2C27.7165%2C85.326%2C27.7265&amp;layer=mapnik&amp;marker=27.7215,85.319"
        allowFullScreen={true}
      />
    </div>
  );
};

const Contact = () => {
  // Basic local form handling (no backend)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for contacting Dream Town Developers! We'll get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-50 section-padding flex flex-col gap-12">
        <div className="container max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Reach out to Dream Town Developers for project inquiries, consultation, or partnership opportunities.
              Our team is ready to assist you—let's build something great together!
            </p>
          </div>

          {/* CONTACT INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 bg-white rounded-xl shadow-md p-8">
            <div className="flex flex-col gap-8 justify-center">
              <div className="flex items-start gap-4">
                <MapPin className="text-construction-accent w-7 h-7 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Office Address</span>
                  <p className="text-gray-700">Pepsicola, Kathmandu</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-construction-accent w-6 h-6" />
                <div>
                  <span className="font-semibold text-gray-900">Phone</span>
                  <p className="text-gray-700">+977 9851011574</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-construction-accent w-6 h-6" />
                <div>
                  <span className="font-semibold text-gray-900">Email</span>
                  <p className="text-gray-700">info@dreamtowndevelopers.com.np</p>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <Card className="shadow-md p-6">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <label className="font-medium text-gray-900" htmlFor="name">Name</label>
                <Input id="name" name="name" type="text" required placeholder="Your Name" />
                
                <label className="font-medium text-gray-900" htmlFor="email">Email</label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />

                <label className="font-medium text-gray-900" htmlFor="message">Message</label>
                <Textarea id="message" name="message" required rows={4} placeholder="How can we help you?" />

                <Button type="submit" className="mt-2" variant="default">
                  <Send className="mr-2" /> Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Location</h2>
          {/* Embedded Map */}
          <OfficeMap />
          <div className="mt-2 text-center text-sm text-gray-500">
            <span>
              <strong>Note:</strong> For a custom interactive map, connect Mapbox or Google Maps using your API key.
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
