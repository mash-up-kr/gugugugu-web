import React from "react";
import styled from "styled-components";
import Link from "next/link";

export enum BottomTabBarItemType {
  MailList = "편지함",
  MyPage = "마이",
}

interface BottomTabBarItemProps {
  iconType: BottomTabBarItemType;
}

const BottomTabBarItem: React.FC<BottomTabBarItemProps> = (props) => {
  const { iconType } = props;

  const linkMap: Record<BottomTabBarItemType, string> = {
    [BottomTabBarItemType.MailList]: "/mails",
    [BottomTabBarItemType.MyPage]: "/mypage",
  };

  const link = linkMap[iconType];

  return (
    <Wrapper>
      <Link href={link}>
        <Anchor>
          <Label>{iconType}</Label>
        </Anchor>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 40px;
`;

const Anchor = styled.a`
  text-decoration: none;
`;

const Label = styled.span`
  font-weight: 300;
`;

export default BottomTabBarItem;
