import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customized } from '../models/customized';
import { CustomizedService } from '../services/customized.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customized',
  imports: [CommonModule],
  templateUrl: './customized.component.html',
  styleUrl: './customized.component.css'
})
export class CustomizedComponent implements OnInit {
  customizes:Customized[]=[]
login=false
 constructor(private customizedService:CustomizedService,private router:Router){

 }
 getAllTemplates()
 {

   this.customizedService.getAll().subscribe((response:Customized[])=>{
     console.log(response)
     this.customizes=response
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
