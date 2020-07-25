import React from "react";
import styled from "styled-components";

import MailBoxHeader from "~/components/MailBoxHeader";
import MailBox from "~/components/MailBox";
import BottomTabBar from "~/components/BottomTabBar";

const Main = () => {
  return (
    <>
      <MailBoxHeader />
      <MainPageLayout>
        <MailBox />
      </MainPageLayout>
      <BottomTabBar />
    </>
  );
};

const MainPageLayout = styled.main`
  display: flex;
  flex-direction: column;

  padding-top: 130px;
  margin-bottom: 85px;
`;

export default Main;
