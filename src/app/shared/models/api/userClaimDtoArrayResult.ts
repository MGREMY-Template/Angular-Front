import { UserClaimDto } from './userClaimDto';

export interface UserClaimDtoArrayResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: Array<UserClaimDto>;
}
