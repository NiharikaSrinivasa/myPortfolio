# Niharika Srinivas — Developer Portfolio

A modern, responsive developer portfolio built with **Next.js, TypeScript, Tailwind CSS, and Framer Motion**.

The portfolio showcases my professional experience as a **Senior Frontend Engineer**, my React and TypeScript expertise, and my transition toward **full-stack MERN development**.

---

## 🚀 Live Portfolio

> Add your deployed Vercel URL here after deployment.

```text
https://your-portfolio.vercel.app
```

---

## 👩‍💻 About Me

I'm a **Senior Frontend Engineer** with 6+ years of experience in web development and 4+ years of professional experience working with React.

My core experience includes:

* React.js
* JavaScript ES6+
* TypeScript
* HTML5
* CSS3
* Redux
* Context API
* Material UI
* Storybook
* REST APIs
* Git / GitLab

I'm currently expanding my expertise into **full-stack MERN development**, working with:

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* REST API Development

My goal is to work on roles that combine strong frontend engineering with full-stack development.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* TypeScript
* JavaScript ES6+
* HTML5
* CSS3
* Tailwind CSS

### State Management

* Redux
* Context API
* React Hooks
* Custom Hooks

### UI & Design

* Material UI
* Storybook
* Responsive Design
* Figma
* Accessibility

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* RESTful APIs

### Authentication

* JWT
* API Authentication
* Role-Based Access

### Development Tools

* Git
* GitLab
* GitHub
* VS Code
* npm

---

## ✨ Features

The portfolio includes:

* Responsive design for desktop, tablet, and mobile
* Sticky navigation
* Mobile navigation menu
* Smooth section-based navigation
* Animated page sections
* Framer Motion animations
* Interactive project cards
* Project details modal
* Experience timeline
* Skills grouped by category
* MERN technology stack showcase
* Contact section
* GitHub, LinkedIn and Medium links
* Responsive profile image
* Dark developer-focused UI
* SEO-friendly Next.js structure

---

## 📁 Project Structure

```text
portfolio/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   └── Portfolio.tsx
│
├── data/
│   └── portfolio.ts
│
├── public/
│   └── images/
│       └── profile.jpg
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

> The exact structure may vary depending on the current Next.js project setup.

---

## 📦 Main Dependencies

The portfolio is built using the following technologies:

### Next.js

Used as the primary React framework for the application.

### TypeScript

Provides static typing and improves maintainability and developer experience.

### Tailwind CSS

Used for responsive layouts, spacing, typography, colors and component styling.

### Framer Motion

Used to create animations and interactive transitions.

### Lucide React

Used for icons throughout the portfolio.

### Next Image

Used for optimized profile image rendering.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/NiharikaSrinivasa/myPortfolio.git
```

### 2. Navigate into the project

