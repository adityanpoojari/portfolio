# Aditya N Poojari — Portfolio Website

A clean, modern, and minimal portfolio website tailored for **Aditya N Poojari**, Computer Science Engineering Student specializing in **Artificial Intelligence & Machine Learning** at **AJ Institute of Engineering and Technology (AJIET)**, Mangaluru.

---

## 🌟 Highlights & Features

- **Modern Minimalist Aesthetic**: Deep navy-blue accent palette (`#0B1F3A`, `#1D4ED8`), generous white space, and crisp sans-serif typography (`Inter` and `Plus Jakarta Sans`).
- **Fully Responsive**: Mobile-first architecture with smooth transitions across mobile, tablet, and desktop viewports.
- **Subtle Micro-Interactions**:
  - Smooth scroll navigation with active section highlighting
  - Scroll-triggered reveal animations via `IntersectionObserver`
  - Interactive cards with subtle elevation hover effects
  - Single-click clipboard copy for email and phone number with instant feedback toast
- **Interactive Contact Form**: Client-side validation, sending state feedback, and automatic mail client integration.
- **Resume Ready**: Direct link to download/view `resume.pdf` and an online printable view via `resume.html`.

---

## 📂 Project Structure

```
c:\Users\adity\Portfolio\
│
├── index.html        # Main semantic single-page portfolio
├── style.css         # Modern, modular CSS design tokens & animations
├── script.js         # Dependency-free vanilla JavaScript for interactions
├── resume.pdf        # Clean, recruiter-ready 1-page PDF resume
├── resume.html       # Web-based printable resume view
└── README.md         # Documentation & deployment guide
```

---

## 📑 Portfolio Sections

1. **Hero**: Headline, status badge ("Available for Internships & Projects"), quick metadata, and direct CTAs (View Resume, Contact, GitHub).
2. **About Me**: Bio covering 3rd-year CS studies at AJIET, core strengths, and education timeline (Sep 2024 – Aug 2028).
3. **Technical Skills**: Categorized into:
   - **Programming Languages**: Python, C
   - **Web Technologies**: HTML5, CSS3
   - **Databases & Systems**: MySQL, DBMS
4. **Featured Projects**:
   - **CareerAI**: AI-powered career & interview prep platform with coding practice, AI interview simulations, dashboard, and resume analyzer.
   - **PathForgeAI**: Personalized AI learning path generator transforming skills into milestone-based roadmaps.
5. **Languages Known**: English, Kannada, Malayalam, Hindi.
6. **Contact**: Quick-copy email (`adityanpoojari9@gmail.com`), phone (`+91 94809 50454`), LinkedIn, and GitHub links + integrated message form.
7. **Footer**: Social links, copyright, and technology badges.

---

## 🚀 Running Locally

You can view the portfolio directly by opening `index.html` in any modern web browser:

### Option A: Double-click
Double-click `index.html` in File Explorer.

### Option B: Local Python HTTP Server
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000).

---

## 🌐 Free 1-Click Deployment

### Deploy to GitHub Pages:
1. Push this directory to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/adityanpoojari/portfolio.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**
   - Under **Build and deployment** > **Branch**, select `main` and `/ (root)`
   - Click **Save**. Your site will be live at `https://adityanpoojari.github.io/portfolio/` in ~1 minute!
