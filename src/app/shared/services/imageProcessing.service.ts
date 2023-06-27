import { Injectable } from "@angular/core";
import { Result } from "../models/api/result";
import { AppFileService } from "./api/appFile.service";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ImageProcessingService {
  constructor(protected appFileService: AppFileService) { }

  public async fromIdToImage(id: string): Promise<string> {
    let appFile = await firstValueFrom(this.appFileService.GetById(id));
    let imageData = await firstValueFrom(this.appFileService.GetBytes(id));

    return this.fromResultToImageImage(imageData, appFile.value?.mimeType);
  }

  public fromResultToImageImage(result: Result<string>, mimeType?: string): string {
    return `data:${mimeType};base64,` + result.value;
  }
}
