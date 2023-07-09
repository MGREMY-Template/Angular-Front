export class ClaimDto {
  issuer: string;
  type: string;
  value: string;

  constructor(issuer: string, type: string, value: string) {
    this.issuer = issuer;
    this.type = type;
    this.value = value;
  }
}
