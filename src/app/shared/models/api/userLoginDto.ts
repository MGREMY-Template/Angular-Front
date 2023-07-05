export class UserLoginDto {
  loginProvider: string;
  providerKey: string;
  providerDisplayName: string;
  userId: string;

  constructor(loginProvider: string, providerKey: string, providerDisplayName: string, userId: string) {
    this.loginProvider = loginProvider;
    this.providerKey = providerKey;
    this.providerDisplayName = providerDisplayName;
    this.userId = userId;
  }
}
