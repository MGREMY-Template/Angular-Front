import { RoleClaimDto } from './roleClaimDto';

export interface RoleClaimDtoArrayResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: Array<RoleClaimDto>;
}
