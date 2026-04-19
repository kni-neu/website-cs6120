import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { courseData } from "../constants";
import { ArrowLeft, BookOpen, FlaskConical, PenTool, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-red font-bold hover:translate-x-[-4px] transition-transform mb-8 group">
            <ArrowLeft className="w-4 h-4" />
            BACK TO HOME
          </Link>
          
          <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tighter mb-4">
            The Detailed <span className="text-brand-red">Roadmap</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            A comprehensive breakdown of weekly topics, hands-on labs, engineering homeworks, and reading group discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {courseData.schedule.map((week, idx) => (
            <motion.div 
              key={week.week}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 border-t-2 border-black pt-8 gap-8 group-hover:bg-brand-red/5 transition-colors p-6 -m-6">
                {/* Week Number */}
                <div className="lg:col-span-1">
                  <span className="text-4xl font-black font-mono opacity-20">
                    {week.week.toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Main Topic */}
                <div className="lg:col-span-4">
                  <Badge className="bg-brand-black text-white rounded-none mb-3 px-3 py-1 uppercase tracking-tighter text-[10px]">
                    Week {week.week}
                  </Badge>
                  <h3 className="text-3xl font-black tracking-tight leading-tight">
                    {week.topic}
                  </h3>
                </div>

                {/* Detailed Activities */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Lab & Homework */}
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <FlaskConical className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                      <div>
                        <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block mb-1">Weekly Lab</span>
                        {week.labLink ? (
                          week.labLink.startsWith('http') ? (
                            <a href={week.labLink} target="_blank" rel="noreferrer" className="text-sm font-bold text-brand-red hover:underline decoration-2 underline-offset-4 decoration-current transition-all">
                              {week.lab}
                            </a>
                          ) : (
                            <Link to={week.labLink} className="text-sm font-bold text-brand-red hover:underline decoration-2 underline-offset-4 decoration-current transition-all">
                              {week.lab}
                            </Link>
                          )
                        ) : (
                          <p className="text-sm font-bold">{week.lab}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <PenTool className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                      <div>
                        <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block mb-1">Homework</span>
                        {week.homeworkLink ? (
                          week.homeworkLink.startsWith('http') ? (
                            <a href={week.homeworkLink} target="_blank" rel="noreferrer" className="text-sm font-bold text-brand-red hover:underline decoration-2 underline-offset-4 decoration-current transition-all">
                              {week.homework}
                            </a>
                          ) : (
                            <Link to={week.homeworkLink} className="text-sm font-bold text-brand-red hover:underline decoration-2 underline-offset-4 decoration-current transition-all">
                              {week.homework}
                            </Link>
                          )
                        ) : (
                          <p className="text-sm font-bold">{week.homework}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Reading Group & Readings */}
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Users className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                      <div>
                        <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block mb-1">Reading Group</span>
                        <p className="text-sm font-bold">{week.readingGroup}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <BookOpen className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                      <div>
                        <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block mb-1">Assigned Reading</span>
                        <p className="text-sm font-bold italic">{week.reading}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
