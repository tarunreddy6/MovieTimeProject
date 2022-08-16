import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/common/movie';
import { Moviecategory } from 'src/app/common/moviecategory';
import { Ticket } from 'src/app/common/ticket';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
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

  

  pay(){
    window.alert("Payment sucessfully done")
  }



}
