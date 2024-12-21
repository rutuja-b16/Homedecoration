import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customized } from '../models/customized';

@Injectable({
  providedIn: 'root'
})
export class CustomizedService {

  private baseUrl ='http://localhost:8080/project/customizes'
  constructor(private http:HttpClient) { }

  createCustomized(customized:FormData):Observable<Object>
{
   return this.http.post(`${this.baseUrl}`,customized);
}
getAll()
{
  return this.http.get<Customized[]>(`${this.baseUrl}`);
}
deletetemplate(customizedid:number){
  return this.http.delete(`${this.baseUrl}`+"/"+customizedid)

}

}
