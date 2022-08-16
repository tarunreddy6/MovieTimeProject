import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User(0,"",+91,"","","");
  
  constructor(private router:Router,
              private movieservice:MovieServiceService) { }

  ngOnInit(): void {
  }

  onSubmit():void{

    if( this.user.usertype == "admin"){
      
      this.router.navigateByUrl("/movies");//crud operations
      console.log("admin verified");
      window.alert("Admin login successfull");
    }
    else if(this.user.usertype=="user"){

      this.router.navigateByUrl("/movies-details");//display code
      console.log("user verified");
      window.alert("User login successfull");
    }
    else{

      this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
    }

  }

  show2(){
    this.router.navigateByUrl("user");
  }

  // show3(){
  //   this.router.navigateByUrl("");
  // }

}
