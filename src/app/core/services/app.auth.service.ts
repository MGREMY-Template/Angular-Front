import { Injectable } from "@angular/core";
import { LocalStorageService } from "../../shared/services/localstorage.service";
import { SignalRService } from "../../shared/services/signalR.service";
import { JWTTokenService } from "../../shared/services/JWTToken.service";
import { SignInOutput } from "../../shared/models/api/signInOutput";

@Injectable({
  providedIn: "root"
})
export class AppAuthService {
  constructor(
    private localStorageService: LocalStorageService,
    private jwtTokenService: JWTTokenService,
    private signalRService: SignalRService) { }

  public async login(signInOutput: SignInOutput) {
    this.localStorageService.setSession(signInOutput);
    await this.signalRService.connect(this.jwtTokenService.getUserId(this.localStorageService.getToken()));
  }

  public async logout() {
    var userId = this.jwtTokenService.getUserId(this.localStorageService.getToken());
    this.localStorageService.logout();
    await this.signalRService.disconnect(userId);
  }

  public isLoggedIn(): boolean {
    return this.localStorageService.isLoggedIn();
  }

  public getDisplayName(): string {
    var result = "";
    if (this.isLoggedIn()) {
      result = this.jwtTokenService.getUserName(this.localStorageService.getToken());
    }
    return result;
  }
}
