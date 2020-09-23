import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { writeMailSelector, WriteStep } from "~/features/writeMail";

const WriteCheck: React.FC = () => {
  const { mailContent } = useSelector(writeMailSelector);

  return (
    <section>
      <Receiver>{mailContent[WriteStep.Receiver]}</Receiver>
      <Title>{mailContent[WriteStep.Title]}</Title>
      <Content>{mailContent[WriteStep.Content]}</Content>
    </section>
  );
};

const Receiver = styled.p`
  margin-top: 32px;
  margin-left: 16px;
`;

const Title = styled.p`
  margin-top: 10px;
  margin-left: 16px;

  font-size: 22px;
`;

const Content = styled.p`
  margin-top: 42px;
  margin-left: 16px;
`;

export default WriteCheck;
