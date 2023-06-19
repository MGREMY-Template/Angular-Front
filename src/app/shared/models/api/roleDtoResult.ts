import { RoleDto } from './roleDto';

export interface RoleDtoResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: RoleDto;
}
