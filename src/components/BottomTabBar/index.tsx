import styled from "styled-components";

import Logo from "~/components/Logo";
import TabItem from "~/components/BottomTabBar/TabItem";

interface Props {
  TabItems?: any[];
}

const BottomTabBar = (props: Props) => {
  const { TabItems = tabItems } = props;
  return (
    <Wrapper>
      <StyledLogo />
      <TabItemsWrapper>{TabItems.map((Item) => Item)}</TabItemsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  position: fixed;
  bottom: 0;
  left: 0;
  height: 4rem;
  width: 100%;
  background-color: grey;
`;

const StyledLogo = styled(Logo)`
  flex: 1;

  align-self: center;
`;

const TabItemsWrapper = styled.div`
  flex: 2;

  display: flex;
  flex-direction: row;
`;

const WipIcon = styled.div`
  width: 1rem;
  height: 1rem;

  background-color: red;
`;

const tabItems = [
  <TabItem Icon={<WipIcon />} label="편지함" key="편지함" />,
  <TabItem Icon={<WipIcon />} label="마이페이지" key="마이페이지" />,
];

export default BottomTabBar;
