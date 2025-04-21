
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Careers', path: '/careers' },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-construction-primary">
            Dream Town <span className="text-construction-secondary">Developers</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-construction-dark hover:text-construction-primary font-medium transition-colors",
                location.pathname === item.path && "text-construction-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="btn-primary">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-construction-dark hover:text-construction-primary hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 z-40 bg-white transform transition-transform ease-in-out duration-300',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="text-2xl font-bold text-construction-primary">Dream Town</div>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-construction-dark hover:text-construction-primary"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "py-2 text-lg font-medium text-construction-dark hover:text-construction-primary",
                location.pathname === item.path && "text-construction-primary"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="btn-primary w-full mt-4">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
