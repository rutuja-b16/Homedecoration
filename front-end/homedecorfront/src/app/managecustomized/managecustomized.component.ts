import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customized } from '../models/customized';
import { CustomizedService } from '../services/customized.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../models/file-handle';

@Component({
  selector: 'app-managecustomized',
  imports: [FormsModule,CommonModule],
  templateUrl: './managecustomized.component.html',
  styleUrl: './managecustomized.component.css'
})
export class ManagecustomizedComponent {

   customized:Customized = new Customized();
    submitted = false;
    errordata="";
  constructor(private customizedService: CustomizedService,private router:Router,private sanitizer:DomSanitizer) { }
  
    ngOnInit()
    {
  
    }
    newCustomized(): void {
      this.submitted = false;
    this.customized= new Customized();
    }
  
    save() {
      
      const formData=this.prepareFormData(this.customized);
      this.customizedService.createCustomized(formData).subscribe(data => {
        if(data!=null)
        {
          alert("Image uploaded successfully")
        console.log(data)
        this.gotoList();
        }
      }, 
      error =>{ console.log(error);
        this.errordata=error;
       
      })
    }
    prepareFormData(customized:Customized):FormData{
      const formData=new FormData()
      formData.append(
        'customized',
        new Blob([JSON.stringify(customized)],{type:"application/json"})
      );
      for(var i=0;i<customized.custImages.length;i++)
      {
        formData.append(
          'imageFile',
          customized.custImages[i].file,
          customized.custImages[i].file.name
        );
      }
      return formData;
    }
    removeImage(i:number)
    {
      this.customized.custImages.splice(i,1)
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
  this.customized.custImages.push(fileHandle)
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
