import { motion } from "motion/react";
import { Mail, Github, Globe, Linkedin, MessageSquare, Instagram, Twitter, GraduationCap, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courseData } from "@/src/constants";
import { Link } from "react-router-dom";
import { resolveAssetPath } from "@/src/utils/resolveAssetPath";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {/* Instructor Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="flex flex-col w-full rounded-none border-2 border-black overflow-hidden group">
              <Link to={`/personnel/${courseData.instructor.slug}`} className="block aspect-[4/5] bg-gray-100 relative overflow-hidden">
                <img 
                  src={resolveAssetPath(courseData.instructor.image)} 
                  alt={courseData.instructor.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <CardContent className="p-4 flex flex-col flex-grow">
                <Badge className="bg-brand-red mb-2 rounded-none uppercase text-[9px] w-fit">Instructor</Badge>
                <Link to={`/personnel/${courseData.instructor.slug}`} className="block hover:text-brand-red transition-colors">
                  <h3 className="text-base font-black leading-tight mb-1">{courseData.instructor.name}</h3>
                </Link>
                <p className="text-gray-500 text-[9px] mb-4 font-serif italic">Lead Instructor</p>
                
                <div className="space-y-2 mt-auto pt-4 border-t border-black/5 text-[10px]">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3 text-brand-red shrink-0" />
                    <span className="truncate">{courseData.instructor.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-black flex items-center justify-center text-[7px] text-white font-black rounded-none shrink-0">OH</div>
                    <a href={courseData.instructor.officeHoursLink} target="_blank" rel="noreferrer" className="font-bold truncate hover:text-brand-red transition-colors decoration-brand-red/30 underline decoration-dotted">
                      {courseData.instructor.officeHours}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* TA Cards */}
          {courseData.staff.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.05 }}
              className="flex"
            >
              <Card className="flex flex-col w-full rounded-none border border-gray-100 hover:border-black/20 transition-all overflow-hidden group">
                <Link to={`/personnel/${(person as any).slug}`} className="block aspect-[4/5] bg-gray-50 relative overflow-hidden">
                  <img 
                    src={resolveAssetPath(person.image)} 
                    alt={person.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <CardContent className="p-4 flex flex-col flex-grow">
                  <Badge className="bg-gray-200 text-gray-700 mb-2 rounded-none uppercase text-[9px] w-fit">Staff</Badge>
                  <Link to={`/personnel/${(person as any).slug}`} className="block hover:text-brand-red transition-colors">
                    <h4 className="text-base font-black leading-tight mb-1">{person.name}</h4>
                  </Link>
                  <p className="text-gray-400 text-[9px] mb-4 font-serif italic truncate">{person.role}</p>
                  
                  <div className="space-y-2 mt-auto pt-4 border-t border-black/5 text-[10px]">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-brand-red flex items-center justify-center text-[7px] text-white font-black rounded-none shrink-0">OH</div>
                      <span className="font-bold truncate">{person.officeHours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
