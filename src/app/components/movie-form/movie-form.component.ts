import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/common/movie';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  movie :Movie = new Movie(0,"Vikram","","Telugu",250,11);

  constructor(private movieservice:MovieServiceService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }
              editable : boolean=false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( ()=>{this.getMovieById()});
    console.log(this.getMovieById());
  }

  getMovieById(){
    const movieId =+ this.activatedRoute.snapshot.paramMap.get("movie_id");
    
    if(movieId > 0){
      this.editable = true;
      console.log(movieId);
      this.movieservice.getMovieById(movieId).subscribe(data => {this.movie=data})
    }
  }

  onSubmit(){
    if(this.editable){
      this.movieservice.updateMovie(this.movie).subscribe(data=>
        console.log(data));
        this.router.navigateByUrl("/movies"); 
    }
    else{
    console.log(this.movie);
    this.movieservice.saveMovie(this.movie).subscribe(data=>
      console.log(data));
      this.router.navigateByUrl("/movies");
    }
  }

}
