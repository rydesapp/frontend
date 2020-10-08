import { withBlocs } from "@bloc-js/nextjs-bloc";
import App from "next/app";
import AuthBloc from "../src/bloc/AuthBloc";
import { BlocContext, BlocContextValue } from "../src/context/BlocContext";
import "../styles/globals.css";

interface AppProps {
  blocs: BlocContextValue;
}

class MyApp extends App<AppProps> {
  render(): JSX.Element {
    const { Component, pageProps, blocs } = this.props;
    return (
      <BlocContext.Provider value={blocs}>
        <Component {...pageProps} />
      </BlocContext.Provider>
    );
  }
}

export default withBlocs<BlocContextValue>(
  (initialProps) => ({
    authBloc: new AuthBloc(initialProps.authBloc),
  }),
  MyApp
);
