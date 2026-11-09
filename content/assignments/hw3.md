# Homework 3: Spelling and Tokenization

Build a small spelling-correction system, study how words differ, and finish by learning subword tokens. The homework moves from word-frequency statistics to edit distance, then introduces byte-pair encoding (BPE).

## What you'll build

1. **Word frequencies:** Process the Shakespeare corpus into lowercase word counts normalized as probabilities.
2. **Spelling suggestions:** Generate candidate corrections within one or two character edits, then rank them by corpus frequency. Supported edits include insertion, deletion, replacement, and swapping adjacent letters.
3. **Minimum edit distance:** Use dynamic programming to compute the distance between two strings and return the full distance matrix. Insertion, deletion, and replacement costs are configurable.
4. **BPE tokenization:** Learn frequent adjacent-symbol merges from a space-separated corpus. Each word is handled independently with an end-of-word marker; return both the learned merges and final token frequencies.

See the [homework handout](pdfs/assignment-3.pdf) for the complete instructions. Background reading is available in the [syllabus](/cs6120f26/syllabus).

<center>
<img 
  src="https://course.ccs.neu.edu/cs6120f26/images/misspelled.png"
  width="500" height="auto">
</center>
<br>

## Data and starter code

Use the [Python starter file](/python/assignment3.py) and the [Shakespeare corpus and utilities](/cs6120f26/data/shakespeare/). Develop in Python; you may work in any environment, but submit a `.py` file.

## Submission

Submit `assignment3.py` through [Gradescope](https://www.gradescope) by 11:59pm on Monday, October 19.

<!-- * Document templates can be either [Overleaf TeX File](https://www.overleaf.com/read/gbwryydmdjhv) or [DOCX File](https://docs.google.com/document/d/1Q8fpJo-gF_L0_TwUdw5E7x7faOAStK4n). When you've compiled/finished writing, **download the PDF** from Overleaf/Google and upload it to the submission link.  -->
