import React from "react";

import MainHeader from "~/components/MainHeader";
import MailCardList from "~/components/MailCardList";
import BottomTabBar from "~/components/BottomTabBar";

const MainPageContent: React.FC = () => {
  return (
    <main>
      <MailCardList />
    </main>
  );
};

const Main = () => {
  return (
    <>
      <MainHeader />
      <MainPageContent />
      <BottomTabBar />
    </>
  );
};

export default Main;
