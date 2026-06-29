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
  location: "San Jose Room 916",
  instructor: {
    name: "Karl Ni",
    slug: "karl-ni",
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
    image: "https://siliconvalley.northeastern.edu/wp-content/uploads/2024/10/Karl-Ni.jpg",
  },
  tagline: "A mix of first principles with heavy doses of software engineering in the project setting. Build and serve modern NLP applications leveraging ML, statistics, LLMs, and agents.",
  quote: "\"Language is the infinite use of finite means.\"\n  — Wilhelm von Humboldt",
  description: "This course in Natural Language Processing (NLP) is a mix of first principles and heavy doses of software engineering. The key objectives are two-fold: (1) teach fundamental concepts of NLP and (2) to provide extensive and practical hands-on modeling experience. Our language modeling curriculum will cover a variety of use cases, including but not limited to sentiment analysis, question / answer, summarization, translation, and more.",
  coreTopics: ["Topic Models", "Word/Sentence Embedding Models", "Deep Attention Models", "Large Language Models (LLMs)"],
  staff: [
    {
       name: "Vineeth Sakhamuru",
       slug: "vineeth-sakhamuru",
       role: "Teaching Assistant",
       officeHours: "TBD",
       image: "/images/vineeth.jpeg",
       linkedin: "https://linkedin.com/",
       github: "https://github.com/"
    },
    {
       name: "Zhengqi Hou",
       slug: "zhengqi-hou",
       role: "Teaching Assistant",
       officeHours: "TBD",
       image: "https://media.licdn.com/dms/image/v2/D5603AQGG2x_GLt4rKA/profile-displayphoto-scale_200_200/B56Z1X54wtKMAY-/0/1775296287826?e=2147483647&v=beta&t=8WRfKxx2c2-XBSmskxn-h2a9Y_kSZKY3P1hr4VVpwSU",
       linkedin: "https://linkedin.com/",
       github: "https://github.com/"
    }
  ],
  announcements: [
    {
      date: "2026-04-18",
      title: "Welcome to class!",
      content: "Natural Language Processing. Looking forward to the semester!"
    }
  ],
  readingGroupSheet: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRUm-_bbk-UPXGobK-eGsSuEN0CcTUBCJ6HSg_T6av24sMT2Wbz7Tl8U9Jr1cyNkP2IWeg8xoLeNCQP/pubhtml?widget=true&amp;headers=false",
  readingGroupSheetDirect: "https://docs.google.com/spreadsheets/d/16UzbPkleajr5yHGeqTyXksXyUPIyQEum2jZKbhIM2U4",
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
