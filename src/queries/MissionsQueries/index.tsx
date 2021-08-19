import { gql } from "@apollo/client";
import { MissionsList, Mission } from './types';
import { convertKeys } from '../../utils';

export const GET_MISSIONS = gql`
  query GetAllMissions {
    missions {
      ${convertKeys<MissionsList>(new MissionsList())}
    }
  }
`;

export const GET_MISSION = gql`
  query GetMissionById($missionId: ID!) {
    mission(id: $missionId) {
      ${convertKeys<Mission>(new Mission())}
    }
  }
`;

export const GET_MISSONFIND = gql`
  query GetMissionByName($name: String!) {
    missions(find: {name: $name}) {
      ${convertKeys<Mission>(new Mission())}
    }
  }



`;

