import styled from "@emotion/styled";
import Head from "next/head";
import { FunctionComponent } from "react";
import Container from "../styles/StyledComponents/Container";
import H1 from "../styles/StyledComponents/H1";
import Main from "../styles/StyledComponents/Main";

const AdminLink = styled.a`
  display: inline-block;
  padding: 8px 16px;
  margin: 16px;
  color: #888;
`;

const Home: FunctionComponent = () => {
  return (
    <Container>
      <Head>
        <title>Rydes</title>
        <link rel="icon" href="/rydes-icon.svg" />
      </Head>

      <Main>
        <img src="/rydes-icon.svg" alt="rydes" />
        <H1>rydes</H1>
        <p>Sharing for the greater good!</p>
        <br />
        <h3>Coming soon!</h3>
      </Main>
      <AdminLink href="/admin/login">Admin</AdminLink>
    </Container>
  );
};

export default Home;
