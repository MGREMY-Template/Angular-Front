import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    NgIf,
  ],
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent {
  @Input() public loading!: boolean;
}
