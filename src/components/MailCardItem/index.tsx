import React from "react";
import styled from "styled-components";

interface MailCardItemProps {
  templateNumber: number;
}

const MailCardItem: React.FC<MailCardItemProps> = (props) => {
  const { templateNumber } = props;

  return (
    <Card templateNumber={templateNumber}>
      <Time>JUL 21</Time>
      <Title>바람의 무법자가 보낸 편지</Title>
    </Card>
  );
};

const Card = styled.article`
  width: 241px;
  height: 344px;

  border-radius: 8px;
  background-image: url(${(props: { templateNumber: number }) => `/template-${props.templateNumber}.png`});
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
