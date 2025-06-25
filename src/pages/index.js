import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import '@docsearch/css'; // Import Algolia search styles
import { DocSearch } from '@docsearch/react';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner, styles.modernHero)}>
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          Learn. Build. Document.
        </Heading>
        <p className={styles.heroSubtitle}>
          My journey through modern web technologies
        </p>

      {/* Algolia Search Box */}
      {/* <div className={styles.docSearchWrapper}>
        <DocSearch
          appId="M3NYB9R6NK"
          indexName="learn-sandeepprasad"
          apiKey="0ca4557fdd41beccebcbfc4c31c217a0"
        />
      </div> */}

        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Start Exploring 🚀
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


      <HomepageHeader />
      <main>
        <HomepageFeatures />



      </main>
    </Layout>
  );
}
