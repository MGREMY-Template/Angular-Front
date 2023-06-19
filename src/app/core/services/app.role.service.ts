import { Injectable } from "@angular/core";
import { JWTTokenService } from "../../shared/services/JWTToken.service";
import { LocalStorageService } from "../../shared/services/localstorage.service";

import * as roles from "../../shared/constants/role.constants";

@Injectable({
  providedIn: "root"
})
export class AppRoleService {
  public roleList = roles;

  constructor(
    private jwtTokenService: JWTTokenService,
    private localStorageService: LocalStorageService) { }

  public hasRole(roleName: string): boolean {
    let token = this.localStorageService.getToken();

    return this.jwtTokenService.hasRole(token, roleName);
  }
}
