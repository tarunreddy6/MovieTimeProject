import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchName:string;

  constructor(public movieservice : MovieServiceService,
              public router : Router, 
              public activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  search(){  
    //console.log(this.searchName)
    this.router.navigateByUrl("/search/"+this.searchName);
  }

  show1(){
    this.router.navigateByUrl("login");
  }
  // show2(){
  //   this.router.navigateByUrl("user");
  // }
  show3(){
   this.router.navigateByUrl("");
 }

}
