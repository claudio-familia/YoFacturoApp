import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  _apiUrl: string
  _headers: HttpHeaders

  constructor(baseUrl:string, private http: HttpClient) {
    this._apiUrl = `${environment.ApiUrl}/${baseUrl}`;
    const token = localStorage.getItem('api-token');
    this._headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  get():Observable<T[]>{
    return this.http.get<T[]>(this._apiUrl, {headers: this._headers});
  }

  getById(id:string):Observable<T>{
    return this.http.get<T>(`${this._apiUrl}/${id}`, {headers: this._headers});
  }

  create(data: any){    
    return this.http.post<T>(this._apiUrl, data,{headers: this._headers});
  }

  update(data: any){
    return this.http.put<T>(this._apiUrl, data,{headers: this._headers});
  }
  
  delete(id: string){
    return this.http.delete<T>(`${this._apiUrl}/${id}`, {headers: this._headers});
  }
}