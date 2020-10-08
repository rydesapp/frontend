import { gql } from "@apollo/client";
import User, { UserField, UserRawData } from "../models/User";
import client from "./client";

const dummyUserDataFromServer: UserRawData = {
  id: 15,
  username: "admin",
  fullName: "admin",
  image: "#",
};

export async function getUser(fields?: UserField[]): Promise<User> {
  let userFields: UserField[] = ["id", "username", "fullName", "image"];
  if (fields) {
    userFields = fields;
  }
  const result = await client
    .query({
      query: gql`
      query GetUser {
        ${userFields.join("\n")}
      }
    `,
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(result);

  return new User(dummyUserDataFromServer);
}

export function login(): void {
  //
}
