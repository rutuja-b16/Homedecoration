import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from '../models/template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
   private baseUrl ='http://localhost:8080/project/templates'
  constructor(private http:HttpClient) { }



  createTemplate(template:FormData):Observable<Object>
{
   return this.http.post(`${this.baseUrl}`,template);
}
getAll()
{
  return this.http.get<Template[]>(`${this.baseUrl}`);
}
deletetemplate(templateid:number){
  return this.http.delete(`${this.baseUrl}`+"/"+templateid)

}

}
