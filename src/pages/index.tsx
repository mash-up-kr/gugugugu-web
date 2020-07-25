import { GetStaticProps } from "next";

import styles from "~/pages/hello.module.scss";
import Hello from "~/components/Hello";

const Home = () => {
  return (
    <div className={styles.hello}>
      gugugugu
      <Hello />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Home;
