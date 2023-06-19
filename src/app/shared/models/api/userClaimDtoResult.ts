import { UserClaimDto } from './userClaimDto';

export interface UserClaimDtoResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: UserClaimDto;
}
