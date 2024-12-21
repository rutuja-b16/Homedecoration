import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TemplateComponent } from './template/template.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { ViewregisterComponent } from './viewregister/viewregister.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ManagetemplateComponent } from './managetemplate/managetemplate.component';
import { ManagecustomizedComponent } from './managecustomized/managecustomized.component';
import { CustomizedComponent } from './customized/customized.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegistrationComponent},
    {path:'template',component:TemplateComponent},
    {path:'viewfeedback',component:ViewfeedbackComponent},
    {path:'viewregister',component:ViewregisterComponent},
    {path:'adminlog',component:AdminlogComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'managetemplate',component:ManagetemplateComponent},
    {path:'managecustomized',component:ManagecustomizedComponent},
    {path:'customize',component:CustomizedComponent}


];
