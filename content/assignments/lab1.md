# Lab 1: Environment Setup & Text Preprocessing

## Overview
This lab will walk you through setting up your local Python environment for NLP development and practicing basic text preprocessing techniques.

## Prerequisites
- Python 3.9+
- pip

## Step 1: Virtual Environment
Create a clean environment for the course.

```bash
python -m venv nlp_env
source nlp_env/bin/activate  # On Windows: nlp_env\Scripts\activate
```

## Step 2: Install Libraries
We will use NLTK, spaCy, and scikit-learn.

```bash
pip install nltk spacy scikit-learn
```

## Step 3: Basic Preprocessing
Follow the notebook `lab1_preprocessing.ipynb` to practice:
- Lowercasing
- Tokenization
- Stopword removal
- Stemming vs. Lemmatization

---
*CS 6120 / Spring 2026 / Northeastern University*
