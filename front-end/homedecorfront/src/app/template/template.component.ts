import { Component, OnInit } from '@angular/core';
import { Template } from '../models/template';
import { TemplateService } from '../services/template.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template',
  imports: [CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent  implements OnInit {
  templates:Template[]=[]
login=false
 constructor(private templateService:TemplateService,private router:Router){

 }
 getAllTemplates()
 {

   this.templateService.getAll().subscribe((response:Template[])=>{
     console.log(response)
     this.templates=response
   },
   
   (error:HttpErrorResponse)=>{
     console.log(error)
    });
 }
 ngOnInit(): void {
   this.getAllTemplates()
   console.log(localStorage.getItem("emailid"))
   if(localStorage.getItem("emailid")!=null)
    this.login=true
 }

download(id:any)
{
  alert("Template downloaded successfully")
this.router.navigate(["/"])
}
}


