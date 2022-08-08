package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "movie")
public class Movie {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="movie_id")
	private int movie_id;
	
	@Column(name="moviename")
	private String moviename;
	
	@Column(name="image_path")
	private String image_path;
	
	@Column(name="language")
	private String language;
	
	@Column(name="priceperticket")
	private double priceperticket;
	
	@Column(name="mcid")
	private int mcid;
	
	@ManyToOne(targetEntity = MovieCategory.class,fetch = FetchType.EAGER)
	@JoinColumn(name="mcid",insertable = false, updatable = false)
	private MovieCategory moviecategory;
	
	public Movie() {
	
	}

	public Movie(int movie_id, String moviename, String image_path, String language, double priceperticket, int mcid) {
		
		this.movie_id = movie_id;
		this.moviename = moviename;
		this.image_path = image_path;
		this.language = language;
		this.priceperticket = priceperticket;
		this.mcid = mcid;
	}

	public int getMovie_id() {
		return movie_id;
	}

	public void setMovie_id(int movie_id) {
		this.movie_id = movie_id;
	}

	public String getMoviename() {
		return moviename;
	}

	public void setMoviename(String moviename) {
		this.moviename = moviename;
	}

	public String getImage_path() {
		return image_path;
	}

	public void setImage_path(String image_path) {
		this.image_path = image_path;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public double getPriceperticket() {
		return priceperticket;
	}

	public void setPriceperticket(double priceperticket) {
		this.priceperticket = priceperticket;
	}

	public int getMcid() {
		return mcid;
	}

	public void setMcid(int mcid) {
		this.mcid = mcid;
	}	
}
