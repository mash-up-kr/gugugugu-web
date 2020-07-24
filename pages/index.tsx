import { GetStaticProps } from 'next';

import styles from './hello.module.scss';

const Home = () => {
  return <div className={styles.hello}>gugugugu</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Home;
