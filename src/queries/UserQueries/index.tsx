import { gql } from "@apollo/client";
import { convertKeys } from "../../utils";
import { User, UserList } from "./types";

export const GET_USERS = gql`
    query GetUsers {
      users {
        ${convertKeys<UserList>(new UserList())}
      }
    }
`;

export const GET_USERS_BY_NAME = gql`
    query GetUserByName($nameUser: String!) {
      user (nameUser: $nameUser) {
        ${convertKeys<User>(new User())}
      }
    }
`;
