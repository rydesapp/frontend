import styled from "@emotion/styled";

export const LoginWrapper = styled.form`
  margin: 8px 0 32px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
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

export const LoginButton = styled.button`
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
