import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MoviecategoryListComponent } from './components/moviecategory-list/moviecategory-list.component';
import { MovieListUserComponent } from './components/movie-list-user/movie-list-user.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { BookingComponent } from './components/booking/booking.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes:Routes=[
  {path :"", component:HomeComponent},
  {path :'movies', component:MovieListComponent},
  {path :'movieform', component:MovieFormComponent},
  {path :'editMovie/:movie_id', component:MovieFormComponent},
  {path :'movieCategories', component:MoviecategoryListComponent},
  {path :"movies-details",component:MovieListUserComponent},
  {path :'user',component:UserComponent},
  {path :'search/:moviename',component:MovieListUserComponent},
  {path :'login',component:LoginComponent},
  {path :'book/:movie_id',component:BookingComponent},
  {path :'paymentgateway',component:PaymentComponent},
  {path :'moviecategory/:moviecategoryId',component:MovieListUserComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieListComponent,
    MovieFormComponent,
    MoviecategoryListComponent,
    MovieListUserComponent,
    SearchComponent,
    UserComponent,
    LoginComponent,
    TicketComponent,
    BookingComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
