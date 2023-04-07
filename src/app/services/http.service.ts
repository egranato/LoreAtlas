import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public get<T>(url: string, options?: Object): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}/${url}`, options);
  }
}
