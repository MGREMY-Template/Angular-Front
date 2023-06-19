import { RoleDto } from './roleDto';

export interface RoleDtoArrayResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: Array<RoleDto>;
}
