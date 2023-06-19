import { UserLoginDto } from './userLoginDto';

export interface UserLoginDtoResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: UserLoginDto;
}
