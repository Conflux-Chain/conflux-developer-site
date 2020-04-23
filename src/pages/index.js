import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useThemeContext from '@theme/hooks/useThemeContext';
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Scalability</>,
    imageUrl: {
      dark: "img/scalability-dark.svg",
      light: "img/scalability-light.svg",
    },
    description: (
      <>
        By adopting an scalability consensus mechanism and safely retaining fork
        blocks, Conflux realized a high throughput rate of 3000-6000 TPS in our
        real-network testing.
      </>
    ),
  },
  {
    title: <>Extensibility</>,
    imageUrl: {
      dark: "img/extensive-dark.svg",
      light: "img/extensive-light.svg",
    },
    description: (
      <>
        Blockchain oracle combined with cryptographic tools to realize powerful
        features such as external data feeding, confidential data control, and
        beyond.
      </>
    ),
  },
  {
    title: <>Security</>,
    imageUrl: {
      dark: "img/security-dark.svg",
      light: "img/security-light.svg",
    },
    description: (
      <>
        Ensured by 2 Dimensional protection - Anti double-spend attack
        protection (consensus-level) and contract code proofreading
        (application-level).
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const { isDarkTheme } = useThemeContext();
  const theme = isDarkTheme ? "dark" : "light";
  const imgUrl = useBaseUrl(imageUrl[theme]);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("/docs/introduction/en/conflux_overview")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature
                    key={idx}
                    {...props}
                    imageUrl={props.imageUrl}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
