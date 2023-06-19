import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PaginedTableComponent } from 'src/app/shared/components/pagined-table/pagined-table.component';

import { UserRoleDto } from 'src/app/shared/models/api/userRoleDto';
import { UserRoleService } from 'src/app/shared/services/api/userRole.service';

@Component({
  selector: 'app-user-role',
  standalone: true,
  imports: [
    PaginedTableComponent
  ],
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent {
  protected rowTemplate: string[];
  protected loadDataFunction: (pageSize: number, pageIndex: number, sortBy: string | undefined, isDesc: boolean | undefined) => Observable<{ value?: UserRoleDto[] }>;
  protected loadTotalCountFunction: () => Observable<number>;
  protected onRowClickedFunction: (data: UserRoleDto) => any;

  constructor(private userRoleService: UserRoleService) {
    this.rowTemplate = ["userId", "roleId"];
    this.loadDataFunction = (pageSize: number, pageIndex: number, sortBy: string | undefined, isDesc: boolean | undefined): Observable<{ value?: UserRoleDto[] }> =>
      this.userRoleService.apiIdentityUserRoleGetListGet(pageSize, pageSize * pageIndex, sortBy, isDesc);
    this.loadTotalCountFunction = (): Observable<number> => this.userRoleService.apiIdentityUserRoleCountGet();
    this.onRowClickedFunction = (data: UserRoleDto): any => console.log(data);
  }
}
