import { UserRoleDto } from './userRoleDto';

export interface UserRoleDtoArrayResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: Array<UserRoleDto>;
}
