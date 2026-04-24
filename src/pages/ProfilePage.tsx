import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MarkdownSection } from "../components/MarkdownSection";
import { courseData } from "../constants";
import { resolveAssetPath } from "../utils/resolveAssetPath";
import { ArrowLeft, Mail, Github, Linkedin, Globe, MapPin } from "lucide-react";

export default function ProfilePage() {
  const { slug } = useParams();
  
  // Find the person in courseData
  let person: any = null;
  let isInstructor = false;
  
  if (courseData.instructor.slug === slug) {
    person = courseData.instructor;
    isInstructor = true;
  } else {
    person = courseData.staff.find(s => s.slug === slug);
  }

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Profile Not Found</h1>
          <Link to="/" className="text-brand-red font-bold hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/#personnel" className="inline-flex items-center gap-2 text-brand-red font-bold mb-12 hover:translate-x-[-4px] transition-transform group">
            <ArrowLeft className="w-4 h-4" />
            BACK TO TEAM
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Image & Contact */}
            <div className="lg:col-span-4">
              <div className="neo-brutalism bg-white overflow-hidden mb-8">
                <img 
                  src={resolveAssetPath(person.image)} 
                  alt={person.name} 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-black tracking-tighter mb-2">{person.name}</h1>
                  <p className="text-gray-500 font-serif italic text-lg">{isInstructor ? "Lead Instructor" : person.role}</p>
                </div>

                <div className="space-y-3 pt-6 border-t border-black/5">
                  {person.email && (
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-brand-red" />
                      <a href={`mailto:${person.email}`} className="hover:text-brand-red transition-colors">{person.email}</a>
                    </div>
                  )}
                  {person.website && (
                    <div className="flex items-center gap-3 text-sm">
                      <Globe className="w-4 h-4 text-brand-red" />
                      <a href={person.website} target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors">Personal Website</a>
                    </div>
                  )}
                  {person.linkedin && person.linkedin !== "https://linkedin.com/" && (
                    <div className="flex items-center gap-3 text-sm">
                      <Linkedin className="w-4 h-4 text-brand-red" />
                      <a href={person.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors">LinkedIn Profile</a>
                    </div>
                  )}
                  {person.github && person.github !== "https://github.com/" && (
                    <div className="flex items-center gap-3 text-sm">
                      <Github className="w-4 h-4 text-brand-red" />
                      <a href={person.github} target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors">GitHub</a>
                    </div>
                  )}
                </div>

                <div className="p-6 bg-brand-red/5 border-2 border-brand-red/20 neo-brutalism">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-red block mb-2">Primary Contact Hours</span>
                  <p className="text-sm font-bold">{person.officeHours}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Bio */}
            <div className="lg:col-span-8">
              <div className="bg-white p-8 md:p-12 neo-brutalism bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] min-h-[400px]">
                <div className="flex items-center gap-2 text-brand-red font-black uppercase tracking-widest text-xs mb-8">
                  <div className="w-2 h-2 bg-brand-red rounded-full" />
                  <span>Biography & Research</span>
                </div>
                <MarkdownSection contentPath={`/content/personnel/${slug}.md`} />
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
