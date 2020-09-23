import styled from "styled-components";
import Link from "next/link";

import BottomTabBarItem, { BottomTabBarItemType } from "~/components/BottomTabBarItem";

const BottomTabBar = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Logo>83.</Logo>
      </Link>
      <BottomTabBarItemWrapper>
        <BottomTabBarItem iconType={BottomTabBarItemType.MailList} />
        <BottomTabBarItem iconType={BottomTabBarItemType.MyPage} />
      </BottomTabBarItemWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 0 30px;

  height: 85px;

  box-sizing: border-box;

  background-color: rgba(0, 0, 0, 0.2);

  @media (min-width: 520px) {
    left: calc((100vw - 520px) / 2);
    width: 520px;
    right: auto;
  }
`;

const BottomTabBarItemWrapper = styled.div`
  flex: 2;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Logo = styled.a`
  align-self: center;

  font-weight: 600;
  font-size: 22px;
`;

export default BottomTabBar;
