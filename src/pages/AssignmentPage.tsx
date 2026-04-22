import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MarkdownSection } from "../components/MarkdownSection";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AssignmentPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <Link to="/schedule" className="inline-flex items-center gap-2 text-brand-red font-bold hover:translate-x-[-4px] transition-transform mb-8 group">
            <ArrowLeft className="w-4 h-4" />
            BACK TO SCHEDULE
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
             <div className="bg-brand-red p-3 text-white">
                <FileText className="w-8 h-8" />
             </div>
             <div>
                <Badge className="bg-brand-black text-white rounded-none mb-1 px-2 py-0.5 uppercase text-[10px]">Assignment</Badge>
                <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tighter uppercase">
                  {id?.toUpperCase()}
                </h1>
             </div>
          </div>

          <div className="flex flex-wrap gap-6 py-6 border-y border-black/10">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-brand-red" />
              <span className="font-bold">Released:</span>
              <span className="text-gray-500">See Schedule</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-brand-red" />
              <span className="font-bold">Due:</span>
              <span className="text-gray-500">Sunday @ 11:59PM</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 neo-brutalism bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]">
          <MarkdownSection contentPath={`/content/assignments/${id}.md`} />
        </div>
        
        <div className="mt-12 p-8 bg-brand-black text-white flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h4 className="text-xl font-black mb-2 uppercase tracking-tighter">Ready to submit?</h4>
            <p className="text-sm text-gray-400">Ensure your repository is tagged and pushed before the deadline.</p>
          </div>
          <a href="https://www.gradescope.com/" target="_blank" rel="noreferrer">
            <button className="bg-brand-red text-white hover:bg-white hover:text-brand-red rounded-none font-bold py-4 px-8 tracking-widest transition-colors">
              SUBMIT ON GRADESCOPE
            </button>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
