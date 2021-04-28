import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import trans from '../i18n';

const FeatureList = [
  {
    title: trans['en']['LearnAboutConflux'],
    Svg: require('../../static/img/security-dark.svg').default,
    description: (
      <>
        {trans['en']['homepage/LearnDescription']}
      </>
    ),
    link: '/docs/introduction/en/conflux_overview',
    buttonText: 'Learn'
  },
  {
    title: trans['en']['RunANode'],
    Svg: require('../../static/img/extensive-dark.svg').default,
    description: (
      <>
        {trans['en']['homepage/RunDescription']}
      </>
    ),
    link: '/docs/conflux-doc/docs/get_started',
    buttonText: 'Run'
  },
  {
    title: trans['en']['StartBuild'],
    Svg: require('../../static/img/scalability-dark.svg').default,
    description: (
      <>
        {trans['en']['homepage/BuildDescription']}
      </>
    ),
    link: '/docs/conflux-doc/docs/send_transaction',
    buttonText: 'Build'
  },
];

function Feature({Svg, title, description, buttonText, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><a className={clsx('button button--secondary')} href={link}>{buttonText}</a></p>
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
