import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PaginedTableComponent } from 'src/app/shared/components/pagined-table/pagined-table.component';

import { UserClaimDto } from 'src/app/shared/models/api/userClaimDto';
import { UserClaimService } from 'src/app/shared/services/api/userClaim.service';

@Component({
  selector: 'app-user-claim',
  standalone: true,
  imports: [
    PaginedTableComponent,
  ],
  templateUrl: './user-claim.component.html',
  styleUrls: ['./user-claim.component.scss']
})
export class UserClaimComponent {
  protected rowTemplate: string[];
  protected loadDataFunction: (pageSize: number, pageIndex: number, sortBy: string | undefined, isDesc: boolean | undefined) => Observable<{ value?: UserClaimDto[] }>;
  protected loadTotalCountFunction: () => Observable<number>;
  protected onRowClickedFunction: (data: UserClaimDto) => any;

  constructor(private userClaimService: UserClaimService) {
    this.rowTemplate = ["id", "userId", "claimType", "claimValue"];
    this.loadDataFunction = (pageSize: number, pageIndex: number, sortBy: string | undefined, isDesc: boolean | undefined): Observable<{ value?: UserClaimDto[] }> =>
      this.userClaimService.GetList(pageSize, pageSize * pageIndex, sortBy, isDesc);
    this.loadTotalCountFunction = (): Observable<number> => this.userClaimService.Count();
    this.onRowClickedFunction = (data: UserClaimDto): any => console.log(data);
  }
}
