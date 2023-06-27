import { Component } from '@angular/core';
import { ImageProcessingService } from 'src/app/shared/services/imageProcessing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public image!: string;

  constructor(protected imageProcessingService: ImageProcessingService) {
    this.imageProcessingService.fromIdToImage("08db768a-2fe2-4ec9-8714-d1c749dd8ecd")
      .then(x => this.image = x);
  }
}
