import React from "react";
import styled from "styled-components";

const WriteMailContent: React.FC = () => {
  return <NotYet>아직 못 만들었어요 ㅠㅠ</NotYet>;
};

const NotYet = styled.main`
  height: calc(100vh - 57px);

  text-align: center;
  line-height: calc(100vh - 57px);
`;

export default WriteMailContent;
