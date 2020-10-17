import styled from "@emotion/styled";
import Head from "next/head";
import { NextComponentType } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import Container from "../../styles/StyledComponents/Container";
import H1 from "../../styles/StyledComponents/H1";
import Main from "../../styles/StyledComponents/Main";
import ErrorMessage from "../../styles/StyledComponents/ErrorMessage";
import { login } from "../../src/api/authentincation-api";
import LoginForm from "../../src/components/LoginForm/LoginForm";

const LoginWrapper = styled.form`
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
  &:disabled {
    opacity: 0.5;
    background-color: #eee;
  }
  &:hover {
    border-color: #888;
  }
  &:focus {
    border-color: #f8b927;
  }
`;

const LoginButton = styled.button`
  margin: 16px 0 32px;
  color: #1d1f25;
  background-color: #ffce5d;
  border: 1px solid #ffce5d;
  font-size: 14px;
  border-radius: 8px;
  padding: 12px;
  transition: all 0.25s;
  outline: 0;
  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    background-color: #f8b927;
    border-color: #f8b927;
  }
  &:focus {
    border-color: #f8b927;
  }
`;

const AdminLogin: NextComponentType = () => {
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
        <LoginForm />
      </Main>
    </Container>
  );
};

export default AdminLogin;
