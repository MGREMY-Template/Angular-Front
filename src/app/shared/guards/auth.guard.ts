import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, createUrlTreeFromSnapshot } from "@angular/router";
import { AppAuthService } from "src/app/core/services/app.auth.service";
import { AppClaimService } from "src/app/core/services/app.claim.service";
import { AppRoleService } from "src/app/core/services/app.role.service";

export class AuthGuardService {
  public static isLoggedIn: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    let appAuthService = inject(AppAuthService);
    return appAuthService.isLoggedIn()
      ? true
      : createUrlTreeFromSnapshot(next, ['/auth']);
  }

  public static isLoggedOut: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    let appAuthService = inject(AppAuthService);
    return !appAuthService.isLoggedIn()
      ? true
      : createUrlTreeFromSnapshot(next, ['/home']);
  }

  public static hasRole: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    let appRoleService = inject(AppRoleService);
    let role: string = next.data['role'];
    return appRoleService.hasRole(role)
      ? true
      : createUrlTreeFromSnapshot(next, ['/unauthorized']);
  }

  public static hasClaims: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    let appClaimService = inject(AppClaimService);
    let claims: string[] = next.data['claims'];
    return claims.every(x => appClaimService.hasClaim(x))
      ? true
      : createUrlTreeFromSnapshot(next, ['/unauthorized']);
  }
}
