import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class JWTTokenService {
  protected jwtHelperService: JwtHelperService;

  constructor() {
    this.jwtHelperService = new JwtHelperService();
  }

  private decodeToken(jwtToken: string): any {
    return this.jwtHelperService.decodeToken(jwtToken);
  }

  public hasClaim(jwtToken: string, claim: string): boolean {
    let decodedToken = this.decodeToken(jwtToken);

    if (decodedToken) {
      return decodedToken[claim] == 1;
    }

    return false;
  }

  public hasRole(jwtToken: string, role: string): boolean {
    let decodedToken = this.decodeToken(jwtToken);

    if (decodedToken) {
      return decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == role;
    }

    return false;
  }

  public getUserId(jwtToken: string): string {
    let decodedToken = this.decodeToken(jwtToken);

    if (decodedToken) {
      return decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    }

    return "";
  }

  public getUserName(jwtToken: string): string {
    let decodedToken = this.decodeToken(jwtToken);

    if (decodedToken) {
      return decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    }

    return "";
  }
}
