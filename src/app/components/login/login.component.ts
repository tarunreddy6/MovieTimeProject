import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User("ram",0,"sai","sai@gmail.com","xxx","user");

  constructor(private router:Router,private empservice:EmployeeServiceService) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    
    if( this.user.usertype=="admin"){
      this.router.navigateByUrl("/employees");
      console.log("admin verified");
      window.alert("login successfull");
    }

    else if(this.user.usertype=="user" ){
      this.router.navigateByUrl("/employees-details");
      console.log("user verified");
      window.alert("login successfull");
    }
    
    else{
      this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
    }
  }
}
