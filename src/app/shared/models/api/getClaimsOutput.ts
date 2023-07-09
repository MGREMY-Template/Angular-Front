import { ClaimDto } from './claimDto';

export class GetClaimsOutput {
  userClaims: Array<ClaimDto>;

  constructor(userClaims: ClaimDto[]) {
    this.userClaims = userClaims;
  }
}
