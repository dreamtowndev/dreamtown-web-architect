
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-construction-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Dream Town <span className="text-construction-accent">Developers</span></h3>
            <p className="mb-6 text-gray-300">
              Building dreams into reality since 2005. Quality construction services across Nepal.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-construction-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-construction-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-construction-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-construction-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-construction-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-construction-accent transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-construction-accent transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-construction-accent transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-construction-accent transition-colors">Careers</Link></li>
              <li><Link to="/faqs" className="text-gray-300 hover:text-construction-accent transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/residential" className="text-gray-300 hover:text-construction-accent transition-colors">Residential Construction</Link></li>
              <li><Link to="/services/commercial" className="text-gray-300 hover:text-construction-accent transition-colors">Commercial Buildings</Link></li>
              <li><Link to="/services/renovation" className="text-gray-300 hover:text-construction-accent transition-colors">Renovation & Remodeling</Link></li>
              <li><Link to="/services/interior" className="text-gray-300 hover:text-construction-accent transition-colors">Interior Design</Link></li>
              <li><Link to="/services/architecture" className="text-gray-300 hover:text-construction-accent transition-colors">Architecture Planning</Link></li>
              <li><Link to="/services/consultation" className="text-gray-300 hover:text-construction-accent transition-colors">Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-construction-accent" />
                <span>Pepsicola, Kathmandu</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-construction-accent" />
                <span>+977 9851011574</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-construction-accent" />
                <span>info@dreamtowndevelopers.com.np</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Dream Town Developers. All rights reserved.</p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-construction-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-construction-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
