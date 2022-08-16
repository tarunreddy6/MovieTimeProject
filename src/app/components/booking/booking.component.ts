import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/common/movie';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  movie :Movie = new Movie(0,"vikram","","",150,0);
  movies :Movie[];
  count:number = 1;
 
  constructor(private movieservice:MovieServiceService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }
    //editable: boolean=false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( ()=> {this.getMovieById()});
  }

  getMovieById(){
    const movieId =+ this.activatedRoute.snapshot.paramMap.get("movie_id");
    
    if(movieId > 0){
      //this.editable = true;
      console.log(movieId);
      this.movieservice.getMovieById(movieId).subscribe(data => {this.movie=data})
    }
  }

  onSubmit(){
    this.movieservice.updateMovie(this.movie).subscribe(data=>
      console.log(data));
  }

  increment(count:number){
    if(count>=4){
      return alert("Max 5 tickets")
    }
    return this.count++;
  }

  decrement(count:number){
    if(count<=1){
      return alert("Min 1 ticket")
    }
   return this.count--;
  }

  pay1(){
    this.router.navigateByUrl("/paymentgateway");
    //window.alert("Payment sucessfully done")
  }

  pay2(){

    window.confirm("Are you sure Do you wany to cancle !")
    this.router.navigateByUrl("/movies-details");
    //
  }

}
