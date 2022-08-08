package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name="booking")
public class Booking {
	
	@Id 
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name="transactionid")
	private int transactionid;
	
	@Column(name="transaction_mode")
	private String transaction_mode;
	
	@Column(name="ticket_ID")
	private int ticket_ID;
	
	
	public Booking() {
		
	}

	public Booking(int transactionid, String transaction_mode, int ticket_ID) {
		
		this.transactionid = transactionid;
		this.transaction_mode = transaction_mode;
		this.ticket_ID = ticket_ID;
	}

	public int getTransactionid() {
		return transactionid;
	}

	public void setTransactionid(int transactionid) {
		this.transactionid = transactionid;
	}

	public String getTransaction_mode() {
		return transaction_mode;
	}

	public void setTransaction_mode(String transaction_mode) {
		this.transaction_mode = transaction_mode;
	}

	public int getTicket_ID() {
		return ticket_ID;
	}

	public void setTicket_ID(int ticket_ID) {
		this.ticket_ID = ticket_ID;
	}
}
