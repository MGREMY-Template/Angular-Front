import { UserTokenDto } from './userTokenDto';

export interface UserTokenDtoResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: UserTokenDto;
}
