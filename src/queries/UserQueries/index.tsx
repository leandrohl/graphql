import { gql } from "@apollo/client";
import { convertKeys } from "../../utils";
import { User} from "./types";

export const GET_USERS_ORDER_BY_NAME_ASC = gql`
    query GetUsers {
      users(order_by: {name: asc}) {
        ${convertKeys<User>(new User())}
      }
    }
`;

export const GET_USER_BY_NAME = gql`
    query GetUserByName($nameUser: [String!]) {
      users(where: {name: {_in: $nameUser}})  {
        ${convertKeys<User>(new User())}
      }
    }
`

