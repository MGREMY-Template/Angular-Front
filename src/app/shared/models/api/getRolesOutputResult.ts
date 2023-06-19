import { GetRolesOutput } from './getRolesOutput';

export interface GetRolesOutputResult {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly statusCode: number;
    readonly messages?: Array<string>;
    readonly value?: GetRolesOutput;
}
