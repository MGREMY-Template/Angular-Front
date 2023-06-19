import { Injectable } from "@angular/core";
import { JWTTokenService } from "../../shared/services/JWTToken.service";
import { LocalStorageService } from "../../shared/services/localstorage.service";

import * as claims from '../../shared/constants/claim.constants';

@Injectable({
  providedIn: "root"
})
export class AppClaimService {
  public claimList = claims;

  constructor(
    private jwtTokenService: JWTTokenService,
    private localStorageService: LocalStorageService) { }

  public hasClaim(claimName: string): boolean {
    return this.jwtTokenService.hasClaim(this.localStorageService.getToken(), claimName);
  }
}
