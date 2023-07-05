export class SignUpQuery {
  email: string;
  userName: string;
  password: string;

  constructor(email: string, userName: string, password: string) {
    this.email = email;
    this.userName = userName;
    this.password = password;
  }
}
