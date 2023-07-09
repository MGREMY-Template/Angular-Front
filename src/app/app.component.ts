import { Component, } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';

import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { NotificationComponent } from './shared/components/notification/notification.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    SidenavComponent,
    ToolbarComponent,
    NotificationComponent,
    RouterOutlet,
    RouterLink,
    HttpClientModule,
    MatSidenavModule,
  ],
})
export class AppComponent {

}
