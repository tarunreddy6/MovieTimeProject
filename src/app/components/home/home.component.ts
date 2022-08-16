import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/common/movie';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchName: string;
  
  constructor(public movieservice : MovieServiceService,
              public router : Router, 
              public activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }
  search(){  
    //console.log(this.searchName)
    this.router.navigateByUrl("/search/"+this.searchName);
  }

  buyNow(){
    this.router.navigateByUrl("/login");
  }

}
