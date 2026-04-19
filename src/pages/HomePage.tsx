import { useEffect } from "react";
import { MarkdownSection } from "../components/MarkdownSection";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Schedule } from "../components/Schedule";
import { Personnel } from "../components/Personnel";
import { Footer } from "../components/Footer";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Handle initial scroll to hash on mount or path change
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly for content to render
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Syllabus / Announcement Section */}
      <section id="syllabus" className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <Badge variant="outline" className="text-brand-red border-brand-red mb-4 px-4 py-1 rounded-none uppercase tracking-widest font-bold">
            Syllabus Summary
          </Badge>
          <MarkdownSection contentPath="/content/syllabus.md" className="mt-8" />
        </div>
        
        <div className="relative">
          <div className="bg-gray-50 p-12 h-full neo-brutalism transform rotate-1">
             <div className="flex justify-between items-center mb-8 border-b border-black/10 pb-4">
               <h3 className="text-2xl font-black uppercase tracking-tighter">Announcements</h3>
               <span className="text-xs font-bold text-brand-red">LIVE FEED</span>
             </div>
             
             <MarkdownSection contentPath="/content/announcements.md" />
             
             <div className="pt-8 text-center mt-8">
               <button className="text-xs font-black uppercase tracking-widest border-b-2 border-black hover:text-brand-red hover:border-brand-red transition-all pb-1">
                 VIEW ALL LOGS
               </button>
             </div>
          </div>
          <div className="absolute top-0 right-0 w-full h-full border border-black/5 -z-10 translate-x-4 translate-y-4" />
        </div>
      </section>

      <Schedule />
      <Personnel />
      <Footer />
    </div>
  );
}
