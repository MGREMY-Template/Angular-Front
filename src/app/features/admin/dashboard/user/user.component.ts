import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PaginedTableComponent } from 'src/app/shared/components/pagined-table/pagined-table.component';

import { UserDto } from 'src/app/shared/models/api/userDto';
import { UserService } from 'src/app/shared/services/api/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    PaginedTableComponent,
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  protected rowTemplate: string[];
  protected loadDataFunction: (pageSize: number, pageIndex: number, sortBy: string | undefined, isDesc: boolean | undefined) => Observable<{ value?: UserDto[] }>;
  protected loadTotalCountFunction: () => Observable<number>;
  protected onRowClickedFunction: (data: UserDto) => any;

  constructor(private userService: UserService) {
    this.rowTemplate = ["id", "userName", "email"];
    this.loadDataFunction = (pageSize: number, pageIndex: number, sortBy: string | undefined, isDesc: boolean | undefined): Observable<{ value?: UserDto[] }> =>
      this.userService.apiIdentityUserGetListGet(pageSize, pageSize * pageIndex, sortBy, isDesc);
    this.loadTotalCountFunction = (): Observable<number> => this.userService.apiIdentityUserCountGet();
    this.onRowClickedFunction = (data: UserDto): any => console.log(data);
  }
}
