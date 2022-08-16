import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/common/movie';
import { Moviecategory } from 'src/app/common/moviecategory';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MoviecategoryListComponent } from '../moviecategory-list/moviecategory-list.component';

@Component({
  selector: 'app-movie-list-user',
  templateUrl: './movie-list-user.component.html',
  styleUrls: ['./movie-list-user.component.css']
})
export class MovieListUserComponent implements OnInit {
  movies :Movie[];
  moviecategory :Moviecategory[];
  searchName :string;
  currentMoviecategoryId :number;

  constructor(private movieservice:MovieServiceService,
              private router:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getAllMovies()})
      this.getAllMoviecategory();
  }

  getAllMoviecategory() {
    this.movieservice.getAllMoviecategorys().subscribe(data=>{
      this.moviecategory=data
    });
  }
  
  getAllMovies() {
    const hasMoviecategoryId:boolean = this.activeRoute.snapshot.paramMap.has("mcid"); //mcid 
    const hassearchName:boolean = this.activeRoute.snapshot.paramMap.has("moviename");
    if(hasMoviecategoryId){
      //get employees by DeptId
      this.currentMoviecategoryId = +this.activeRoute.snapshot.paramMap.get("mcid"); //mcid
      this.movieservice.getMoviesByMoviecategoryId(this.currentMoviecategoryId).subscribe(data => {
      console.log(data);
      this.movies = data;
      })
    }
    
    else if(hassearchName){
      this.searchName=this.activeRoute.snapshot.paramMap.get("moviename");
      console.log(this.searchName);
      this.movieservice.getMovieBySearchName(this.searchName).subscribe(data=>{
        console.log(data);
        this.movies=data;
      });
    }

    else {
      this.movieservice.getAllMovies().subscribe(data => {
        console.log(data);
        this.movies = data;
      })
    }
  }

  onSubmit(){
    window.alert("this is navigating to ticket component")
  }
  booktickets(movie_id : number){
    this.router.navigateByUrl("/book/"+movie_id);
  }

  

  // <img alt="multimedia-trailers" width="100%" height="405px" class="sc-eykeme-1 jbzDld" style="border-radius: 8px;
  //  max-height: 405px; margin: 0px 0px 24px; opacity: 1;" src="https://img.youtube.com/vi/aQF4zbOKoEY/0.jpg">
}
