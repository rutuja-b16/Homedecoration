import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adminlog } from '../models/adminlog';

@Injectable({
  providedIn: 'root'
})
export class AdminlogService {
private serverurl="http://localhost:8080/admin"
  constructor(private http:HttpClient) { }

  login(e:any,p:any):Observable<Adminlog[]>
  {
    return this.http.get<Adminlog[]>(this.serverurl+"/"+e+"/"+p)
  }
}
