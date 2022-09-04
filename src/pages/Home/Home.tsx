import React from 'react';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.root__intro}>Full-stack Web Developer</h1>
      <span className={styles.root__describe}>and a little bit designer</span>
    </div>
  );
};

export default Home;
