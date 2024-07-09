import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link'; // Import Link component


const FeatureList = [
  {
    title: 'Content Authors',
    Svg: require('@site/static/img/specup_logo.svg').default,
    description: (
      <>
        <Link to="/docs/content-author-guide/introduction">→ Content Authors guide</Link>.
      </>
    ),
  },
  {
    title: 'Termsdef Authors',
    Svg: require('@site/static/img/specup_logo.svg').default,
    description: (
      <>
        <Link to="/docs/terminology-author-guide/introduction">→ Termsdef Authors guide</Link>
      </>
    ),
  },
  {
    title: 'Curators',
    Svg: require('@site/static/img/specup_logo.svg').default,
    description: (
      <>
        <Link to="/docs/curator-guide/introduction">→ Curators Guide</Link>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
