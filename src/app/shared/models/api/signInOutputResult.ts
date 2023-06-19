import { SignInOutput } from './signInOutput';

export interface SignInOutputResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: SignInOutput;
}
