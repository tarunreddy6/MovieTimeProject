import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private empservice:EmployeeServiceService,private router:Router,
    private activatedRoute:ActivatedRoute) { }

    user:User = new User("ram",0,"sai","ram@gmail.com","xxx","user");

  ngOnInit(): void {
  }

  onSubmit():void
  {
    console.log(this.user);
    this.empservice.saveUser(this.user).subscribe(data=>
      console.log(data));
      this.router.navigateByUrl("");
  }

}
