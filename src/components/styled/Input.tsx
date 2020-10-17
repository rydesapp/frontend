import styled from "@emotion/styled";

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

export default Input;
