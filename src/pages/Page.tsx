import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Page: React.FC = ({ children }) => {
  return (
    <PageContainer>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">News</Typography>
        </Toolbar>
      </AppBar>
      <MainContent>{children}</MainContent>
    </PageContainer>
  );
};

export default Page;
