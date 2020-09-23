import React, { useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import BackIcon from "~/icons/Back";
import {
  writeMailSelector,
  currentInputFilledStatusSelector,
  movePrevStep,
  moveNextStep,
  WriteStep,
} from "~/features/writeMail";

const WriteMailHeader: React.FC = () => {
  const { step } = useSelector(writeMailSelector);
  const isCurrentInputFilled = useSelector(currentInputFilledStatusSelector);
  const dispatch = useDispatch();

  const handlePrevButtonClick = useCallback(
    (event: React.MouseEvent) => {
      if (step !== WriteStep.Receiver) event.preventDefault();

      dispatch(movePrevStep());
    },
    [step, isCurrentInputFilled],
  );

  const handleNextButtonClick = useCallback(
    (event: React.MouseEvent) => {
      if (step !== WriteStep.Check) event.preventDefault();
      if (!isCurrentInputFilled) return alert("내용을 채워주세요");

      dispatch(moveNextStep());
    },
    [step, isCurrentInputFilled],
  );

  return (
    <Header>
      <Link href="/">
        <a onClick={handlePrevButtonClick}>
          <BackIcon />
        </a>
      </Link>
      <div>{step} / 4</div>
      <Link href="/success">
        <NextLink onClick={handleNextButtonClick}>{step === WriteStep.Check ? "전송" : "다음"}</NextLink>
      </Link>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;

  height: 57px;

  background-color: rgba(0, 0, 0, 0.28);
`;

const NextLink = styled.a`
  text-decoration: none;
`;

export default WriteMailHeader;
