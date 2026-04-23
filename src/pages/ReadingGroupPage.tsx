import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { courseData } from "../constants";
import { Users, ExternalLink, Info } from "lucide-react";

export default function ReadingGroupPage() {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tighter mb-4">
            Reading <span className="text-brand-red">Group</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Students take turns presenting seminal papers and recent breakthroughs in the field. 
            Use the spreadsheet below to sign up for a slot.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Instructions Card */}
          <div className="bg-brand-black text-white p-8 neo-brutalism flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-brand-red font-black uppercase tracking-widest text-xs">
                <Info className="w-4 h-4" />
                <span>Guidelines</span>
              </div>
              <h2 className="text-3xl font-black tracking-tighter leading-none">
                Presenter Sign-up
              </h2>
              <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
                Presentation slots are associated with weekly topics. Please ensure your chosen paper 
                aligns with the week's theme or consult with the instructors for approval of alternative papers.
              </p>
            </div>
            <a 
              href={courseData.readingGroupSheet.replace('pubhtml?widget=true&amp;headers=false', 'edit')} 
              target="_blank" 
              rel="noreferrer"
              className="bg-white text-black px-8 py-4 font-black uppercase tracking-tighter hover:bg-brand-red hover:text-white transition-all neo-brutalism"
            >
              Open in Sheets <ExternalLink className="inline-block ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Spreadsheet Embed */}
          <div className="bg-white neo-brutalism overflow-hidden border-2 border-black min-h-[800px] relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-10 pointer-events-none"></div>
            <iframe 
              src={courseData.readingGroupSheet}
              className="w-full h-[800px] border-none"
              title="Reading Group Sign-up Spreadsheet"
            />
          </div>

          {/* Fallback/Note */}
          <div className="p-8 border-2 border-dashed border-black/20 text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Presentation materials (slides/notes) should be shared with the instructors prior to lecture.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
