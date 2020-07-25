import React from "react";
import styled from "styled-components";

import MailCardItem from "~/components/MailCardItem";

const MailCardList: React.FC = () => {
  const mockData = new Array(10).fill(10);

  return (
    <CardList>
      {mockData.map((_, index) => (
        <li key={index}>
          <MailCardItem />
        </li>
      ))}
    </CardList>
  );
};

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
