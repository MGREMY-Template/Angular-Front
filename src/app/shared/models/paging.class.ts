export class Paging {
  public totalCount: number = 0;
  public pageSize: number;
  public pageIndex: number;
  public sortBy?: string;
  public isDesc?: boolean;

  constructor(pageSize: number, pageIndex: number) {
    this.pageSize = pageSize;
    this.pageIndex = pageIndex;
  }
}
