import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Learn with Sandeep"
      description="My personal knowledge hub documenting everything I learn.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Learn with Sandeep</h1>
          <p className="hero__subtitle">A journey of documenting everything I learn across the world of tech.</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Start Reading 📚
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className="container">
            <h2>📌 About This Website</h2>
            <p>
              <strong>learn.sandeepprasad.xyz</strong> is my personal collection of notes, deep-dives, and documentation that I write while learning different technologies.
              From Git and Docker to full-stack development, this is my second brain 🧠 — a place where I document what I learn in a way I can always revisit, reuse, and share.
            </p>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <h2>🛠️ What's Inside</h2>
            <ul>
              <li>✅ Hands-on guides and notes</li>
              <li>📂 Organized by topic: Git, Docker, Node, Redis, etc.</li>
              <li>💡 Written as I learn — real, raw, and relevant</li>
              <li>🔖 Easy to search, bookmark, and come back to</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2>👨‍💻 Why I Built This</h2>
            <p>
              I’m someone who learns best by teaching myself and writing it down. I’ve always made personal notes in Markdown while exploring new tools, systems, or ideas.
              But those notes used to stay lost in folders. Now, with this website, I’ve turned them into a searchable, organized, and public knowledge base — which also reflects
              my learning journey to the world.
            </p>
            <p>
              It’s not just for me — if you find these notes helpful, feel free to explore and learn with me!
            </p>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <h2>📬 Want to Reach Out?</h2>
            <p>
              I love collaborating, learning, and building with others. If you’d like to connect, suggest improvements, or contribute:
            </p>
            <ul>
              <li>📧 Email: youremail@example.com</li>
              <li>💬 GitHub: <a href="https://github.com/yourusername">yourusername</a></li>
              <li>🌐 Portfolio: <a href="https://sandeepprasad.xyz">sandeepprasad.xyz</a></li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
