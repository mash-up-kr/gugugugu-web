import React from "react";
import styled from "styled-components";

import MailCardItem from "~/components/MailCardItem";

const MailCardList: React.FC = () => {
  const mockData = [1, 2, 3, 1, 2, 3];

  return (
    <>
      <Description>새로운 편지</Description>
      <CardList>
        {mockData.map((templateNumber, index) => (
          <li key={index}>
            <MailCardItem templateNumber={templateNumber} />
          </li>
        ))}
      </CardList>
    </>
  );
};

const Description = styled.div`
  margin: 0 0 20px 20px;

  font-size: 16px;
`;

const CardList = styled.ul`
  display: flex;
  flex-direction: row;

  overflow-x: scroll;

  box-sizing: border-box;

  li:nth-child(n) {
    margin-left: 10px;
  }
`;

export default MailCardList;
