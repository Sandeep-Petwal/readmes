import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import '@docsearch/css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackground}>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
          <div className={styles.shape4}></div>
        </div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>
          <span>✨ Continuously Learning</span>
        </div>
        
        <Heading as="h1" className={styles.heroTitle}>
          Learn. Build. <span className={styles.highlight}>Document.</span>
        </Heading>
        
        <p className={styles.heroSubtitle}>
          Your gateway to modern web technologies, carefully curated notes, 
          and hands-on tutorials from my development journey.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Guides</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>15+</span>
            <span className={styles.statLabel}>Technologies</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>∞</span>
            <span className={styles.statLabel}>Learning</span>
          </div>
        </div>

        <div className={styles.buttons}>
          <Link
            className={clsx("button", styles.primaryButton)}
            to="/docs/intro">
            <span>Start Exploring</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          <Link
            className={clsx("button", styles.secondaryButton)}
            to="/blog">
            <span>Latest Updates</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function TechStack() {
  const technologies = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'GraphQL', icon: '🔗', color: '#E10098' },
    { name: 'AWS', icon: '☁️', color: '#FF9900' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
  ];

  return (
    <section className={styles.techStack}>
      <div className={styles.container}>
        <Heading as="h2" className={styles.sectionTitle}>
          Technologies I Explore
        </Heading>
        <p className={styles.sectionSubtitle}>
          Diving deep into modern web technologies and sharing practical insights
        </p>
        
        <div className={styles.techGrid}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techCard}>
              <div className={styles.techIcon} style={{ backgroundColor: `${tech.color}20` }}>
                <span>{tech.icon}</span>
              </div>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningPath() {
  const paths = [
    {
      title: "Frontend Mastery",
      description: "React, Next.js, TypeScript, and modern CSS frameworks",
      icon: "🎨",
      progress: 85,
      link: "/docs/frontend"
    },
    {
      title: "Backend Engineering",
      description: "Node.js, Python, databases, and API development",
      icon: "⚙️",
      progress: 75,
      link: "/docs/backend"
    },
    {
      title: "DevOps & Cloud",
      description: "Docker, AWS, CI/CD, and infrastructure automation",
      icon: "☁️",
      progress: 60,
      link: "/docs/devops"
    },
    {
      title: "Data & AI",
      description: "Machine learning, data analysis, and AI integration",
      icon: "🤖",
      progress: 45,
      link: "/docs/ai"
    }
  ];

  return (
    <section className={styles.learningPath}>
      <div className={styles.container}>
        <Heading as="h2" className={styles.sectionTitle}>
          My Learning Journey
        </Heading>
        <p className={styles.sectionSubtitle}>
          Structured paths through different domains of technology
        </p>
        
        <div className={styles.pathGrid}>
          {paths.map((path, index) => (
            <div key={index} className={styles.pathCard}>
              <div className={styles.pathIcon}>
                <span>{path.icon}</span>
              </div>
              <div className={styles.pathContent}>
                <h3 className={styles.pathTitle}>{path.title}</h3>
                <p className={styles.pathDescription}>{path.description}</p>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${path.progress}%` }}
                  ></div>
                </div>
                <div className={styles.progressText}>
                  {path.progress}% Complete
                </div>
              </div>
              <Link to={path.link} className={styles.pathLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentUpdates() {
  const updates = [
    {
      title: "Advanced React Patterns",
      description: "Exploring compound components, render props, and custom hooks",
      date: "2 days ago",
      type: "Tutorial",
      link: "/docs/react-patterns"
    },
    {
      title: "Docker Multi-Stage Builds",
      description: "Optimizing container images for production deployments",
      date: "1 week ago",
      type: "Guide",
      link: "/docs/docker-builds"
    },
    {
      title: "GraphQL Best Practices",
      description: "Schema design, query optimization, and error handling",
      date: "2 weeks ago",
      type: "Notes",
      link: "/docs/graphql-best-practices"
    }
  ];

  return (
    <section className={styles.recentUpdates}>
      <div className={styles.container}>
        <div className={styles.updatesHeader}>
          <div>
            <Heading as="h2" className={styles.sectionTitle}>
              Recent Updates
            </Heading>
            <p className={styles.sectionSubtitle}>
              Fresh insights and newly documented learnings
            </p>
          </div>
          <Link to="/blog" className={styles.viewAllLink}>
            View All Updates
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        
        <div className={styles.updatesGrid}>
          {updates.map((update, index) => (
            <div key={index} className={styles.updateCard}>
              <div className={styles.updateMeta}>
                <span className={styles.updateType}>{update.type}</span>
                <span className={styles.updateDate}>{update.date}</span>
              </div>
              <h3 className={styles.updateTitle}>{update.title}</h3>
              <p className={styles.updateDescription}>{update.description}</p>
              <Link to={update.link} className={styles.updateLink}>
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A personal collection of technology notes, guides, and discoveries.">
      <HomepageHeader />
      <main>
        {/* <TechStack /> */}
        {/* <HomepageFeatures /> */}
        {/* <LearningPath /> */}
        {/* <RecentUpdates /> */}
      </main>
    </Layout>
  );
}