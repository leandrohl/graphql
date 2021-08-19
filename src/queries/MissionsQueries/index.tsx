import { gql } from "@apollo/client";
import { MissionsList } from './types';
import { convertKeys } from '../../utils';

export const GET_MISSIONS = gql`
    query GetAllMissions {
        missions {
            ${convertKeys<MissionsList>(new MissionsList())}
        }
    }

`;

