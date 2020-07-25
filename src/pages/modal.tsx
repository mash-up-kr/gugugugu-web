import React from "react";

import WriteMailHeader from "~/components/WriteMailHeader";
import WriteMailContent from "~/components/WriteMailContent";

const WriteMailModal: React.FC = () => {
  return (
    <>
      <WriteMailHeader />
      <WriteMailContent />
    </>
  );
};

export default WriteMailModal;
