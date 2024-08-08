import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Design Principle 1',
    Svg: require('@site/static/img/start.svg').default,
    description: (
      <>
        Every element in our design system is crafted with the user's needs and comfort in mind. From intuitive navigation to accessible color schemes, Golem puts the user first.
      </>
    ),
  },
  {
    title: 'Design Principle 2',
    Svg: require('@site/static/img/middle.svg').default,
    description: (
      <>
        While we empower designers with flexible and powerful tools, we've built in safeguards to prevent designs that could negatively impact user experience. Golem strikes a balance between creativity and usability.
      </>
    ),
  },
  {
    title: 'Design Principle 3',
    Svg: require('@site/static/img/test.svg').default,
    description: (
      <>
       Our components are built to be robust and maintainable, ensuring longevity and consistency across projects. However, this never comes at the cost of user experience or design intent.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
