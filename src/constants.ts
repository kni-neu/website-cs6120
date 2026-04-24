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
    // Verified working image from Karl's personal site
    image: "http://karllab41.github.io/assets/img/prof_pic.jpg"
  },
  tagline: "A mix of first principles with heavy doses of software engineering in the project setting. Build and serve modern NLP applications leveraging ML, statistics, LLMs, and agents.",
  quote: "\"Language is the infinite use of finite means.\"\n  — Wilhelm von Humboldt",
  description: "This course in Natural Language Processing (NLP) is a mix of first principles and heavy doses of software engineering. The key objectives are two-fold: (1) teach fundamental concepts of NLP and (2) to provide extensive and practical hands-on modeling experience. Our language modeling curriculum will cover a variety of use cases, including but not limited to sentiment analysis, question / answer, summarization, translation, and more.",
  coreTopics: ["Topic Models", "Word/Sentence Embedding Models", "Deep Attention Models", "Large Language Models (LLMs)"],
  staff: [
    {
       name: "Sherwin Vahidimowlavi",
       slug: "sherwin-vahidimowlavi",
       role: "Head Teaching Assistant",
       officeHours: "Wed 12-2pm, 10th Floor / Zoom",
       image: "https://media.licdn.com/dms/image/v2/C4E03AQHMKyVfrlj-HQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516537039088?e=1778716800&v=beta&t=OM0E6eTO-0_7sogryKt5VZwYXLVsu4lzh-f0FAPPm0I",
       linkedin: "https://linkedin.com/",
       github: "https://github.com/"
    },
    {
       name: "Yue Liang",
       slug: "yue-liang",
       role: "Teaching Assistant",
       officeHours: "Tue 3-5pm, 10th Floor",
       // Note: Inferred path was assets/img/2_alwin.jpg but it resulted in 404. 
       // please replace with working URL from original site
       image: "https://media.licdn.com/dms/image/v2/D4E03AQF1ASVp312eiQ/profile-displayphoto-crop_800_800/B4EZqP4SxQIwAI-/0/1763350490959?e=1778716800&v=beta&t=FFVHKuOjgegEWkuulY_FzdbWD9jIa88C3SHOVFjJob0",
       linkedin: "https://linkedin.com/",
       github: "https://github.com/"
    },
    {
       name: "Yu-Chang Shih",
       slug: "yu-chang-shih",
       role: "Teaching Assistant",
       officeHours: "Fri 1-3pm, 10th Floor / Zoom",
       image: "https://media.licdn.com/dms/image/v2/C4D03AQG5dqU4C51Ucg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1649728546165?e=2147483647&v=beta&t=cuXobBQV5JOielSga19QrMX5ig1dyEgyu32ASzcTfe4",
       linkedin: "https://linkedin.com/",
       github: "https://github.com/"
    },
    // {
    //    name: "Newton",
    //    role: "Your Friendly Neighborhood Pup",
    //    officeHours: "Treats and I'll come",
    //    image: "https://course.ccs.neu.edu/cs6120s26/assets/img/newton.jpg"
    // },
    // {
    //    name: "Rosie",
    //    role: "A dog who loves NLP and naps",
    //    officeHours: "Non-napping hours",
    //    image: "https://course.ccs.neu.edu/cs6120s26/assets/img/rosie-cropped.jpg"
    // }
  ],
  announcements: [
    {
      date: "2026-04-18",
      title: "Welcome to class!",
      content: "Natural Language Processing. Looking forward to the semester!"
    }
  ],
  readingGroupSheet: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTf4Eog2QIdH8f3fA4Kz7K_uE8o0yI4I8A0zD-vQG7u8x4XN-zUo8S1X9H6Wq_I_c0b-N-z_S0_S/pubhtml?widget=true&amp;headers=false",
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
