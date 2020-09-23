import React from "react";
import styled from "styled-components";
import Link from "next/link";

const SendSuccess: React.FC = () => {
  return (
    <Layout>
      <Title>예약완료</Title>
      <Img src="/sendPageLogo.png" />
      <SendTime>2020년 7월 30일 19시45분</SendTime>
      <Desc>다민님의 편지로 누군가가 행복해질 시간!</Desc>
      <Link href="/">
        <GoHomeButton>홈으로</GoHomeButton>
      </Link>
    </Layout>
  );
};

const Layout = styled.main`
  padding-top: 100px;

  text-align: center;
`;

const Title = styled.h2`
  font-size: 22px;
`;

const Img = styled.img`
  margin-top: 58px;

  width: 170px;
`;

const SendTime = styled.h3`
  margin-top: 40px;

  font-size: 19px;
`;

const Desc = styled.h3`
  margin-top: 8px;

  font-size: 14px;
  font-weight: lighter;
`;

const GoHomeButton = styled.a`
  display: block;

  position: fixed;

  bottom: 20px;
  left: 3vw;

  width: 94vw;
  height: 68px;
  line-height: 68px;

  background-color: rgb(44, 128, 255);

  text-decoration: none;
`;

export default SendSuccess;
