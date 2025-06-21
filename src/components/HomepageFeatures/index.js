import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🎯 Frontend Technologies',
    description: (
      <>
        Explore my journey through React ecosystem, state management, UI libraries, 
        authentication, and modern frontend development practices. From basic setup 
        to advanced concepts.
      </>
    ),
    link: '/docs/category/frontend-technologies',
    icon: '⚛️',
  },
  {
    title: '⚙️ Backend Technologies',
    description: (
      <>
        Dive into server-side development, real-time communication with Socket.io, 
        authentication systems, and security implementations. Learn about building 
        robust backend services and APIs.
      </>
    ),
    link: '/docs/category/backend-technologies',
    icon: '🔧',
  },
  {
    title: '📝 Blog & Insights',
    description: (
      <>
        Read my thoughts, experiences, and insights about technology, learning, 
        and development. From project stories to technical deep-dives, 
        sharing what I learn along the way.
      </>
    ),
    link: '/blog',
    icon: '✍️',
  },
];

function Feature({title, description, link, icon}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <span className={styles.iconText}>{icon}</span>
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
          <Link to={link} className={styles.featureLink}>
            Explore Now →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresTitle}>
            What I'm Learning & Documenting
          </Heading>
          <p className={styles.featuresSubtitle}>
            A curated collection of my learning journey through modern web technologies
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