```bash
cd myPortfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

---

## 🎨 Portfolio Data

Most of the portfolio content is maintained separately from the UI.

The main data file is:

```text
data/portfolio.ts
```

It contains:

```typescript
profile
stats
experience
skills
projects
```

This makes it easier to update portfolio information without modifying the main component.

For example:

```typescript
export const profile = {
  name: "Niharika Srinivas",
  role: "Senior Frontend Engineer",
  positioning: "MERN Stack Developer",
  location: "Bengaluru, India",
  email: "niharika.web.dev@gmail.com",
};
```

---

## 📊 Portfolio Sections

### 01 — About

Provides a quick overview of:

* Years of experience
* React experience
* TypeScript experience
* Enterprise project experience
* Development background
* Current learning areas

---

### 02 — Experience

Highlights professional experience across:

#### Yethi Consulting Pvt Ltd

**Senior Software Engineer — Tenjin Online**

Technologies include:

```text
React.js
JavaScript
TypeScript
Material UI
Storybook
Redux
REST APIs
GitLab
```

#### Yethi Consulting Pvt Ltd

**Frontend Engineer — Tenjin 4.0**

Technologies include:

```text
React.js
JavaScript
HTML5
CSS3
Material UI
Storybook
Context API
REST APIs
Figma
```

#### Scion Social

**Web Developer**

Technologies include:

```text
HTML5
CSS3
JavaScript
WordPress
```

---

## 🚀 Projects

The portfolio currently showcases professional and personal projects.

### Tenjin Online

Enterprise test automation platform developed using:

```text
React.js
JavaScript
Redux
Material UI
REST APIs
```

### Tenjin 4.0

Enterprise test management application developed using:

```text
React.js
JavaScript ES6+
Context API
Material UI
Storybook
```

### MERN Issue Tracker

A full-stack personal project demonstrating:

* Authentication
* CRUD operations
* Role-based access
* Filtering
* Pagination
* REST API integration
* MongoDB data management

Technology stack:

```text
React
TypeScript
Node.js
Express.js
MongoDB
```

### MERN Task Management App

A full-stack task management application demonstrating:

* Authentication
* CRUD operations
* REST API integration
* MongoDB
* User-based task management

Technology stack:

```text
React
TypeScript
Node.js
Express.js
MongoDB
```

---

## 🎯 Career Positioning

This portfolio is intentionally positioned around:

```text
React + TypeScript + Full-Stack MERN
```

The portfolio demonstrates existing professional frontend experience while also showcasing hands-on full-stack development.

The positioning focuses on:

* React engineering
* TypeScript
* Reusable components
* REST API integration
* State management
* Node.js
* Express.js
* MongoDB
* Authentication
* Full-stack application development

---

## 📱 Responsive Design

The portfolio is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Tailwind responsive utilities are used throughout the application to adapt layouts for different screen sizes.

---

## 🎬 Animations

Animations are implemented using **Framer Motion**.

Examples include:

* Hero section entrance animation
* Profile image animation
* Experience section reveal
* Project card hover animation
* Project modal transitions

Example:

```tsx
<motion.div
  initial="hidden"
  animate="show"
  variants={fade}
>
  ...
</motion.div>
```

---

## 🖼️ Profile Image

The profile image is stored inside:

```text
public/images/profile.jpg
```

It is rendered using Next.js `Image`:

```tsx
<Image
  src="/images/profile.jpg"
  alt="Niharika Srinivas"
  width={600}
  height={600}
  priority
/>
```

---

## 🔗 Social Links

### GitHub

```text
https://github.com/NiharikaSrinivasa
```

### LinkedIn

```text
https://www.linkedin.com/in/niharika-srinivas-099747149/
```

### Medium

```text
https://medium.com/@monksweb
```

---

## 📈 Future Improvements

Planned improvements for the portfolio include:

* Add more full-stack MERN projects
* Add project GitHub links
* Add live project links
* Add detailed project case studies
* Add backend architecture diagrams
* Add API documentation
* Add downloadable resume
* Add contact form
* Add SEO metadata
* Add Open Graph metadata
* Add project screenshots
* Add technical blog section
* Add testing examples
* Add Docker-based deployment
* Add CI/CD workflow

---

## 🚀 Deployment

This project can be deployed using platforms such as Vercel.

Typical deployment flow:

```text
GitHub
   ↓
Vercel
   ↓
Production Build
   ↓
Live Portfolio
```

For future updates:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

If the repository is connected to Vercel, new pushes to the configured branch can trigger a new deployment automatically.

---

## 🧪 Local Development

For development:

```bash
npm run dev
```

For production testing:

```bash
npm run build
npm start
```

---

## 👩‍💻 Author

**Niharika Srinivas**

Senior Frontend Engineer | MERN Stack Developer

```text
React.js
TypeScript
JavaScript
Node.js
Express.js
MongoDB
```

---

## 📬 Contact

For professional opportunities, collaborations or technical discussions:

**Email:**
[niharika.web.dev@gmail.com](mailto:niharika.web.dev@gmail.com)

**LinkedIn:**
https://www.linkedin.com/in/niharika-srinivas-099747149/

**GitHub:**
https://github.com/NiharikaSrinivasa

**Medium:**
https://medium.com/@monksweb

---

## ⭐ If you find this portfolio useful

Feel free to explore the repository, review the projects and connect with me.

---

### Built with ❤️ using React, Next.js, TypeScript and Tailwind CSS.
