export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  items: T[];
  total: number;
}

export interface BasicPageListResult<T> {
  rows: T[];
  total: number;
}

export interface BasicResponse<T> {
  code: number;
  data: T;
}
