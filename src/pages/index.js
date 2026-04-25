import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import '@docsearch/css';

function HomepageHero() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.glowRadial} />
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroTitle}>
          Learn.<br />
          Build.<br />
          Document.
        </Heading>
        <div className={styles.buttons}>
          <Link className={styles.primaryButton} to="/docs/intro">
            Start exploring
          </Link>
          <Link className={styles.secondaryButton} to="/blog">
            Latest updates
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A personal collection of technology notes, guides, and discoveries.">
      <main>
        <HomepageHero /> 
      </main>
    </Layout>
  );
}