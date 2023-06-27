import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PaginedTableComponent } from 'src/app/shared/components/pagined-table/pagined-table.component';

import { RoleDto } from 'src/app/shared/models/api/roleDto';
import { RoleService } from 'src/app/shared/services/api/role.service';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [
    PaginedTableComponent,
  ],
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {
  protected rowTemplate: string[];
  protected loadDataFunction: (pageSize: number, pageIndex: number, sortBy: string | undefined, isDesc: boolean | undefined) => Observable<{ value?: RoleDto[] }>;
  protected loadTotalCountFunction: () => Observable<number>;
  protected onRowClickedFunction: (data: RoleDto) => any;

  constructor(private roleService: RoleService) {
    this.rowTemplate = ["id", "name"];
    this.loadDataFunction = (pageSize: number, pageIndex: number, sortBy: string | undefined, isDesc: boolean | undefined): Observable<{ value?: RoleDto[] }> =>
      this.roleService.GetList(pageSize, pageSize * pageIndex, sortBy, isDesc);
    this.loadTotalCountFunction = (): Observable<number> => this.roleService.Count();
    this.onRowClickedFunction = (data: RoleDto): any => console.log(data);
  }
}
