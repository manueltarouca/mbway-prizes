export interface ApiResponse {
  items: ResponseItem[];
}

export interface ResponseItem {
  type: string;
  date: string;
  time: string;
  value: string;
}