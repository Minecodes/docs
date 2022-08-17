import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  //Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '',
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Information',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate>
        Here are not all repositories of Github and Gitlab.
        Why? Simple. They're not all by me, public, finished or maintained.
        Don't worry, this will be extended in the future.
        Maybe I'm adding repos from C0D3LUN4, netDevils, Tasudo, HomakiThemes or foxes-pkg later.
      </Translate>
    ),
  },
  {
    title: '',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        
      </>
    ),
  },
];

function Feature({title, /**Svg,**/ description}: FeatureItem) {
/**
<div className="text--center">
  <Svg className={styles.featureSvg} role="img" />
</div>
 */
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
