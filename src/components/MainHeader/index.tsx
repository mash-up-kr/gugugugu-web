import React from "react";
import styled from "styled-components";

import AlertIcon from "~/icons/Alert";

const MainHeader: React.FC = () => {
  return (
    <Header>
      <WelcomePhrase>
        <Name>도토리님</Name>
        <span>안녕하세요</span>
      </WelcomePhrase>
      <AlertIcon />
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  height: 140px;

  font-size: 22px;
`;

const WelcomePhrase = styled.p`
  display: flex;
  flex-direction: column;

  font-weight: 300;
`;

const Name = styled.span`
  font-weight: 600;
`;

export default MainHeader;
