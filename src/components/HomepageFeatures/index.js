import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link'; // Import Link component


const FeatureList = [
  {
    title: 'Content Authors',
    subtitle: '…',
    Svg: require('@site/static/img/specup_logo.svg').default,
    description: (
      <></>
    ),
    url: './docs/content-author-guide/introduction',
  },
  {
    title: 'Terminology Authors',
    subtitle: '…',
    Svg: require('@site/static/img/specup_logo.svg').default,
    description: (
      <></>
    ),
    url: './docs/terminology-author-guide/introduction',
  },
  {
    title: 'Curators',
    subtitle: '…',
    Svg: require('@site/static/img/specup_logo.svg').default,
    description: (
      <></>
    ),
    url: './docs/curator-guide/introduction',
  },
];

function Feature({ Svg, title, subtitle, description, url }) {
  return (
    (
      <div className={clsx('col col--4')}>
        <a className='feature-block' href={`${url}`}>
          <div className="margin-top--lg text--center padding-horiz--md">
            <h3>{title}</h3>
            {/* <p>{subtitle}</p> */}
            <p>{description}</p>
          </div>

          <div className="margin-top--lg text--center">
            <Svg className={styles.featureSvg} role="img" />
          </div>
        </a>
      </div>
    )
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {/* <div className="container"> */}
      {/* <div className="row"> */}
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
      {/* </div> */}
      {/* </div> */}
    </section>
  );
}
