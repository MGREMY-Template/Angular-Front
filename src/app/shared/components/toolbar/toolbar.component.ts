import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgIf, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

import { AppAuthService } from '../../../core/services/app.auth.service';
import { AppRoleService } from '../../../core/services/app.role.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    NgIf,
    NgClass,
    RouterLink,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() sidenavToggle: EventEmitter<any> = new EventEmitter();

  constructor(
    protected appAuthService: AppAuthService,
    protected appRoleService: AppRoleService) { }
}
