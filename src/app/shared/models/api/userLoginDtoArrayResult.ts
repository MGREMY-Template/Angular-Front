import { UserLoginDto } from './userLoginDto';

export interface UserLoginDtoArrayResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: Array<UserLoginDto>;
}
