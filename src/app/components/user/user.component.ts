import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/common/user';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private movieservice:MovieServiceService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

    user : User = new User(0,"",+91 ,"","","");

  ngOnInit(): void {
  }

  onSubmit():void
  {
    console.log(this.user);
    this.movieservice.saveUser(this.user).subscribe(data=>
      console.log(data));
      this.router.navigateByUrl("/login");
      window.alert("You Registered Successfully.! and Proceed to login");
  }

}
