export class Result<T> {
  readonly isSuccess: boolean;
  readonly isFailure: boolean;
  readonly statusCode: number;
  readonly messages?: Array<string>;
  readonly value?: T;

  constructor(isSuccess: boolean, isFailure: boolean, statusCode: number, messages?: string[], value?: T) {
    this.isSuccess = isSuccess;
    this.isFailure = isFailure;
    this.statusCode = statusCode;
    this.messages = messages;
    this.value = value;
  }
}
