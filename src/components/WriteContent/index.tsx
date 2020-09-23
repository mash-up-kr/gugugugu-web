import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { writeMailSelector, WriteStep, setMailContent } from "~/features/writeMail";

const CONTENT_TYPE = WriteStep.Content;

const WriteContent: React.FC = () => {
  const { mailContent } = useSelector(writeMailSelector);

  const dispatch = useDispatch();

  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    el.innerText = mailContent[CONTENT_TYPE];
    el.focus();
  }, []);

  return (
    <Section>
      <Question>편지를 작성해주세요.</Question>
      <Input>
        <div
          ref={inputRef}
          contentEditable
          onKeyUp={() => {
            if (!inputRef.current) return;
            dispatch(setMailContent({ contentType: CONTENT_TYPE, content: inputRef.current?.innerText }));
          }}
        />
      </Input>
    </Section>
  );
};

const Section = styled.section`
  margin: 0 20px;
`;

const Question = styled.p`
  margin-top: 83px;
`;

const Input = styled.div`
  margin-top: 37px;
  padding-left: 17px;

  width: 100%;
  border-left: 1px solid #f8c131;

  line-height: 20px;
  font-weight: 300;
`;

export default WriteContent;
