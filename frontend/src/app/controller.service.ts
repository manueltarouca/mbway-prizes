import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse, ResponseItem } from './models/api-model';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<ResponseItem[]> {
    return this.httpClient.get<ApiResponse>('https://mbway-prizes-be.vercel.app/api/mbway').pipe(
      map(res => res.items)
    );
  }
}
