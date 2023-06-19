import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Observable } from 'rxjs/internal/Observable';

import { Paging } from '../../models/paging.class';

import { LoadingScreenComponent } from '../loading-screen/loading-screen.component';

@Component({
  selector: 'app-pagined-table[loadDataFunction][loadTotalCountFunction][rowTemplate][onRowClickedFunction]',
  standalone: true,
  imports: [
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    NgIf,
    NgFor,
    LoadingScreenComponent,
  ],
  templateUrl: './pagined-table.component.html',
  styleUrls: ['./pagined-table.component.scss']
})
export class PaginedTableComponent<T> implements OnInit {
  @Input() public paging: Paging = new Paging(10, 0);
  @Input() public loadDataFunction!: (pageSize: number, pageIndex: number, sortBy: string | undefined, isDesc: boolean | undefined) => Observable<{ value?: T[] }>;
  @Input() public loadTotalCountFunction!: () => Observable<number>;
  @Input() public onRowClickedFunction!: (data: T) => any;
  @Input() public rowTemplate!: string[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  protected dataSource: T[] = <T[]>[];
  protected loading: boolean = false;

  constructor() { }

  async ngOnInit() {
    this.loadTotalCountFunction()
      .subscribe(x => {
        this.paging.totalCount = x;
      });
    this.loadData();
  }

  protected loadData() {
    this.loading = true;

    this.loadDataFunction(this.paging.pageSize, this.paging.pageIndex, this.paging.sortBy, this.paging.isDesc)
      .subscribe(x => {
        if (x.value) {
          this.dataSource = x.value;
        }
        this.loading = false;
      });
  }
}
