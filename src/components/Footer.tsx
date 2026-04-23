import { courseData } from "@/src/constants";
import { Mail, MapPin, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-brand-red w-8 h-8 rounded-sm flex items-center justify-center text-white font-bold text-lg">N</div>
            <span className="font-bold tracking-tight text-xl uppercase">{courseData.code}</span>
          </div>
          <p className="text-gray-500 max-w-sm text-sm mb-8 leading-relaxed">
            Northeastern University's course on Natural Language Processing. 
            Focusing on the intersection of linguistic theory and modern machine learning scale.
          </p>
          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
               <Mail className="w-4 h-4" />
             </div>
             <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
               <Globe className="w-4 h-4" />
             </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-black uppercase tracking-widest text-xs mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/" onClick={(e) => handleLinkClick(e, "/#home")} className="hover:text-brand-red transition-colors">Home</Link></li>
            <li><Link to="/#syllabus" onClick={(e) => handleLinkClick(e, "/#syllabus")} className="hover:text-brand-red transition-colors">Syllabus</Link></li>
            <li><Link to="/schedule" className="hover:text-brand-red transition-colors">Schedule</Link></li>
            <li><Link to="/assignments" className="hover:text-brand-red transition-colors">Assignments</Link></li>
            <li><Link to="/reading-group" className="hover:text-brand-red transition-colors">Reading Group</Link></li>
            <li><Link to="/#personnel" onClick={(e) => handleLinkClick(e, "/#personnel")} className="hover:text-brand-red transition-colors">Personnel</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-black uppercase tracking-widest text-xs mb-6">Connect</h4>
          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-brand-red shrink-0" />
              <span className="text-gray-500">{courseData.location}<br/>{courseData.campus}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-red shrink-0" />
              <span className="text-gray-500">{courseData.instructor.email}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
        <div>© 2026 Northeastern University</div>
        <div className="flex gap-8">
           <span className="hover:text-brand-red cursor-pointer">Privacy Policy</span>
           <span className="hover:text-brand-red cursor-pointer">Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
