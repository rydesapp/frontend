import styled from "@emotion/styled";
import Head from "next/head";
import { NextComponentType } from "next";
import { useBlocState } from "@bloc-js/react-bloc";
import { useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BlocContext, BlocContextValue } from "../../src/context/BlocContext";
import Container from "../../styles/StyledComponents/Container";
import H1 from "../../styles/StyledComponents/H1";
import Main from "../../styles/StyledComponents/Main";
import ErrorMessage from "../../styles/StyledComponents/ErrorMessage";

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
  const { authBloc } = useContext(BlocContext) as BlocContextValue;
  const auth = useBlocState(authBloc);
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (typeof auth !== "undefined") {
      router.push("/admin/dashboard");
    } else {
      router.prefetch("/admin/dashboard");
    }
  }, [auth]);

  const handleLogin = useCallback(() => {
    setLoading(true);
    authBloc
      .login(username, password)
      .then(() => {
        setError(null);
        router.push("/admin/dashboard");
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username, password]);

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
        <LoginWrapper onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            disabled={loading}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            disabled={loading}
          />
          {error && <ErrorMessage>Error: {error}</ErrorMessage>}
          <LoginButton type="submit" onClick={handleLogin} disabled={loading}>
            Login
          </LoginButton>
        </LoginWrapper>
      </Main>
    </Container>
  );
};

export default AdminLogin;
