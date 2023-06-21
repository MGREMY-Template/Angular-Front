export interface Result<T> {
  readonly isSuccess: boolean;
  readonly isFailure: boolean;
  readonly statusCode: number;
  readonly messages?: Array<string>;
  readonly value?: T;
}
