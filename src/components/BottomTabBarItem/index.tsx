import React from "react";
import styled from "styled-components";

import MailListIcon from "./MailListIcon";
import MyPageIcon from "./MyPageIcon";

export enum BottomTabBarItemType {
  MailList = "편지함",
  MyPage = "마이",
}

interface BottomTabBarItemProps {
  iconType: BottomTabBarItemType;
}

const BottomTabBarItem: React.FC<BottomTabBarItemProps> = (props) => {
  const { iconType } = props;

  const iconMap: Record<BottomTabBarItemType, React.FC> = {
    [BottomTabBarItemType.MailList]: MailListIcon,
    [BottomTabBarItemType.MyPage]: MyPageIcon,
  };

  const Icon = iconMap[iconType];

  if (!Icon) return null;

  return (
    <Wrapper>
      <Icon />
      <Label>{iconType}</Label>
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

const Label = styled.span`
  margin-top: 10px;

  font-weight: 300;
`;

export default BottomTabBarItem;
