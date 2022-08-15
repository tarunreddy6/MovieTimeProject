import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchName:string;

  constructor(public empService:EmployeeServiceService, public router : Router, 
    public activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }
  search(){
    this.router.navigateByUrl("/search/"+this.searchName);
  }

  show1(){
    this.router.navigateByUrl("user");
  }

  show2(){
    this.router.navigateByUrl("login");
  }

  show3(){
    this.router.navigateByUrl("");
  }

}
