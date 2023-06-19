import { UserRoleDto } from './userRoleDto';

export interface UserRoleDtoResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: UserRoleDto;
}
