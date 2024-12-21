import { Component } from '@angular/core';
import { Template } from '../models/template';
import { TemplateService } from '../services/template.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../models/file-handle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-managetemplate',
  imports: [FormsModule,CommonModule],
  templateUrl: './managetemplate.component.html',
  styleUrl: './managetemplate.component.css'
})
export class ManagetemplateComponent {
  template:Template = new Template();
  submitted = false;
  errordata="";
constructor(private templateService: TemplateService,private router:Router,private sanitizer:DomSanitizer) { }

  ngOnInit()
  {

  }
  newTemplate(): void {
    this.submitted = false;
  this.template = new Template();
  }

  save() {
    
    const formData=this.prepareFormData(this.template);
    this.templateService.createTemplate(formData).subscribe(data => {
      if(data!=null)
      {
        alert("Template added successfully")
      console.log(data)
      this.gotoList();
      }
    }, 
    error =>{ console.log(error);
      this.errordata=error;
     
    })
  }
  prepareFormData(template:Template):FormData{
    const formData=new FormData()
    formData.append(
      'template',
      new Blob([JSON.stringify(template)],{type:"application/json"})
    );
    for(var i=0;i<template.tempImages.length;i++)
    {
      formData.append(
        'imageFile',
        template.tempImages[i].file,
        template.tempImages[i].file.name
      );
    }
    return formData;
  }
  removeImage(i:number)
  {
    this.template.tempImages.splice(i,1)
  }
  onFileSelected(event:any){
    if(event.target.files)
    {
const file=event.target.files[0];
const fileHandle:FileHandle={
  file:file,
  url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file)),
  name:file.name


}
this.template.tempImages.push(fileHandle)
    }
  }
  onSubmit() {
    this.save();    
    this.submitted = true;
    console.log("inside on submit")
  }

  gotoList() {
    this.router.navigate(["/"]);
  }

}

