export class UserClaimDto {
  id: number;
  userId: string;
  claimType: string;
  claimValue: string;

  constructor(id: number, userId: string, claimType: string, claimValue: string) {
    this.id = id;
    this.userId = userId;
    this.claimType = claimType;
    this.claimValue = claimValue;
  }
}
