export const scheduleData = [
  { 
    week: 1, 
    date: "September 14",
    topic: "Introduction and Applications", 
    videoLink: "https://shorturl.at/R4s4W",
    slidesLink: "https://docs.google.com/presentation/d/1Jg37kz_8CVGiEa4OMt6Dnb9F2giyUjQX",
    description: "Language is the most efficient and compact way to transfer knowledge is through words, where the window to AGI is through NLP. This lecture is an introduction that takes us through history of how we got to LLMs. We'll also review some applications of NLP, current industry standards, and some of the most impactful approaches and where they are being implemented. Finally, we'll preview what we'll be learning, the logistics of how we'll be doing so, and the expectations for your participation in this class.",
    lecturingTopics: [
      "History of NLP: From Rules to Transformers",
      "Course Logistics & Expectations",
      "Standard NLP Applications",
      "Current Industry Standards"
    ],
    application: "Machine Translation, Summarization, and Chatbots",
    reading: "Jurafsky & Martin Ch. 1",
    lab: "Laboratory - Getting Started on Google Cloud with Your Credits",
    labLink: "pdfs/lab-1.pdf",
    homework: "Assignment 1: A First Look at Processing Language",
    homeworkLink: "/assignments/hw1",
  },
  { 
    week: 2, 
    date: "September 21",
    topic: "ML Foundations and Software Engineering", 
    videoLink: "https://northeastern-my.sharepoint.com/:v:/g/personal/k_ni_northeastern_edu/IQAcLFn30OWqRIaTcs6GspboAVh2pY9T25hkZF6yNnqYKUY?e=alhcFM",
    slidesLink: "https://docs.google.com/presentation/d/12XMsenosJHJoC5VZOQrbmXq0pG7Ove0y",
    description: "As NLP is a specific branch of machine learning, we will review some foundational knowledge that we'll utilize through the course of this class. We'll look at both machine learning and software engineering best practices that will help you build and scale NLP systems later in the course. Because most NLP algorithms today rely heavily on computing resources, we'll dive into distributed compution approaches and cloud-based operations.",
    lecturingTopics: [
      "Foundations of Machine Learning",
      "Software Engineering Practices for Scalable ML",
      "Distributed Computation & Cloud Operations"
    ],
    reading: "Linear Algebra and Gradients (Gradient Notes)",
    readingLink: "https://web.stanford.edu/class/cs224n/readings/gradient-notes.pdf",
    lab: "Laboratory - Containerization in the Cloud",
    labLink: "pdfs/lab-2.pdf",
    homework: "Assignment 2: Text Classification",
    homeworkLink: "/assignments/hw2",
  },
  { 
    week: 3, 
    date: "September 28",
    topic: "Language Classification", 
    videoLink: "https://shorturl.at/HlyOU",
    slidesLink: "https://docs.google.com/presentation/d/13olQ4iYGLOgAbYSP-l1uxeypHMTfdKFL",
    description: "Building upon our review of machine learning, we discuss strategies in feature extraction and generation. Particularly as creating a vocabulary can explode required memory space, our featurization includes NLP-specific techniques (e.g., tokenization, lemmatization, etc.). This week also marks the first week of required reading of seminal papers that have revolutionized not only language processing but also machine learning and artificial intelligence writ large.",
    lecturingTopics: [
      "Building Vocabulary with Stopwords and Stemming",
      "Preprocessing - Tokenization and Lemmatization",
      "Logistic Regression Classifier",
      "Naïve Bayes Classifiers"
    ],
    application: "Sentiment Analysis",
    readingGroup: "Agentic Learning without Data",
    readingGroupLink: "https://arxiv.org/abs/2511.16043",
    reading: "Jurafsky & Martin Ch. 6",
    lab: "Laboratory - Naïve Bayes",
    labLink: "https://colab.research.google.com/drive/14wNBIyAOMTyh5Hnuv8tOBXdyV39H0QYW#",
  },
  { 
    week: 4, 
    date: "October 5",
    topic: "Text Processing Algorithms", 
    videoLink: "https://shorturl.at/jw3BX",
    slidesLink: "https://docs.google.com/presentation/d/1NaaiOkdFXizWyrBv9lYZHUMPb3waDygW",
    description: "One of the most widely used algorithms in practice today are autocorrecting algorithms that typically have on-device requirements. In this lecture, we'll review elements of dynamic programming, particularly with respect to the minimum edit distance algorithm, and how we can apply these concepts to the autocorrect and subsequently the autocomplete problem.",
    lecturingTopics: [
      "Representations of Language",
      "Comparisons / Differences in Language",
      "Minimum Edit Distance Algorithms",
      "Quiz 1 - Foundations"
    ],
    application: "Autocorrect in Practice",
    readingGroup: "Agent to Application Protocols",
    readingGroupLink: "https://arxiv.org/abs/2503.23278",
    lab: "Laboratory - Autocorrect Vocabulary Candidates",
    labLink: "https://colab.research.google.com/drive/1M8i7DuIuUMKDHO3Kuu98ZE3xv60zupAV",
    homework: "Assignment 3: Autocorrect",
    homeworkLink: "/assignments/hw3",
  },
  { 
    week: 5, 
    date: "October 12",
    topic: "Indigenous People's Day", 
  },
  { 
    week: 5, 
    date: "October 19",
    topic: "Introduction to Language Modeling", 
    videoLink: "https://shorturl.at/bP15B",
    slidesLink: "https://docs.google.com/presentation/d/1Bil62cMryeAIHDX9CcWZqbakle6Or3b3",
    description: "Today we'll begin our journey to understanding LLMs by observing its origins. Dropping the 'Large' from the now-ubiquitous term 'Large Language Models', we take a look at the foundational principles that extract the relationships defining what it means to model language and how we might generate text.",
    lecturingTopics: [
      "N-Gram Models, Smoothing, and evaluation",
      "Abstractive vs extractive approaches",
      "Out of Vocabulary (OOV) Handling",
      "Quiz 2 - Edit Distance"
    ],
    application: "Autocompleting words and sentences",
    readingGroup: "Topic Modeling with Latent Dirichlet Allocation",
    readingGroupLink: "https://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf",
    labs: [
      {
        title: "Data Processing for N-Grams",
        link: "https://colab.research.google.com/drive/1Ul6HAglGBoc53yAIfui-pgeTso7wMB26"
      },
      {
        title: "N-Grams and OOV Words",
        link: "https://colab.research.google.com/drive/1bSeH7jy3F8sgdPTDlYu8gdJW1IvuvucX"
      },
      {
        title: "Building N-Gram Models",
        link: "https://colab.research.google.com/drive/1Ul6HAglGBoc53yAIfui-pgeTso7wMB26"
      }
    ],
    homework: "Assignment 4: Autocomplete",
    homeworkLink: "/assignments/hw4",
  },
  { 
    week: 6, 
    date: "October 26",
    topic: "Word Modeling with Self-Supervision", 
    videoLink: "https://shorturl.at/0X3RI",
    slidesLink: "https://docs.google.com/presentation/d/1kesXmMT5rdxPMdeQ1EnKvcfwk8Z8vJez",
    description: "Perhaps the most influential paper to have come out of the natural language community is the word2vec paper. This week's lecture reviews word models (including word2vec as well as continuous bags of words) and the embeddings / representations that they create.",
    lecturingTopics: [
      "Embeddings with Continuous Bag of Words (CBOW)",
      "Skip-gram and Negative Sampling",
      "Intrinsic and Extrinsic Evaluation",
      "From Words to Sentences"
    ],
    readingGroup: "Learning Text Similarity with Siamese RNNs",
    readingGroupLink: "https://arxiv.org/abs/2310.12321",
    lab: "Laboratory - Word Embeddings with CBOW",
    labLink: "https://colab.research.google.com/drive/1lknBFuNeVr7-AvQx4vKvCQfVkL_za65Z",
    homework: "Assignment 5: Word Embeddings",
    homeworkLink: "/assignments/hw5",
  },
  { 
    week: 7, 
    date: "November 2",
    topic: "Introduction to Sequential Modeling", 
    videoLink: "https://shorturl.at/QeAgL",
    slidesLink: "https://docs.google.com/presentation/d/1NQn__1SQ_T1yYgFJhBxdCd1QzWsLsEbm",
    description: "Sequence relates to the order by which we see information. This week, we will learn about the modeling of sequences from Hidden Markov Models (HMMs) to Recurrent Neural Networks (RNNs) and memory gating mechanisms like LSTMs.",
    lecturingTopics: [
      "Hidden Markov Models (HMMs) & Viterbi Algorithm",
      "Recurrent Neural Networks (RNNs)",
      "Vanishing and Exploding Gradients",
      "Memory Gating - GRUs and LSTMs"
    ],
    application: "PoS Tagging, NER, and Machine Translation",
    readingGroup: "DeepSeek v3.2 Technical Report",
    readingGroupLink: "https://arxiv.org/abs/2512.02556",
    lab: "Laboratory - Serving an LLM (GCP/NEU)",
    labLink: "pdfs/lab-11.1.pdf",
    homework: "Assignment 6: RNN Implementation",
    homeworkLink: "/assignments/hw6",
  },
  { 
    week: 8, 
    date: "November 9",
    topic: "Attention and the Transformer Model", 
    videoLink: "https://shorturl.at/2Zaj8",
    slidesLink: "https://docs.google.com/presentation/d/1L2UfukJVr2f6Lf3A6v3OIaPp9upmjqdP",
    description: "Attention models have been the leap forward that are the fundamental building blocks to modern machine learning today, including the essential ingredients for Large Language Models. We'll go deep into attention layers in neural networks, building our own from scratch.",
    lecturingTopics: [
      "Introduction to Attention Modeling",
      "The Self-Attention Mechanism",
      "The Transformer Modeling Layer",
      "Large Scale Attention Modeling"
    ],
    readingGroup: "On the Difficulty of Training RNNs",
    readingGroupLink: "https://arxiv.org/abs/1211.5063",
    lab: "Laboratory - Dot Product Attention & Masking",
    labLink: "https://colab.research.google.com/drive/10SDgUL4px6M_R7-4c1EDHEx0neck2ZOq",
    homework: "Assignment 7: Transformers",
    homeworkLink: "/assignments/hw7",
  },
  { 
    week: 9, 
    date: "November 16",
    topic: "Introduction to Large Language Modeling (LLMs)", 
    videoLink: "https://shorturl.at/JV3fN",
    slidesLink: "https://docs.google.com/presentation/d/1nMyC1w6ItzDjDw3xXLJeRN0DOyZu1QiAh9lDMe-mn3A",
    description: "This week, we introduce large language models using the fundamentals that you have learned, from perplexity to transformer layers for pre-training. We'll focus on techniques from OpenAI, Anthropic, Amazon, and Google.",
    lecturingTopics: [
      "System Design for LLM Applications",
      "Pre-training - Masked and Causal Language Modeling",
      "Parameter-Efficient Tuning (PEFT)",
      "Scaling Laws and Emergent Abilities"
    ],
    readingGroup: "Attention is All You Need",
    readingGroupLink: "https://arxiv.org/abs/1706.03762",
    reading: "BERT: Pre-training of Deep Bidirectional Transformers",
    readingLink: "https://arxiv.org/abs/1810.04805",
    lab: "Laboratory - Tuning LLMs",
    labLink: "https://colab.research.google.com/drive/1u8DDFEiCC2yJgQIfbCOY4_aN06MJeUfv",
    homework: "Project Proposal",
    homeworkLink: "/assignments/project-proposal",
  },
  { 
    week: 10, 
    date: "November 23",
    topic: "Practically Leveraging LLMs and Lifecycles", 
    videoLink: "https://shorturl.at/oJBJb",
    slidesLink: "https://docs.google.com/presentation/d/1Kh1rLlQ3rAK4BuRPPyWXG5d_Ba_39n-_",
    description: "Explore common approaches to optimally leverage LLMs for bespoke applications, attacking limitations like knowledge gaps, hallucinations, and logical reasoning problems. We'll also cover RLHF and the lifecycle of system design.",
    lecturingTopics: [
      "Retrieval Augmented Generation (RAG)",
      "In Context Learning and Prompt Engineering",
      "Aligning LLMs via Instruction Following",
      "Reinforcement Learning with Human Feedback (RLHF)"
    ],
    readingGroup: "Retrieval Augmented Generation",
    readingGroupLink: "https://arxiv.org/abs/2005.11401",
    reading: "Training to Instruct with Human Feedback",
    readingLink: "https://arxiv.org/abs/2203.02155",
    lab: "Laboratory - Instruction Following Tuning",
    labLink: "https://colab.research.google.com/drive/1ogy2_MEcMEFrJGiS7XwtEElwnV7bY_p5",
  },
  { 
    week: 11, 
    date: "November 30",
    topic: "Agentic Workflows", 
    slidesLink: "https://docs.google.com/presentation/d/1SDDo4FYWQoascknu6g6lNSCHwZIxRuSwKW-KXNKuO-A/",
    description: "We discuss the most cutting edge approaches to leveraging LLMs in practice: agentic workflows. We will discuss how to build agents with LLMs and program-aided prompting to create intelligent agents that can perform complex tasks.",
    lecturingTopics: [
      "Intelligent Agents with Program-Aided LLMs",
      "NLP Systems Engineering Diagrams",
      "Creating and Evaluating Agentic Workflows",
      "Agent Communications and Standardization"
    ],
    labs: [
      {
        title: "Laboratory - Agentic Workflows",
        link: "https://colab.research.google.com/drive/1EkHKTeXei1VrGus9AYugknkOKAg22ea1"
      },
      {
        title: "Laboratory - OpenClaw Installation",
        link: "pdfs/lab-week14.pdf"
      }
    ],
  },
  { 
    week: 12, 
    date: "December 7",
    topic: "Demonstrations and Poster Sessions", 
    videoLink: "https://shorturl.at/bP15B",
    slidesLink: "https://docs.google.com/presentation/d/1l3a-vyAofPcqCfzGqpAYVoHeyDN4T_g8",
    description: "Deploy and show off your domain-specific LLM and pitch your startup idea! Review the guidelines at the Final Project Website.",
    lecturingTopics: [
      "Final Project Presentations",
      "Future Directions in NLP",
      "Poster Session"
    ],
    readingGroup: "Low Rank Approximations for DNN Tuning",
    readingGroupLink: "https://arxiv.org/abs/1706.03762",
    homework: "Final Report",
    homeworkLink: "/assignments/final-project",
  },
  { 
    week: 13, 
    date: "December 13",
    topic: "Final Exam", 
  }
];
