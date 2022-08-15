import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DeptListComponent } from './components/dept-list/dept-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmpFormComponent } from './components/emp-form/emp-form.component';
import { FormsModule } from '@angular/forms';
import { EmpListUserComponent } from './components/emp-list-user/emp-list-user.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';


const routes:Routes =[
  {path : "",component:WelcomeComponent},
  {path : 'employees',component:EmpListComponent},
  {path : 'empform',component:EmpFormComponent},
  {path : 'editEmp/:id',component:EmpFormComponent},
  {path : 'departments',component:DeptListComponent},
  {path :"employees-details",component:EmpListUserComponent},
  {path :'user',component:UserComponent},
  {path : 'search/:ename',component:EmpListUserComponent},
  {path:'login',component:LoginComponent},
  {path : 'dept/:deptId',component:EmpListUserComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    DeptListComponent,
    WelcomeComponent,
    SearchComponent,
    EmpFormComponent,
    UserComponent,
    LoginComponent,
    EmpListUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
