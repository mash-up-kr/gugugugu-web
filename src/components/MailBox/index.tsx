import React from "react";
import styled from "styled-components";

interface MailProps {
  date?: Date;
  from?: string;
  to?: string;
  color: string;
}

const mockDate = [
  {
    date: new Date(),
    from: "다람쥐",
    color: "#FD7223",
  },
  {
    date: new Date(),
    to: "고마운 다민이",
    color: "#57CC8C",
  },
  {
    date: new Date(),
    from: "귀여운 다람쥐",
    color: "#4937F2",
  },
  {
    date: new Date(),
    to: "고마운 다민이",
    color: "#FF92C6",
  },
  {
    date: new Date(),
    from: "다람쥐",
    color: "#FD7223",
  },
  {
    date: new Date(),
    to: "고마운 다민이",
    color: "#57CC8C",
  },
  {
    date: new Date(),
    from: "귀여운 다람쥐",
    color: "#4937F2",
  },
  {
    date: new Date(),
    to: "고마운 다민이",
    color: "#FF92C6",
  },
];

const MailCard: React.FC<MailProps> = (props) => {
  const { to, from, color } = props;
  return (
    <Mail color={color}>
      <Time>
        <Month>07</Month>
        <Day>25</Day>
      </Time>
      <Title>{to ? `${to}에게 받은 편지` : `${from}에게 보낸 편지`}</Title>
    </Mail>
  );
};

const MailBox: React.FC = () => {
  return (
    <Wrapper>
      {mockDate.map((item, index) => (
        <MailCard {...item} key={index} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Mail = styled.article`
  position: relative;

  margin: 0 16px 16px 16px;

  width: calc(100% - 32px);
  height: 120px;

  border-radius: 6px;

  box-sizing: border-box;

  background-color: ${(props) => props.color || "#FD7223"};
`;
const Time = styled.time`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

  position: absolute;
  top: 37px;
  left: 18px;

  font-family: "Montserrat", sans-serif;
  font-size: 25px;
`;
const Month = styled.div`
  width: fit-content;

  line-height: 30px;
`;
const Day = styled.div`
  width: fit-content;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;

  position: absolute;
  top: 17px;
  right: 34px;
`;

export default MailBox;
