export class ResponseDTO {
  constructor(skip: number, limit: number, data: any[], totalRecords: number) {
    this.skip = skip;
    this.limit = limit;
    this.count = data.length;
    this.totalRecords = totalRecords;
    this.data = data;
  }
  skip: number;
  limit: number;
  totalRecords: number;
  count: number;
  data: any[];
}
