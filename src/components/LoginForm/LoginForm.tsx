import React from "react";
import ErrorMessage from "../../../styles/StyledComponents/ErrorMessage";
import Input from "../styled/Input";
import { LoginButton, LoginWrapper } from "./LoginForm.styles";
import useLoginForm from "./useLoginForm";

const LoginForm: React.FunctionComponent = () => {
  const { state, actions } = useLoginForm();

  return (
    <LoginWrapper onSubmit={(e) => e.preventDefault()}>
      <Input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={actions.onEmailChange}
        disabled={state.loading}
      />
      <Input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={actions.onPasswordChange}
        disabled={state.loading}
      />
      {state.error && <ErrorMessage>Error: {state.error}</ErrorMessage>}
      <LoginButton
        type="submit"
        onClick={actions.handleLogin}
        disabled={state.loading}
      >
        Login
      </LoginButton>
    </LoginWrapper>
  );
};

export default LoginForm;
