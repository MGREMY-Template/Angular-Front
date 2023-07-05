export class RoleClaimDto {
  id: number;
  roleId: string;
  claimType: string;
  claimValue: string;

  constructor(id: number, roleId: string, claimType: string, claimValue: string) {
    this.id = id;
    this.roleId = roleId;
    this.claimType = claimType;
    this.claimValue = claimValue;
  }
}
