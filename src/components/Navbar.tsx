import { motion, useScroll } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, BookOpen, Clock, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Syllabus", href: "/#syllabus" },
    { label: "Schedule", href: "/schedule" },
    { label: "Assignments", href: "/assignments" },
    { label: "Personnel", href: "/#personnel" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? "glass py-2" : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-red w-8 h-8 rounded-sm flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">N</div>
            <span className="font-bold tracking-tight text-xl hidden sm:block">CS 6120</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={handleLinkClick}
                className="text-sm font-medium hover:text-brand-red transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2">
              <a href="https://cloud.google.com/edu" target="_blank" rel="noreferrer">
                <Button variant="outline" className="text-[10px] sm:text-xs uppercase tracking-widest font-bold border-2 border-black hover:bg-black hover:text-white rounded-none px-3 sm:px-4 transition-colors">
                  GCP
                </Button>
              </a>
              <a href="https://rc.northeastern.edu/courses-on-explorer/" target="_blank" rel="noreferrer">
                <Button variant="outline" className="text-[10px] sm:text-xs uppercase tracking-widest font-bold border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white rounded-none px-3 sm:px-4 transition-colors">
                  HPC
                </Button>
              </a>
            </div>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-2xl font-black italic tracking-tighter hover:text-brand-red transition-colors"
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <a href="https://cloud.google.com/edu" target="_blank" rel="noreferrer">
              <Button className="w-full bg-black text-white rounded-none h-14 font-black tracking-tighter text-lg italic">
                GCP
              </Button>
            </a>
            <a href="https://rc.northeastern.edu/courses-on-explorer/" target="_blank" rel="noreferrer">
              <Button className="w-full bg-brand-red text-white rounded-none h-14 font-black tracking-tighter text-lg italic">
                HPC
              </Button>
            </a>
          </div>
          <p className="text-[10px] text-center font-bold text-gray-400 uppercase tracking-widest">Select Compute Provider</p>
        </div>
      </motion.div>
    </>
  );
}
