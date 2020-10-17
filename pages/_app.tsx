import { ApolloProvider } from "@apollo/client";
import App, { AppProps } from "next/app";
import { AppComponent } from "next/dist/next-server/lib/router/router";
import { useApollo } from "../src/api/client";
import "../styles/globals.css";

const MyApp: AppComponent = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
