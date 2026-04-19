import { motion } from "motion/react";
import { Mail, Github, Globe, Linkedin, MessageSquare, Instagram, Twitter, GraduationCap, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courseData } from "@/src/constants";

export function Personnel() {
  return (
    <section id="personnel" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter mb-4">
            Instructional <span className="text-brand-red">Staff</span>
          </h2>
          <p className="text-gray-500 max-w-xl">
            Meet the team of instructors, TAs, and office companions helping you navigate the world of NLP this semester.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Instructor Card - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-full rounded-none border-2 border-brand-black overflow-hidden group">
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img 
                  src={courseData.instructor.image} 
                  alt={courseData.instructor.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>
              <CardContent className="p-6">
                <Badge className="bg-brand-red mb-3 rounded-none uppercase">Instructor</Badge>
                <h3 className="text-2xl font-black mb-1">{courseData.instructor.name}</h3>
                <p className="text-gray-500 text-sm mb-4 font-serif italic">Machine Learning Engineer & Lecturer</p>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-red" />
                    <span className="font-medium">{courseData.instructor.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-brand-red flex items-center justify-center text-[9px] text-white font-black rounded-none shrink-0 border border-black/10">OH</div>
                    {(courseData.instructor as any).officeHoursLink ? (
                      <a 
                        href={(courseData.instructor as any).officeHoursLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="hover:text-brand-red transition-all underline decoration-brand-red/30 underline-offset-4 font-bold"
                      >
                        {courseData.instructor.officeHours}
                      </a>
                    ) : (
                      <span className="font-bold">{courseData.instructor.officeHours}</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-black/5">
                  <a href={courseData.instructor.website} target="_blank" rel="noreferrer" className="hover:text-brand-red transition-all transform hover:scale-110" title="Personal Website">
                    <Globe className="w-5 h-5" />
                  </a>
                  <a href={(courseData.instructor as any).scholar} target="_blank" rel="noreferrer" className="hover:text-brand-red transition-all transform hover:scale-110" title="Google Scholar">
                    <GraduationCap className="w-5 h-5" />
                  </a>
                  <a href={(courseData.instructor as any).github} target="_blank" rel="noreferrer" className="hover:text-brand-red transition-all transform hover:scale-110" title="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={(courseData.instructor as any).linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-red transition-all transform hover:scale-110" title="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={(courseData.instructor as any).neu} target="_blank" rel="noreferrer" className="hover:text-brand-red transition-all transform hover:scale-110" title="Northeastern Profile">
                    <School className="w-5 h-5" />
                  </a>
                  <a href={(courseData.instructor as any).instagram} target="_blank" rel="noreferrer" className="hover:text-brand-red transition-all transform hover:scale-110" title="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={(courseData.instructor as any).twitter} target="_blank" rel="noreferrer" className="hover:text-brand-red transition-all transform hover:scale-110" title="X (Twitter)">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* TA Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {courseData.staff.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full rounded-none border border-gray-100 bg-gray-50/50 hover:bg-white transition-colors duration-300">
                  <CardContent className="p-6 flex gap-6 items-start">
                    <div className="w-20 h-20 shrink-0 bg-gray-200 rounded-none border border-black/10 overflow-hidden">
                      <img 
                        src={person.image} 
                        alt={person.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-black text-lg mb-1 leading-tight">{person.name}</h4>
                      <p className="text-xs text-brand-red uppercase font-bold tracking-widest mb-3">{person.role}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-4 h-4 bg-brand-red flex items-center justify-center text-[7px] text-white font-black rounded-none shrink-0">OH</div>
                        <span className="font-bold">{person.officeHours}</span>
                      </div>
                      <div className="flex gap-3 mt-3 pt-3 border-t border-black/5">
                        <a href={(person as any).github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-red transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                        <a href={(person as any).linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-red transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
