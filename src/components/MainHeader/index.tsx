import React from "react";
import styled from "styled-components";

const AlertIcon: React.FC = () => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="16" height="20" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.0625 0.05)" />
        </pattern>
        <image
          id="image0"
          width="16"
          height="20"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAA00lEQVQ4Ee2RQQrCQAxFo0hxIUV6ES/guuCdXPUEvZfioldQt+qm6yeBVMOkTgW3BoYk///8aTMimcAiI5F5jvyGCwZACeyB02CgtWHlgI1mYANchk8fyWfVfBqugKsNHYEdsLKjtWIaqqmCCdCY4AAsU4FigHIaTcoL0BlZB9IAoDZNFzRAb+QqkG8D/SWNPmiMIBAJkOrCMyb6yfZvIDLTrU5uKiP4eYmj3ulbp70fWvjG1Q8RWQNbh91dnS+BdrjV5TY/5VigMJMboEcNCyd5lU8/SQpk6m2rwAAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

const MainHeader: React.FC = () => {
  return (
    <Header>
      <WelcomePhrase>
        <Name>도토리님</Name>
        <span>안녕하세요</span>
      </WelcomePhrase>
      <AlertIcon />
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  height: 140px;

  font-size: 22px;
`;

const WelcomePhrase = styled.p`
  display: flex;
  flex-direction: column;

  font-weight: 300;
`;

const Name = styled.span`
  font-weight: 600;
`;

export default MainHeader;
