import { gql } from '@apollo/client';
import { DragonsList, Dragon } from './types';
import { convertKeys } from '../../utils';


export const GET_DRAGONS = gql`
  query GetAllDragons {
    dragons {
      ${convertKeys<DragonsList>(new DragonsList())}
    }
  }
`;

export const GET_DRAGON = gql`
  query GetDragonById($dragonId: ID!) {
    dragon(id: $dragonId) {
      ${convertKeys<Dragon>(new Dragon())}
    }
  }
`;