import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Settings from "../../../assets/settings.json";

@Injectable()
export class HttpBaseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.startsWith(Settings.API_URL)) {
      const idToken = localStorage.getItem("id_token");

      if (idToken) {
        const cloned = req.clone({
          headers: req.headers.set("Authorization",
            "Bearer " + idToken)
        });

        return next.handle(cloned);
      }
    }

    return next.handle(req);
  }
}
