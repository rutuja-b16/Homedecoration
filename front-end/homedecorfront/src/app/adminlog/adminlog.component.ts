import { Component } from '@angular/core';
import { Adminlog } from '../models/adminlog';
import { FormsModule } from '@angular/forms';
import { AdminlogService } from '../services/adminlog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlog',
  imports: [FormsModule],
  templateUrl: './adminlog.component.html',
  styleUrl: './adminlog.component.css'
})
export class AdminlogComponent {
adm:Adminlog=new Adminlog()

constructor(private admserv:AdminlogService,private router:Router) {
  
}

submitdata(){
this.admserv.login(this.adm.emailid,this.adm.password).subscribe(data=>{
  if(data.length>0)
  {
    alert("Adminlogin successful")
    localStorage.setItem("usertype","admin")
    this.router.navigate(["/"])
   
  }
})
}
}
