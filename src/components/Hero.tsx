import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { courseData } from "@/src/constants";
import { resolveAssetPath } from "@/src/utils/resolveAssetPath";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-gray-50 -z-10" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 text-brand-red font-bold text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-[2px] bg-brand-red" />
            {courseData.university}
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-black leading-[0.9] tracking-tighter mb-6">
            Natural <br />
            Language <br />
            <span className="text-brand-red">Processing</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg mb-8 leading-relaxed">
            {courseData.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/schedule">
              <Button className="bg-black text-white hover:bg-brand-red rounded-none h-12 px-8 font-bold tracking-wide">
                VIEW SCHEDULE
              </Button>
            </Link>
            <Link to="/#syllabus">
              <Button variant="outline" className="border-2 border-black rounded-none h-12 px-8 font-bold tracking-wide hover:bg-black hover:text-white transition-all">
                SYLLABUS
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block mb-2">Location</span>
              <p className="text-sm font-medium flex items-center gap-2">
                <MapPinned className="w-4 h-4 text-brand-red" />
                {courseData.location}
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block mb-2">Schedule</span>
              <p className="text-sm font-medium">{courseData.time}</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="neo-brutalism bg-white p-8 relative z-10">
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono text-4xl font-black">{courseData.code}</span>
              <div className="text-right">
                <span className="text-xs font-bold block">SPRING</span>
                <span className="text-2xl font-black">2026</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-100 italic font-serif text-xl leading-relaxed">
                "{courseData.quote}"
              </div>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img src={resolveAssetPath(courseData.instructor.image)} alt={courseData.instructor.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block uppercase tracking-tighter">Instructor</span>
                    <span className="font-bold">{courseData.instructor.name}</span>
                  </div>
                </div>
                <a href={`mailto:${courseData.instructor.email}`} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Abstract NLP background */}
          <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-brand-red -z-10 opacity-20" />
          <div className="absolute -top-10 -left-10 font-mono text-[10rem] opacity-[0.03] pointer-events-none -z-10 font-black">
            GPT-4
          </div>
        </motion.div>
      </div>
    </section>
  );
}
