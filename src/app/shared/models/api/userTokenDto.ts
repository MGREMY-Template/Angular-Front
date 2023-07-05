export class UserTokenDto {
  userId: string;
  loginProvider: string;
  name: string;
  value: string;

  constructor(userId: string, loginProvider: string, name: string, value: string) {
    this.userId = userId;
    this.loginProvider = loginProvider;
    this.name = name;
    this.value = value;
  }
}
