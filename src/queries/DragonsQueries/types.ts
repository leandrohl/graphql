export class DragonsList {
    id = ''
    name = ''
}

export class Dragon extends DragonsList {
    type = ''
    dry_mass_kg = 0
    dry_mass_lb = 0
    description = ''
    crew_capacity = 0
    active = true
}

export interface DragonsListResponse {
    dragons: DragonsList[];
}

export interface DragonResponse {
    dragon: Dragon;
}

export interface DragonRequest {
    dragonId: string;
}