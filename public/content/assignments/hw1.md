# Homework 1: N-gram Language Models

## Overview
In this assignment, you will implement N-gram language models and use them to generate text and calculate text perplexity. This foundational assignment helps you understand the statistical nature of language before we move into neural representations.

## Objectives
- Clean and tokenize text data using Python and standard libraries.
- Build a Bigram and Trigram model with Laplace smoothing.
- Calculate perplexity on a held-out test set.
- Generate realistic text samples using your trained model.

## Setup
Your code should be implemented in a Jupyter Notebook. We provide a starter template in the course GitHub repository.

```bash
git clone https://github.com/northeastern-nlp/cs6120-hw1.git
```

## Requirements
1. **Preprocessing (20 pts)**: Handle punctuation, lowercasing, and special tokens (<s> and </s>).
2. **Model Training (40 pts)**: Efficiently store counts and calculate probabilities.
3. **Evaluation (25 pts)**: Implement cross-entropy and perplexity.
4. **Analysis (15 pts)**: Discuss the impact of smoothing and the differences between 2-gram and 3-gram results.

## Submission
Submit your exported PDF and the `.ipynb` file to Canvas by the deadline. 

---
*CS 6120 / Spring 2026 / Northeastern University*
