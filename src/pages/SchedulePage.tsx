import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { courseData } from "../constants";
import { ArrowLeft, BookOpen, FlaskConical, PenTool, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { resolveAssetPath } from "../utils/resolveAssetPath";

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
          {courseData.schedule.map((weekItem: any, idx) => {
            const week = weekItem; // Use a more flexible type for iteration
            return (
              <motion.div 
                key={week.week + (week.date || idx)}
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
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-brand-black text-white rounded-none px-3 py-1 uppercase tracking-tighter text-[10px]">
                      Week {week.week}
                    </Badge>
                    {week.date && (
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                        {week.date} 
                        {week.videoLink && (
                          <a href={week.videoLink} target="_blank" rel="noreferrer" className="text-brand-red ml-2 hover:underline transition-all">
                            (video)
                          </a>
                        )}
                        {week.slidesLink && (
                          <a href={week.slidesLink} target="_blank" rel="noreferrer" className="text-brand-red ml-2 hover:underline transition-all">
                            (slides)
                          </a>
                        )}
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl font-black tracking-tight leading-tight mb-4">
                    {week.topic}
                  </h3>
                  
                  {week.description && (
                    <div className="text-sm text-gray-600 leading-relaxed mb-6 italic border-l-2 border-brand-red/20 pl-4">
                      {week.description}
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Lecturing Topics */}
                    {week.lecturingTopics && week.lecturingTopics.length > 0 && (
                      <div className="space-y-2">
                         <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block">Lecturing Topics</span>
                         <ul className="space-y-1">
                           {week.lecturingTopics.map((topic, i) => (
                             <li key={i} className="text-xs font-medium flex gap-2">
                               <span className="text-brand-red">■</span> {topic}
                             </li>
                           ))}
                         </ul>
                      </div>
                    )}

                    {/* Single Application */}
                    {week.application && (
                      <div className="text-xs font-bold flex gap-1">
                        <span className="text-brand-red shrink-0 font-black">○</span>
                        <span><span className="text-brand-red">Application</span> - <span className="font-medium text-gray-600">{week.application}</span></span>
                      </div>
                    )}

                    {/* Original Applications List (Fallback) */}
                    {(!week.application && week.applications && week.applications.length > 0) && (
                      <div className="space-y-2">
                         <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block">Applications Overview</span>
                         <ul className="space-y-1">
                           {week.applications.map((app, i) => (
                             <li key={i} className="text-xs font-medium flex gap-2">
                               <span className="text-brand-red">■</span> {app}
                             </li>
                           ))}
                         </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Detailed Activities */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Submissions */}
                  {(week.lab || week.homework || (week.labs && week.labs.length > 0)) && (
                    <div className="space-y-6">
                      <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block mb-[-8px]">Submissions</span>
                      <div className="space-y-4 pt-4 border-t border-black/5">
                        {/* Multiple Labs Handling */}
                        {(() => {
                          const allLabs = [];
                          if (week.lab) allLabs.push({ title: week.lab, link: week.labLink });
                          if (week.labs) allLabs.push(...week.labs);
                          
                          return allLabs.map((labItem, lIdx) => (
                            <div key={lIdx} className="flex gap-3">
                              <FlaskConical className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                              <div>
                                <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block mb-1">Laboratory</span>
                                {labItem.link ? (
                                  labItem.link.startsWith('http') ? (
                                    <a href={labItem.link} target="_blank" rel="noreferrer" className="text-sm font-bold text-brand-red hover:underline decoration-2 underline-offset-4 decoration-current transition-all leading-tight block">
                                      {labItem.title}
                                    </a>
                                  ) : (
                                    <a 
                                      href={resolveAssetPath(labItem.link)} 
                                      target="_blank" 
                                      rel="noreferrer" 
                                      className="text-sm font-bold text-brand-red hover:underline decoration-2 underline-offset-4 decoration-current transition-all leading-tight block"
                                    >
                                      {labItem.title}
                                    </a>
                                  )
                                ) : (
                                  <p className="text-sm font-bold leading-tight">{labItem.title}</p>
                                )}
                              </div>
                            </div>
                          ));
                        })()}

                        {week.homework && (
                          <div className="flex gap-3">
                            <PenTool className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                            <div>
                              <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block mb-1">Homework</span>
                              {week.homeworkLink ? (
                                week.homeworkLink.startsWith('http') || week.homeworkLink.endsWith('.pdf') ? (
                                  <a 
                                    href={week.homeworkLink.startsWith('http') ? week.homeworkLink : resolveAssetPath(week.homeworkLink)} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="text-sm font-bold text-brand-red hover:underline decoration-2 underline-offset-4 decoration-current transition-all leading-tight block"
                                  >
                                    {week.homework}
                                  </a>
                                ) : (
                                  <Link to={week.homeworkLink} className="text-sm font-bold text-brand-red hover:underline decoration-2 underline-offset-4 decoration-current transition-all leading-tight block">
                                    {week.homework}
                                  </Link>
                                )
                              ) : (
                                <p className="text-sm font-bold leading-tight">{week.homework}</p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Reading Column */}
                  {(week.readingGroup || week.reading) && (
                    <div className="space-y-6">
                      <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block mb-[-8px]">Reading</span>
                      <div className="space-y-4 pt-4 border-t border-black/5">
                        {week.readingGroup && (
                          <div className="flex gap-3">
                            <Users className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                            <div>
                              <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block mb-1">Reading Group</span>
                              {week.readingGroupLink ? (
                                <a href={week.readingGroupLink} target="_blank" rel="noreferrer" className="text-sm font-bold text-brand-red hover:underline decoration-2 underline-offset-4 decoration-current transition-all leading-tight block">
                                  {week.readingGroup}
                                </a>
                              ) : (
                                <p className="text-sm font-bold leading-tight">{week.readingGroup}</p>
                              )}
                            </div>
                          </div>
                        )}
                        {week.reading && (
                          <div className="flex gap-3">
                            <BookOpen className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                            <div>
                              <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block mb-1">Assigned Reading</span>
                              {week.readingLink ? (
                                <a href={week.readingLink} target="_blank" rel="noreferrer" className="text-sm font-bold text-brand-red hover:underline decoration-2 underline-offset-4 decoration-current transition-all leading-tight block italic">
                                  {week.reading}
                                </a>
                              ) : (
                                <p className="text-sm font-bold italic leading-tight">{week.reading}</p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      </main>

      <Footer />
    </div>
  );
}
