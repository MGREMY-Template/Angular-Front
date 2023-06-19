import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout'

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [
    MatIconModule,
    FlexLayoutModule,
  ],
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent { }
