import { GetStaticProps } from "next";
import styled from "styled-components";

import Hello from "~/components/Hello";

const Home = () => {
  return (
    <StyledWrapper>
      gugugugu
      <Hello />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  color: red;
`;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Home;
