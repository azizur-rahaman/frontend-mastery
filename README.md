# 🧩 Problem Statement

Design and build a clean, semantic, and accessible landing page for a personal portfolio using pure **HTML5**.

---

## 🧠 Requirements

You’re building the page for yourself — **Azizur Rahman**, an aspiring frontend developer preparing for an **OpenAI frontend role**.

Your goal is to:

- Use only HTML5 (no CSS yet)
- Ensure the document is **well-structured**, **semantic**, and **accessible**
- Include **meta information** for SEO
- Organize content into **logical sections**

---

## ✅ Functional Requirements

### 🧱 Header section
- Must include your **name or logo**
- Must have a navigation bar with internal links:
  - “About”
  - “Projects”
  - “Contact”

### 🧠 Main section
#### About section
- Short intro about you

#### Projects section
- At least **2 project summaries** (use `<article>`)

#### Contact section
- A simple form with fields:
  - **Name** (text)
  - **Email** (email)
  - **Message** (textarea)
  - **Submit button**

### 🦶 Footer section
- Add **copyright**
- Add at least one **external social link** (GitHub, LinkedIn)

---

## ♿ Accessibility

- Use semantic tags: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`
- Each form field must have a `<label>`
- Add **alt** for all images

---

## 🧾 Metadata

Include:

```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="Portfolio of Azizur Rahman — aspiring frontend developer." />
<link rel="icon" href="favicon.ico" />
