
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/common/movie';
import { Moviecategory } from 'src/app/common/moviecategory';
import { Ticket } from 'src/app/common/ticket';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket:Ticket = new Ticket(0,"","2022-10-20",0,12,2);
  moviecategory :Moviecategory[];
  movies :Movie[];

  constructor(private movieservice:MovieServiceService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  
  
  // onSubmit():void{
  //   window.alert("Redirect to payment successfull");
  // }

  

  

}
