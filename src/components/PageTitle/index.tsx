import React from "react";
import styled from "styled-components";

const PageTitleWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 80px;
  display: flex;
  color: #364558;
  align-items: center;
`;

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <PageTitleWrapper>
      <h2>{title}</h2>
    </PageTitleWrapper>
  );
};

type PageTitleProps = {
  title: string;
};

export default PageTitle;
