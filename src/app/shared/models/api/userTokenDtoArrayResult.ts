import { UserTokenDto } from './userTokenDto';

export interface UserTokenDtoArrayResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: Array<UserTokenDto>;
}
