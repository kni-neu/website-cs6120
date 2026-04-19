import { Calendar, BookOpen, Users, MessageSquare, ExternalLink, Mail, MapPin, Clock } from "lucide-react";

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
  schedule: [
    { 
      week: 1, 
      topic: "Introduction & Logistics", 
      reading: "Jurafsky & Martin Ch. 1",
      lab: "Environment Setup & Text Preprocessing",
      labLink: "/assignments/lab1",
      homework: "HW 0: Prerequisites Check",
      homeworkLink: "/assignments/hw0",
      readingGroup: "The History of NLP"
    },
    { 
      week: 2, 
      topic: "Regular Expressions & N-grams", 
      reading: "Jurafsky & Martin Ch. 2-3",
      lab: "Tokenization and Regex Practice",
      labLink: "/assignments/lab2",
      homework: "HW 1: N-gram Language Models",
      homeworkLink: "/assignments/hw1",
      readingGroup: "Shannon (1948) - Financial NLP"
    },
    { 
      week: 3, 
      topic: "Vector Semantics & TF-IDF", 
      reading: "Jurafsky & Martin Ch. 6",
      lab: "Word Vectors & TF-IDF Implementation",
      homework: "HW 1 (Cont'd): Pointwise Mutual Information",
      homeworkLink: "/assignments/hw2",
      readingGroup: "Distributional Hypothesis"
    },
    { 
      week: 4, 
      topic: "Neural Networks for NLP", 
      reading: "RNNs and Word Embeddings",
      lab: "PyTorch Basics for Text",
      homework: "HW 2: Neural Sentiment Analysis",
      readingGroup: "Word2Vec (Mikolov et al.)"
    },
    { 
      week: 5, 
      topic: "Sequence-to-Sequence Models", 
      reading: "Attention Mechanisms",
      lab: "Encoder-Decoder Architectures",
      homework: "HW 2 (Cont'd): Machine Translation",
      readingGroup: "Bahdanau Attention"
    },
    { 
      week: 6, 
      topic: "Transformers", 
      reading: "Attention is All You Need",
      lab: "Building a Transformer from Scratch",
      homework: "HW 3: Multi-head Attention Lab",
      readingGroup: "Vaswani et al. (2017)"
    },
    { 
      week: 7, 
      topic: "BERT & Transfer Learning", 
      reading: "Devlin et al.",
      lab: "Fine-tuning BERT on GLUE",
      homework: "HW 3 (Cont'd): Task Adaptation",
      readingGroup: "The Rise of Pre-training"
    },
    { 
      week: 8, 
      topic: "Large Language Models (LLMs)", 
      reading: "Scaling Laws & GPT",
      lab: "Prompt Engineering & Few-shot Learning",
      homework: "HW 4: LLM Application Prototype",
      readingGroup: "GPT-3 (Brown et al.)"
    },
    { 
      week: 9, 
      topic: "Instruction Tuning & RLHF", 
      reading: "InstructGPT",
      lab: "Fine-tuning with LoRA/QLoRA",
      homework: "HW 4 (Cont'd): Preference Optimization",
      readingGroup: "RLHF Policy Gradient"
    },
    { 
      week: 10, 
      topic: "Retrieval Augmented Generation", 
      reading: "RAG & Vector DBs",
      lab: "Vector Database Setup (Pinecone/Milvus)",
      homework: "Final Project Proposal",
      readingGroup: "Lewis et al. (2020) - RAG"
    },
    { 
      week: 11, 
      topic: "Evaluation & Ethics in NLP", 
      reading: "Bender et al.",
      lab: "Bias Detection in Word Embeddings",
      homework: "Final Project Implementation",
      readingGroup: "Stochastic Parrots"
    },
    { 
      week: 12, 
      topic: "Final Projects & Future Directions", 
      reading: "Latest ArXiv papers",
      lab: "Project Poster Session",
      homework: "Final Report Due",
      readingGroup: "The Future of Agents"
    }
  ],
  projects: [
    {
      title: "Final Project: Creative NLP Application",
      description: "Build and serve a functional NLP application using modern techniques (LLMs, RAG, Agents).",
      link: "/assignments/final-project",
      deadline: "Week 12",
      status: "Upcoming"
    }
  ]
};
