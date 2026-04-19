import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, ArrowRight } from "lucide-react";
import { MarkdownSection } from "./MarkdownSection";
import { Link } from "react-router-dom";

export function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <Badge variant="outline" className="text-brand-red border-brand-red mb-4 px-4 py-1 rounded-none uppercase tracking-widest font-bold">
              Course Roadmap
            </Badge>
            <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter">
              The <span className="text-gray-400">Curriculum</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 items-start md:items-end">
            <div className="max-w-md text-gray-400 text-sm leading-relaxed md:text-right">
              Our curriculum is designed to move from traditional linguistic foundations to state-of-the-art transformer architectures and deployment strategies.
            </div>
            <Link to="/schedule">
              <Button className="bg-brand-red text-white hover:bg-white hover:text-brand-red rounded-none font-bold py-6 px-8 tracking-widest group">
                VIEW DETAILED ROADMAP
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 bg-white/5 p-8 border border-white/10">
            <MarkdownSection contentPath="/content/schedule.md" className="markdown-body dark" />
          </div>
          
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-brand-red p-8 text-white relative overflow-hidden group">
               <h3 className="text-2xl font-black mb-4 relative z-10">GCP Credits</h3>
               <p className="text-sm opacity-90 mb-6 relative z-10">
                 Through a generous grant from Google, students have access to cloud computing credits for training and inference.
               </p>
               <Button variant="outline" className="bg-transparent border-white text-white rounded-none hover:bg-white hover:text-brand-red w-full font-bold relative z-10">
                 REDEEM CREDITS
               </Button>
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                 <ExternalLink className="w-24 h-24" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
