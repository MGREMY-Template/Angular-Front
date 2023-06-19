import { UserDto } from './userDto';

export interface UserDtoResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: UserDto;
}
