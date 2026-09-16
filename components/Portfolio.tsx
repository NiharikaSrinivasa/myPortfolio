"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { profile, stats, experience, skills, projects } from "@/data/portfolio";
const fade = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
export default function Portfolio() {
  const [open, setOpen] = useState<string | null>(null);
  const [menu, setMenu] = useState(false);
  const nav = ["About", "Experience", "Projects", "Skills", "Contact"];
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg" />
      {/* ==================== HEADER ==================== */}
      <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="font-mono text-sm font-bold text-white">
            <span className="text-cyanx">~/</span>
            niharika
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <a
                key={n}
                href={"#" + n.toLowerCase()}
                className="font-mono text-xs text-slate-400 hover:text-cyanx"
              >
                {n}
              </a>
            ))}
            <a className="primary py-2.5" href={"mailto:" + profile.email}>
              Let's talk
            </a>
          </nav>
          {/* Mobile Menu */}
          <button
            className="rounded-lg border border-line p-2 md:hidden"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
          >
            {menu ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {menu && (
          <nav className="border-t border-line px-5 py-3 md:hidden">
            {nav.map((n) => (
              <a
                onClick={() => setMenu(false)}
                key={n}
                href={"#" + n.toLowerCase()}
                className="block border-b border-line/60 py-3 font-mono text-sm text-slate-300"
              >
                {n}
              </a>
            ))}
          </nav>
        )}
      </header>
      {/* ==================== HERO ==================== */}
      <section
        id="top"
        className="mx-auto max-w-6xl px-5 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_.65fr]">
          <motion.div initial="hidden" animate="show" variants={fade}>
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="chip">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-greenx" />
                open to opportunities
              </span>
              <span className="chip">Bengaluru, India</span>
            </div>
            <p className="label mb-4">Senior Frontend Engineer</p>
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              I build <span className="glow text-cyanx">scalable</span>
              <br />
              web applications.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Frontend engineer with strong experience in React, TypeScript and
              JavaScript, building scalable enterprise applications with
              reusable components, REST API integrations and modern state
              management. Currently expanding into full-stack MERN development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="primary">
                View projects
                <ArrowDown size={16} className="ml-2" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="secondary"
              >
                GitHub
                <Github size={16} className="ml-2" />
              </a>
              <a href={"mailto:" + profile.email} className="secondary">
                Contact
                <Mail size={16} className="ml-2" />
              </a>
            </div>
            {/* MERN Technology Stack */}
            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
              ].map((x) => (
                <span className="chip" key={x}>
                  {x}
                </span>
              ))}
            </div>
          </motion.div>
          {/* Profile Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="rounded-3xl border border-cyanx/20 bg-panel p-3 shadow-glow">
              <div className="rounded-2xl border border-line bg-black/30 p-3">
                <div className="mb-3 flex items-center gap-2 border-b border-line pb-3">
                  <i className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <i className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
                  <i className="h-2.5 w-2.5 rounded-full bg-green-300/70" />
                  <span className="ml-2 font-mono text-[10px] text-slate-500">
                    profile.ts
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-xl border border-line">
                  <Image
                    src="/images/profile.jpg"
                    alt="Niharika Srinivas"
                    width={600}
                    height={600}
                    priority
                    className="aspect-square w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 pt-20">
                    <p className="font-mono text-xs text-cyanx">const role =</p>
                    <p className="mt-1 font-mono text-lg font-bold text-white">
                      "MERN + TypeScript"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ==================== ABOUT ==================== */}
      <section id="about" className="border-y border-line/70 bg-white/[.015]">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
          <p className="label">01 / about</p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Engineering with impact, not just features.
          </h2>
          {/* Stats */}
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stats.map(([v, l]) => (
              <motion.div whileHover={{ y: -4 }} key={l} className="card p-6">
                <p className="font-mono text-4xl font-bold text-cyanx">{v}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{l}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_.8fr]">
            {/* About Me */}
            <div className="card p-7">
              <p className="font-mono text-xs text-slate-500">about-me.json</p>
              <p className="mt-6 text-base leading-8 text-slate-300">
                I started my development journey with HTML, CSS, JavaScript and
                WordPress before moving into React and TypeScript. I have
                experience building enterprise frontend applications, reusable
                component systems, REST API integrations and state management
                solutions. I am now expanding my frontend expertise into
                full-stack MERN development using Node.js, Express.js and
                MongoDB.
              </p>
            </div>
            {/* Currently Learning */}
            <div className="card p-7">
              <p className="font-mono text-xs text-slate-500">
                currently_learning
              </p>
              <div className="mt-5 space-y-3">
                {[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Mongoose",
                  "JWT Authentication",
                  "REST API Development",
                ].map((x) => (
                  <div key={x} className="flex gap-3 text-sm text-slate-300">
                    <Check size={15} className="mt-1 text-greenx" />
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== EXPERIENCE ==================== */}
      <section id="experience" className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <p className="label">02 / experience</p>
        <h2 className="mt-3 text-3xl font-bold text-white">
          Where I've been building.
        </h2>
        <div className="mt-12 space-y-8">
          {experience.map((e) => (
            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fade}
              key={e.project}
              className="grid gap-6 md:grid-cols-[170px_1fr]"
            >
              <div className="font-mono text-xs leading-6 text-slate-500">
                {e.period}
              </div>
              <div className="card p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{e.title}</h3>
                    <p className="mt-1 font-mono text-sm text-cyanx">
                      {e.company}
                    </p>
                  </div>
                  <span className="chip">{e.project}</span>
                </div>
                <p className="mt-5 font-mono text-xs leading-6 text-slate-500">
                  {e.stack}
                </p>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {e.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                    >
                      <ChevronRight
                        size={16}
                        className="mt-1 shrink-0 text-cyanx"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      {/* ==================== PROJECTS ==================== */}
      <section
        id="projects"
        className="border-y border-line/70 bg-white/[.015]"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <p className="label">03 / projects</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Proof of work.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            Professional work is presented transparently as experience. Personal
            projects demonstrate my transition from frontend engineering to
            full-stack MERN development.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <motion.button
                whileHover={{ y: -5 }}
                onClick={() => setOpen(p[0] as string)}
                key={p[0] as string}
                className="card group p-7 text-left hover:border-cyanx/30"
              >
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-cyanx">0{i + 1}</span>
                  <span className="font-mono text-[10px] uppercase text-slate-600">
                    {p[1]}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-bold text-white group-hover:text-cyanx">
                  {p[0]}
                </h3>
                <p className="mt-5 text-sm leading-7 text-slate-400">{p[2]}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {(p[3] as string[]).map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-7 border-t border-line pt-5 font-mono text-xs text-greenx">
                  {p[4] as string}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      {/* ==================== SKILLS ==================== */}
      <section id="skills" className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <p className="label">04 / toolkit</p>
        <h2 className="mt-3 text-3xl font-bold text-white">
          Tools I use to ship.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div className="card p-6" key={group}>
              <div className="flex items-center gap-3">
                <Code2 size={17} className="text-cyanx" />
                <h3 className="font-mono text-sm font-bold text-white">
                  {group}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((x) => (
                  <span className="chip" key={x}>
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="border-t border-line/70">
        <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <div className="card p-8 md:p-12">
            <p className="label">05 / contact</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black text-white md:text-5xl">
              Have a role where React meets full-stack engineering?
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-400">
              I'm looking for opportunities where I can contribute my React and
              TypeScript experience while building scalable full-stack
              applications using the MERN stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="primary" href={"mailto:" + profile.email}>
                <Mail size={16} className="mr-2" />
                Email me
              </a>
              <a
                className="secondary"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </a>
              <a
                className="secondary"
                href={profile.medium}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={16} className="mr-2" />
                Medium
              </a>
            </div>
          </div>
          {/* ==================== FOOTER ==================== */}
          <footer className="flex justify-between py-8 text-xs text-slate-600">
            <span className="font-mono">© 2026 Niharika Srinivas</span>
            <div className="flex gap-5 font-mono">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyanx"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyanx"
              >
                LinkedIn
              </a>
            </div>
          </footer>
        </div>
      </section>
      {/* ==================== PROJECT MODAL ==================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-5 backdrop-blur-md"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              onClick={(e) => e.stopPropagation()}
              className="card max-w-xl p-7"
            >
              <div className="flex justify-end">
                <button onClick={() => setOpen(null)} aria-label="Close">
                  <X />
                </button>
              </div>
              <h3 className="text-3xl font-bold text-white">{open}</h3>
              <p className="mt-5 leading-7 text-slate-400">
                {projects.find((p) => p[0] === open)?.[2] as string}
              </p>
              <p className="mt-5 font-mono text-sm text-greenx">
                {projects.find((p) => p[0] === open)?.[4] as string}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
