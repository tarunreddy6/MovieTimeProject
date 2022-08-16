import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-moviecategory-list',
  templateUrl: './moviecategory-list.component.html',
  styleUrls: ['./moviecategory-list.component.css']
})
export class MoviecategoryListComponent implements OnInit {
  moviecategory : import("D:/typescript_24/movietime/src/app/common/moviecategory").Moviecategory[];

  constructor(private movieservice :MovieServiceService,
              private route :Router,
              private activeRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getAllMoviecategory()
    });
  }

  getAllMoviecategory(){
    this.movieservice.getAllMoviecategorys().subscribe(data=>{this.moviecategory=data});
  }

}
