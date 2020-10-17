import { gql } from "@apollo/client";
import Axios, { AxiosResponse } from "axios";

interface UserCredentials {
  email: string;
  password: string;
}

export function login(credentials: UserCredentials): Promise<AxiosResponse> {
  return Axios.post(`${process.env.API_ENDPOINT}/login`, credentials, {
    withCredentials: true,
  }).then((res) => {
    return res;
  });
}

export const GET_ME_QUERY = gql`
  query {
    me {
      id
      firstName
      lastName
      email
      phone
    }
  }
`;

export const GET_USERS_QUERY = gql`
  query users {
    uuid
    email
    firstName
    lastName
    phone
  }
`;
