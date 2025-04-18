
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, MessageCircle, PieChart, Lightbulb, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: MessageCircle, label: "AI Chat", path: "/chat" },
    { icon: PieChart, label: "Investing", path: "/investing" },
    { icon: Lightbulb, label: "Learn", path: "/learn" },
    { icon: BookOpen, label: "Resources", path: "/resources" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card backdrop-blur-xl bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full animated-gradient-bg flex items-center justify-center mr-2">
                <span className="text-lg font-bold">FW</span>
              </div>
              <span className="text-xl font-bold text-gradient">FinanceWhisper</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center space-x-1">
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </div>
                </Link>
              ))}
              <Button className="bg-finance-purple hover:bg-finance-purple/90 text-white" asChild>
                <Link to="/auth">Get Started</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white/80 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden glass-card animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </div>
              </Link>
            ))}
            <Button className="w-full mt-4 bg-finance-purple hover:bg-finance-purple/90 text-white" asChild>
              <Link to="/auth" onClick={() => setIsOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
