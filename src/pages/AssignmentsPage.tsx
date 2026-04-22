import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { courseData } from "../constants";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { FileText, FlaskConical, Rocket, ArrowRight, Calendar } from "lucide-react";

export default function AssignmentsPage() {
  const homeworks = courseData.schedule.filter(item => item.homework);
  const labs = courseData.schedule.filter(item => item.lab);
  const projects = (courseData as any).projects || [];

  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tighter mb-4">
            Tasks & <span className="text-brand-red">Milestones</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            All your practical work in one place. Jump to homework details, lab instructions, or final project milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Homeworks Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b-2 border-black pb-4">
              <FileText className="w-8 h-8 text-brand-red" />
              <h2 className="text-3xl font-black uppercase tracking-tighter">Homeworks</h2>
            </div>
            <div className="space-y-4">
              {homeworks.map((hw, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group"
                >
                  <div className="p-6 bg-white border border-black/5 hover:border-brand-red transition-all neo-brutalism hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-2">
                       <Badge className="bg-brand-black text-white rounded-none text-[10px]">Week {hw.week}</Badge>
                    </div>
                    <h3 className="text-lg font-black mb-4 leading-tight group-hover:text-brand-red transition-colors">
                      {hw.homework}
                    </h3>
                    {(hw as any).homeworkLink ? (
                      (hw as any).homeworkLink.startsWith('http') ? (
                        <a 
                          href={(hw as any).homeworkLink} 
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-red hover:translate-x-1 transition-transform"
                        >
                          VIEW SPECS <ArrowRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <Link 
                          to={(hw as any).homeworkLink} 
                          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-red hover:translate-x-1 transition-transform"
                        >
                          VIEW SPECS <ArrowRight className="w-3 h-3" />
                        </Link>
                      )
                    ) : (
                      <span className="text-[10px] uppercase font-bold text-gray-400">Specs Coming Soon</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Labs Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b-2 border-black pb-4">
              <FlaskConical className="w-8 h-8 text-brand-red" />
              <h2 className="text-3xl font-black uppercase tracking-tighter">Labs</h2>
            </div>
            <div className="space-y-4">
              {labs.map((lab, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group"
                >
                  <div className="p-6 bg-white border border-black/5 hover:border-brand-red transition-all neo-brutalism hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-2">
                       <Badge className="bg-gray-100 text-gray-800 rounded-none text-[10px]">Week {lab.week}</Badge>
                    </div>
                    <h3 className="text-lg font-black mb-4 leading-tight group-hover:text-brand-red transition-colors">
                      {lab.lab}
                    </h3>
                    {(lab as any).labLink ? (
                      (lab as any).labLink.startsWith('http') ? (
                        <a 
                           href={(lab as any).labLink} 
                           target="_blank"
                           rel="noreferrer"
                           className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-red hover:translate-x-1 transition-transform"
                        >
                          LAB MATERIALS <ArrowRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <Link 
                           to={(lab as any).labLink} 
                           className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-red hover:translate-x-1 transition-transform"
                        >
                          LAB MATERIALS <ArrowRight className="w-3 h-3" />
                        </Link>
                      )
                    ) : (
                      <span className="text-[10px] uppercase font-bold text-gray-400">Materials In-Person</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b-2 border-black pb-4">
              <Rocket className="w-8 h-8 text-brand-red" />
              <h2 className="text-3xl font-black uppercase tracking-tighter">Project</h2>
            </div>
            <div className="space-y-4">
              {projects.map((project: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="group"
                >
                  <div className="p-8 bg-brand-black text-white neo-brutalism hover:-translate-y-1 transition-transform">
                    <Badge className="bg-brand-red text-white rounded-none mb-4 uppercase tracking-widest text-[10px]">
                      {project.status}
                    </Badge>
                    <h3 className="text-2xl font-black mb-4 tracking-tighter leading-none group-hover:text-brand-red transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                       <div className="flex items-center gap-2 text-xs font-bold">
                          <Calendar className="w-3 h-3 text-brand-red" />
                          <span>DUE {project.deadline}</span>
                       </div>
                       {project.link.startsWith('http') ? (
                         <a href={project.link} target="_blank" rel="noreferrer" className="ml-auto text-xs font-black uppercase tracking-widest hover:text-brand-red transition-colors underline underline-offset-4 decoration-brand-red">
                           SUBMISSION DETAILS
                         </a>
                       ) : (
                         <Link to={project.link} className="ml-auto text-xs font-black uppercase tracking-widest hover:text-brand-red transition-colors underline underline-offset-4 decoration-brand-red">
                           SUBMISSION DETAILS
                         </Link>
                       )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <div className="p-8 border-2 border-dashed border-black/20 text-center">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">More milestones will be revealed</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
