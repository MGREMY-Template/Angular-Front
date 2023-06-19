import { GetEmailConfirmationTokenOutput } from './getEmailConfirmationTokenOutput';

export interface GetEmailConfirmationTokenOutputResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: GetEmailConfirmationTokenOutput;
}
