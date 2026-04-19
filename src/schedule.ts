export const scheduleData = [
  { 
    week: 1, 
    date: "September 14",
    topic: "Introduction and Applications", 
    videoLink: "#",
    description: "Language is the most efficient and compact way to transfer knowledge through words, where the window to AGI is through NLP. This lecture is an introduction that takes us through history of how we got to LLMs. We'll also review some applications of NLP, current industry standards, and some of the most impactful approaches and where they are being implemented. Finally, we'll preview what we'll be learning, the logistics of how we'll be doing so, and the expectations for your participation in this class.",
    lecturingTopics: [
      "History of NLP: From Rules to Transformers",
      "Course Logistics & Expectations",
      "The Window to AGI"
    ],
    application: "Course Introduction & Vision",
    reading: "Jurafsky & Martin Ch. 1",
    lab: "Laboratory - Getting Started on Google Cloud with Your Credits",
    labLink: "/assignments/lab1",
    homework: "Assignment 1 is assigned - A First Look at Processing Language",
    homeworkLink: "/assignments/hw1",
  },
  { 
    week: 2, 
    date: "September 21",
    topic: "ML Foundations and Software Engineering", 
    videoLink: "#",
    description: "As NLP is a specific branch of machine learning, we will review some foundational knowledge that we'll utilize through the course of this class. We'll look at both machine learning and software engineering best practices that will help you build and scale NLP systems later in the course. Because most NLP algorithms today rely heavily on computing resources, we'll dive into distributed compution approaches and cloud-based operations.",
    lecturingTopics: [
      "ML Foundations: Loss, Gradients, and Tensors",
      "Software Engineering for Scalable ML",
      "Distributed Computing & Cloud Operations"
    ],
    application: "Foundation Engineering",
    reading: "Jurafsky & Martin Ch. 2-3",
    lab: "Tokenization and Regex Practice",
    labLink: "/assignments/lab2",
    homework: "HW 1: N-gram Language Models",
    homeworkLink: "/assignments/hw1",
  },
  { 
    week: 3, 
    date: "September 28",
    topic: "Vector Semantics & TF-IDF", 
    reading: "Jurafsky & Martin Ch. 6",
    lab: "Word Vectors & TF-IDF Implementation",
    homework: "HW 1 (Cont'd): Pointwise Mutual Information",
    homeworkLink: "/assignments/hw2",
    readingGroup: "Distributional Hypothesis"
  },
  { 
    week: 4, 
    date: "February 2",
    topic: "Language Classification", 
    videoLink: "#",
    description: "Building upon our review of machine learning, we discuss strategies in feature extraction and generation. Particularly as creating a vocabulary can explode required memory space, our featurization includes NLP-specific techniques (e.g., tokenization, lemmatization, etc.). This week also marks the first week of required keynote paper reading, where we will begin the tour of seminal papers that have revolutionized not only language processing but also machine learning and artificial intelligence writ large.",
    lecturingTopics: [
      "Building Vocabulary with Stopwords and Stemming",
      "Preprocessing - Tokenization and Lemmatization",
      "Logistic Regression Classifier",
      "Naïve Bayes Classifiers"
    ],
    application: "Sentiment Analysis",
    reading: "RNNs and Word Embeddings",
    lab: "Laboratory - Naïve Bayes",
    homework: "HW 2: Neural Sentiment Analysis",
    readingGroup: "Word2Vec (Mikolov et al.)",
    readingGroupLink: "https://arxiv.org/abs/1301.3781"
  },
  { 
    week: 5, 
    date: "October 12",
    topic: "Indigenous People's Day", 
  },
  { 
    week: 5, 
    date: "October 19",
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
];
