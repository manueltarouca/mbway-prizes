export interface ApiResponse {
  today: ResponseItem[];
  tomorow: ResponseItem[];
}

export interface ResponseItem {
  type: string;
  date: string;
  time: string;
  value: string;
}