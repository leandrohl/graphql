export class MissionsList {
    id = ''
    name = ''
}

export class Mission extends MissionsList {
    description = ''
    twitter = ''
    manufacturers = ['']
}

export interface MissionsListResponse {
    missions: MissionsList[];
}

export interface MissionResponse {
    mission: Mission;
}

export interface MissionRequest {
    missionId: string;
}

export interface MissionNameRequest {
    name: string;
}

export interface MissionNameResponse {
    missions: Mission[];
}