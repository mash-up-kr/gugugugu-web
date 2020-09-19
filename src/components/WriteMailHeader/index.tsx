import React from "react";
import styled from "styled-components";
import Link from "next/link";

const BackIcon: React.FC = () => {
  return (
    <svg
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="11" height="20" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.0909091 0.05)" />
        </pattern>
        <image
          id="image0"
          width="11"
          height="20"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAUCAYAAABbLMdoAAAA30lEQVQ4EY3RvyvFURjA4XNvfkaSUrolJUUGWWSRv89gMljuYFIWZbklEoMy2A0yMFCSRDJYHh3e8Z7vccbzPp8zvCelysEUTrHYSDGBa3+nV8QYw2XAG0z3xRjBWcA7dEpwCL2AD5grwQEcBnzCQgm2sR/wBcsl2EI34BtW+8J8iZ2AH1hvglsBv7BZhCmldkrpO0ArpTTYhH9n2I7XP7Hxn2A3gnesNQbIG9mL4BUrtSDv+iCCZyzVgvyLRxE8Yr4WDOM4gnvM1oJRXERwi5laMI6rCM4bcR5iEid5Oz+cxC8HleqBEAAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

const WriteMailHeader: React.FC = () => {
  return (
    <Header>
      <Link href="/">
        <a>
          <BackIcon />
        </a>
      </Link>
      <div>1 / 4</div>
      <div></div>
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

export default WriteMailHeader;