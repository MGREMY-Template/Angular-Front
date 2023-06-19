import { GetClaimsOutput } from './getClaimsOutput';

export interface GetClaimsOutputResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: GetClaimsOutput;
}
