import styled from "@emotion/styled";
import Head from "next/head";
import { FunctionComponent } from "react";
import Container from "../../styles/StyledComponents/Container";
import H1 from "../../styles/StyledComponents/H1";
import Main from "../../styles/StyledComponents/Main";

const LoginWrapper = styled.div`
  margin: 8px 0 32px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 8px 16px;
  width: 100%;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin-bottom: 16px;
  font-size: 14px;
  outline: none;

  &:hover {
    border-color: #888;
  }
  &:focus {
    border-color: #ff4d6a;
  }
`;

const LoginButton = styled.button`
  margin: 16px 0 32px;
  color: #fff;
  background-color: #ff4d6a;
  border: 1px solid #ff4d6a;
  font-size: 14px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 12px;
  transition: all 0.25s;
  &:hover {
    background-color: #e03753;
    border-color: #e03753;
  }
  &:focus {
    border-color: #ff95a6;
  }
`;

const AdminLogin: FunctionComponent = () => {
  return (
    <Container>
      <Head>
        <title>Admin - Rydes</title>
        <link rel="icon" href="/rydes-icon.svg" />
      </Head>

      <Main>
        <img src="/rydes-icon.svg" alt="rydes" />
        <H1>Rydes</H1>
        <p>Welcome to Rydes adminstration</p>
        <br />
        <LoginWrapper>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <LoginButton type="button">Login</LoginButton>
        </LoginWrapper>
      </Main>
    </Container>
  );
};

export default AdminLogin;
