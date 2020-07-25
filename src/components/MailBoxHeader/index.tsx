import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MainHeader: React.FC = () => {
  const [isTransformed, setTrasformStatus] = useState(false);

  const handleHeaderNavigationChange = () => {
    if (window.pageYOffset > 10) {
      setTrasformStatus(true);
      return;
    }
    setTrasformStatus(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderNavigationChange);
    return () => {
      window.removeEventListener("scroll", handleHeaderNavigationChange);
    };
  });

  return (
    <Header className={isTransformed ? "isTransformed" : ""}>
      <WelcomePhrase>
        <Name className={isTransformed ? "isTransformed" : ""}>도토리님</Name>
        <span>편지함</span>
      </WelcomePhrase>
      <Navigation className={isTransformed ? "isTransformed" : ""}>
        <NavList>
          <NavItem selected>전체</NavItem>
          <NavItem>보낸 편지</NavItem>
          <NavItem>받은 편지</NavItem>
        </NavList>
      </Navigation>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  box-sizing: border-box;

  position: fixed;

  padding: 0 20px;

  width: 100%;
  height: 140px;

  font-size: 22px;

  background-color: #1f1f20;
  z-index: 2;

  &.isTransformed {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-top: 41px;
    padding-bottom: 21px;

    width: 100%;
    height: fit-content;
  }
`;

const WelcomePhrase = styled.p`
  display: flex;
  flex-direction: column;

  font-weight: 600;

  line-height: 26px;
`;

const Name = styled.span`
  font-weight: 300;

  &.isTransformed {
    display: none;
  }
`;

const Navigation = styled.nav`
  margin-top: 9px;

  font-size: 15px;

  &.isTransformed {
    margin-top: 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const NavItem = styled.li`
  margin-right: 15px;

  font-weight: ${(props: { selected?: boolean }) => (props.selected ? 600 : 300)};
  color: ${(props: { selected?: boolean }) => (props.selected ? "#fff" : "#737373")};
`;

export default MainHeader;
