export interface ApiResponse {
  today: ResponseItem[];
  tomorrow: ResponseItem[];
}

export interface ResponseItem {
  type: string;
  date: string;
  time: string;
  value: string;
}