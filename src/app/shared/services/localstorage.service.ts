import { Injectable } from "@angular/core";
import { SignInOutput } from "../models/api/signInOutput";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  public setSession(signInOutput: SignInOutput): void {
    if (signInOutput.token) {
      localStorage.setItem('id_token', signInOutput.token);
    }
  }

  public logout(): void {
    localStorage.removeItem('id_token');
  }

  public getToken(): string {
    return localStorage.getItem('id_token') || "";
  }

  public setData<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getData<T>(key: string): T | null {
    return JSON.parse(localStorage.getItem(key) || "null");
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('id_token') != undefined;
  }
}
