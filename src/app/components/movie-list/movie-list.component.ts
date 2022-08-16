import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/common/movie';
import { Moviecategory } from 'src/app/common/moviecategory';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies : Movie[]
  currentMoviecategoryId :number;
  public searchName :string;
  moviecategory:Moviecategory[];
  
  constructor(
    private movieservice:MovieServiceService,
    private route:Router,
    private activeRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getAllMovies() })
      this.getAllMoviecategory();
  }

  // getAllMovies() {
  //   this.movieservice.getAllMovies().
  //   subscribe(data=>{ 
  //     this.movies=data
  //   });
  // }
  getAllMoviecategory(){
    this.movieservice.getAllMoviecategorys().subscribe(data=>{
      this.moviecategory=data
    });
  }

  addMovieForm(){
    this.route.navigateByUrl("/movieform")

  }

  updateMovie(movie_id:number){
    console.log(movie_id);
    this.route.navigateByUrl("/editMovie/"+movie_id)

  }
  
  deleteMovie(movieId:number){
    if(confirm("Do you want to delete")){
      this.movieservice.deleteMovie(movieId).subscribe(data=>{
        console.log("Deleted")
        this.getAllMovies();
      })
    }
  }

  getAllMovies() {
    const hasMoviecategoryId:boolean = this.activeRoute.snapshot.paramMap.has("mcid");
    const hassearchName:boolean = this.activeRoute.snapshot.paramMap.has("moviename");
    if(hasMoviecategoryId){
      //here we get all movies based on movie category
      this.currentMoviecategoryId = +this.activeRoute.snapshot.paramMap.get("mcid");
      this.movieservice.getMoviesByMoviecategoryId(this.currentMoviecategoryId).subscribe(data => {
        console.log(data);
        this.movies = data;
      })
    }
    // DISPLAYING ID BASED ON SEARCH NAME
    else if(hassearchName){
      this.searchName=this.activeRoute.snapshot.paramMap.get("moviename");
      console.log(this.searchName);
      this.movieservice.getMovieBySearchName(this.searchName).subscribe(data=>{
        console.log(data);
        this.movies=data;
      });
    }

    // DISPLAYING ALL THE MOVIES
    else {
      this.movieservice.getAllMovies().subscribe(data => {
        console.log(data);
        this.movies = data;
      })
    }
  }
}


