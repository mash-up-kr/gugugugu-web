import React from "react";
import { useSelector } from "react-redux";

import WriteReceiver from "~/components/WriteReceiver";
import WriteTitle from "~/components/WriteTitle";
import WriteContent from "~/components/WriteContent";
import WriteCheck from "~/components/WriteCheck";
import { writeMailSelector, WriteStep } from "~/features/writeMail";

const inputSectionMap: Record<WriteStep, React.FC> = {
  [WriteStep.Receiver]: () => <WriteReceiver />,
  [WriteStep.Title]: () => <WriteTitle />,
  [WriteStep.Content]: () => <WriteContent />,
  [WriteStep.Check]: () => <WriteCheck />,
};

const WriteMailContent: React.FC = () => {
  const { step } = useSelector(writeMailSelector);

  const InputSection = inputSectionMap[step];

  return (
    <main>
      <InputSection />
    </main>
  );
};

export default WriteMailContent;
