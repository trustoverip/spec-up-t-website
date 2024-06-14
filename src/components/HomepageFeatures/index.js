import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'A tool for writing specifications',
    Svg: require('@site/static/img/specup_logo.svg').default,
    description: (
      <>
        Spec-Up-T is a tool for writing specifications.
      </>
    ),
  },
  {
    title: 'In a user-friendly format',
    Svg: require('@site/static/img/specup_logo.svg').default,
    description: (
      <>
        Spec-Up-T is written in markdown.
      </>
    ),
  },
  {
    title: 'Powered by Node.js',
    Svg: require('@site/static/img/specup_logo.svg').default,
    description: (
      <>
        Spec-Up-T is written in Node.js.
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
