// Import all assets to let Vite process them and add hashes for cache busting
// and to ensure they are placed in the assets/ directory during build.

import assignment0 from "./pdfs/assignment-0.pdf";
import assignment1 from "./pdfs/assignment-1.pdf";
import assignment2 from "./pdfs/assignment-2.pdf";
import assignment3 from "./pdfs/assignment-3.pdf";
import assignment4 from "./pdfs/assignment-4.pdf";
import assignment5 from "./pdfs/assignment-5.pdf";
import assignment6 from "./pdfs/assignment-6.pdf";
import assignment7 from "./pdfs/assignment-7.pdf";
import example_pdf from "./pdfs/example_pdf.pdf";
import lab1 from "./pdfs/lab-1.pdf";
import lab11_1 from "./pdfs/lab-11.1.pdf";
import lab11_2 from "./pdfs/lab-11.2.pdf";
import lab14 from "./pdfs/lab-14.pdf";
import lab2 from "./pdfs/lab-2.pdf";
import lab3 from "./pdfs/lab-3.pdf";
import lab6 from "./pdfs/lab-6.pdf";
import lab7 from "./pdfs/lab-7.pdf";
import lab_week14 from "./pdfs/lab-week14.pdf";
import matrix_reference_ucl from "./pdfs/matrix-reference-ucl.pdf";
import model_eval from "./pdfs/model-eval.pdf";
import nlp_syllabus from "./pdfs/nlp_syllabus.pdf";
import project_description from "./pdfs/project-description.pdf";
import project_proposal from "./pdfs/project-proposal.pdf";
import quiz_05_practice from "./pdfs/quiz-05-practice.pdf";
import quiz_06_practice from "./pdfs/quiz-06-practice.pdf";
import quiz_2_prep from "./pdfs/quiz-2-prep.pdf";

// Images
import karl_prof from "./images/karl_prof.jpg";
import karl_interests from "./images/karl-interests.png";

export const assetMap: Record<string, string> = {
  "pdfs/assignment-0.pdf": assignment0,
  "pdfs/assignment-1.pdf": assignment1,
  "pdfs/assignment-2.pdf": assignment2,
  "pdfs/assignment-3.pdf": assignment3,
  "pdfs/assignment-4.pdf": assignment4,
  "pdfs/assignment-5.pdf": assignment5,
  "pdfs/assignment-6.pdf": assignment6,
  "pdfs/assignment-7.pdf": assignment7,
  "pdfs/example_pdf.pdf": example_pdf,
  "pdfs/lab-1.pdf": lab1,
  "pdfs/lab-11.1.pdf": lab11_1,
  "pdfs/lab-11.2.pdf": lab11_2,
  "pdfs/lab-14.pdf": lab14,
  "pdfs/lab-2.pdf": lab2,
  "pdfs/lab-3.pdf": lab3,
  "pdfs/lab-6.pdf": lab6,
  "pdfs/lab-7.pdf": lab7,
  "pdfs/lab-week14.pdf": lab_week14,
  "pdfs/matrix-reference-ucl.pdf": matrix_reference_ucl,
  "pdfs/model-eval.pdf": model_eval,
  "pdfs/nlp_syllabus.pdf": nlp_syllabus,
  "pdfs/project-description.pdf": project_description,
  "pdfs/project-proposal.pdf": project_proposal,
  "pdfs/quiz-05-practice.pdf": quiz_05_practice,
  "pdfs/quiz-06-practice.pdf": quiz_06_practice,
  "pdfs/quiz-2-prep.pdf": quiz_2_prep,
  
  // Images
  "images/karl_prof.jpg": karl_prof,
  "images/karl-interests.png": karl_interests,
};
