import React from "react";
import styled from "styled-components";
import Link from "next/link";

import MainHeader from "~/components/MainHeader";
import MailCardList from "~/components/MailCardList";
import BottomTabBar from "~/components/BottomTabBar";

const Main = () => {
  return (
    <>
      <MainHeader />
      <MainPageLayout>
        <MailCardList />
        <Link href="/modal">
          <WriteMailButton>새로운 편지쓰기</WriteMailButton>
        </Link>
      </MainPageLayout>
      <BottomTabBar />
    </>
  );
};

const MainPageLayout = styled.main`
  display: flex;
  flex-direction: column;

  margin-bottom: 85px;
`;

const WriteMailButton = styled.button`
  margin: 30px 20px;

  height: 73px;

  font-weight: 600;
  font-size: 15px;
  text-align: center;

  background: #fbcb51;
  border-radius: 5px;
`;

export default Main;
