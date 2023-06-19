import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatGridListModule } from '@angular/material/grid-list';

import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { UserClaimComponent } from './user-claim/user-claim.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { UnauthorizedComponent } from 'src/app/shared/components/unauthorized/unauthorized.component';

import { AppClaimService } from 'src/app/core/services/app.claim.service';
import { AppRoleService } from 'src/app/core/services/app.role.service';

import * as claims from '../../../shared/constants/claim.constants';
import * as roles from '../../../shared/constants/role.constants';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule,
    NgIf,
    UserComponent,
    RoleComponent,
    UserClaimComponent,
    UserRoleComponent,
    UnauthorizedComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public canListUsers: boolean = this.appClaimService.hasClaim(claims.IDENTITY_USER_GETLIST) && this.appRoleService.hasRole(roles.ADMIN);
  public canListRoles: boolean = this.appClaimService.hasClaim(claims.IDENTITY_ROLE_GETLIST) && this.appRoleService.hasRole(roles.ADMIN);
  public canListUserClaims: boolean = this.appClaimService.hasClaim(claims.IDENTITY_USERCLAIM_GETLIST) && this.appRoleService.hasRole(roles.ADMIN);
  public canListUserRoles: boolean = this.appClaimService.hasClaim(claims.IDENTITY_USERROLE_GETLIST) && this.appRoleService.hasRole(roles.ADMIN);

  constructor(
    protected appClaimService: AppClaimService,
    protected appRoleService: AppRoleService) { }
}
