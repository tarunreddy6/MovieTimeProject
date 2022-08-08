package com.example.demo.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="ticket")
public class Ticket {
	
	@Id 
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name="ticketid")
	private int ticketid;
	
	@Column(name="moviename")
	private String moviename;
	
	@Column(name="bookingdate")
	private LocalDate bookingdate;
	
	
	@Column(name="noofseats")
	private int noofseats;
	
	@Column(name="totalamount")
	private float totalamount;
	
	@Column(name="movieid")
	private int movieid;
		
	
//	@OneToOne
//	private Booking booking;

	public Ticket() {
		
	}

	public Ticket(int ticketid, String moviename, LocalDate bookingdate, int noofseats, float totalamount, int movieid) {
		super();
		this.ticketid = ticketid;
		this.moviename = moviename;
		this.bookingdate = bookingdate;
		this.noofseats = noofseats;
		this.totalamount = totalamount;
		this.movieid = movieid;
	}

	public int getTicketid() {
		return ticketid;
	}

	public void setTicketid(int ticketid) {
		this.ticketid = ticketid;
	}

	public String getMoviename() {
		return moviename;
	}

	public void setMoviename(String moviename) {
		this.moviename = moviename;
	}

	public LocalDate getBookingdate() {
		return bookingdate;
	}

	public void setBookingdate(LocalDate bookingdate) {
		this.bookingdate = bookingdate;
	}

	public int getNoofseats() {
		return noofseats;
	}

	public void setNoofseats(int noofseats) {
		this.noofseats = noofseats;
	}

	public float getTotalamount() {
		return totalamount;
	}

	public void setTotalamount(float totalamount) {
		this.totalamount = totalamount;
	}

	public int getMovieid() {
		return movieid;
	}

	public void setMovieid(int movieid) {
		this.movieid = movieid;
	}
	
	

}
