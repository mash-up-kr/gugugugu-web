import React from "react";
import styled from "styled-components";

const MailCardItem: React.FC = () => {
  return (
    <Card>
      <Time>JUL 21</Time>
      <Title>바람의 무법자가 보낸 편지</Title>
    </Card>
  );
};

const Card = styled.article`
  width: 241px;
  height: 344px;

  border-radius: 8px;
  background-color: #2c80ff;
`;

const Time = styled.time`
  display: inline-block;

  margin: 24px 0 10px 24px;

  font-weight: 500;
  font-size: 10px;
`;

const Title = styled.h3`
  margin-left: 24px;

  width: 152px;

  font-weight: bold;
  font-size: 24px;

  line-height: 29px;
`;

export default MailCardItem;
