import { Calendar, BookOpen, Users, MessageSquare, ExternalLink, Mail, MapPin, Clock } from "lucide-react";
import { scheduleData } from "./schedule";

export const courseData = {
  title: "Natural Language Processing",
  code: "CS 6120",
  university: "Northeastern University",
  college: "Khoury College of Computer Sciences",
  campus: "San Jose, CA",
  crn: "39412",
  time: "Mon 4:00-7:20pm",
  location: "San Jose Room 902/903",
  instructor: {
    name: "Karl Ni",
    email: "k.ni@northeastern.edu",
    officeHours: "Thu 8:30-9:30pm, Teams",
    officeHoursLink: "https://shorturl.at/qecQi",
    website: "http://karllab41.github.io",
    github: "https://github.com/kni-neu",
    instagram: "https://www.instagram.com/karl_el_fun",
    twitter: "https://twitter.com/verykarlovy",
    scholar: "https://scholar.google.com/citations?user=T1w7OIQAAAAJ",
    linkedin: "https://www.linkedin.com/in/karlni/",
    neu: "https://www.khoury.northeastern.edu/people/karl-ni/",
    // Verified working image from Karl's personal site
    image: "http://karllab41.github.io/assets/img/prof_pic.jpg"
  },
  tagline: "A mix of first principles with heavy doses of software engineering in the project setting. Build and serve modern NLP applications leveraging ML, statistics, LLMs, and agents.",
  quote: "\"Language is the infinite use of finite means.\"\n  — Wilhelm von Humboldt",
  description: "This course in Natural Language Processing (NLP) is a mix of first principles and heavy doses of software engineering. The key objectives are two-fold: (1) teach fundamental concepts of NLP and (2) to provide extensive and practical hands-on modeling experience. Our language modeling curriculum will cover a variety of use cases, including but not limited to sentiment analysis, question / answer, summarization, translation, and more.",
  coreTopics: ["Topic Models", "Word/Sentence Embedding Models", "Deep Attention Models", "Large Language Models (LLMs)"],
  staff: [
    {
       name: "Swathi Arasu",
       role: "Head Teaching Assistant",
       officeHours: "Wed 12-2pm, 10th Floor / Zoom",
       image: "https://course.ccs.neu.edu/cs6120s26/assets/img/swathi-tmp.jpeg",
       linkedin: "https://linkedin.com/",
       github: "https://github.com/"
    },
    {
       name: "Alwin Jacob",
       role: "Teaching Assistant",
       officeHours: "Tue 3-5pm, 10th Floor",
       // Note: Inferred path was assets/img/2_alwin.jpg but it resulted in 404. 
       // please replace with working URL from original site
       image: "https://course.ccs.neu.edu/cs6120s26/assets/img/AlwinJacob.jpg",
       linkedin: "https://linkedin.com/",
       github: "https://github.com/"
    },
    {
       name: "Qunnie Yu",
       role: "Teaching Assistant",
       officeHours: "Fri 1-3pm, 10th Floor / Zoom",
       image: "https://course.ccs.neu.edu/cs6120s26/assets/img/qunnie.jpeg",
       linkedin: "https://linkedin.com/",
       github: "https://github.com/"
    },
    {
       name: "Newton",
       role: "Your Friendly Neighborhood Pup",
       officeHours: "Treats and I'll come",
       image: "https://course.ccs.neu.edu/cs6120s26/assets/img/newton.jpg"
    },
    {
       name: "Rosie",
       role: "A dog who loves NLP and naps",
       officeHours: "Non-napping hours",
       image: "https://course.ccs.neu.edu/cs6120s26/assets/img/rosie-cropped.jpg"
    }
  ],
  announcements: [
    {
      date: "2026-04-18",
      title: "Welcome to class!",
      content: "Natural Language Processing. Looking forward to the semester!"
    }
  ],
  schedule: scheduleData,
  projects: [
    {
      title: "Project Proposal",
      description: "Submit a 2-page proposal outlining your chosen NLP application, dataset, and proposed architecture.",
      link: "/assignments/project-proposal",
      deadline: "Week 9",
      status: "Upcoming"
    },
    {
      title: "Final Project: Creative NLP Application",
      description: "Build and serve a functional NLP application using modern techniques (LLMs, RAG, Agents).",
      link: "/assignments/final-project",
      deadline: "Week 12",
      status: "Upcoming"
    }
  ]
};
