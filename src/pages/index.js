import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
  <img src="img/logo.svg" alt="Logo" className={styles['homepage-logo']} />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="sellingpoints">
          <ul>
            <li>Write in markdown</li>
            <li>Re-use existing glossaries</li>
            <li>Hosted on Github</li>
            <li>Export to standards (ISO, W3C)</li>
          </ul>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction/intro">
            Let's start
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
      description="Create rich specification documents for standards bodies and engineering projects">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
