import { Route } from "@angular/router";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { HomeComponent } from "./features/home/home.component";
import { AdminComponent } from "./features/admin/admin.component";
import { AuthComponent } from "./features/auth/auth.component";
import { ADMIN } from "./shared/constants/role.constants";
import { AuthGuardService } from "./shared/guards/auth.guard";
import { UnauthorizedComponent } from "./shared/components/unauthorized/unauthorized.component";

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./features/home/home.routing'),
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./features/auth/auth.routing'),
    canActivate: [AuthGuardService.isLoggedOut]
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./features/admin/admin.routing'),
    canActivate: [AuthGuardService.hasRole, AuthGuardService.hasClaims],
    data: {
      role: ADMIN,
      claims: [],
    }
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
