package com.example.demo.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="moviecategory")
public class MovieCategory {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="mcid")
	private Integer mcid;
	
	@Column(name="categoryname")
	private String categoryname;
	
	@OneToMany(mappedBy = "moviecategory")
	private Set<Movie> movie;

	public MovieCategory() {
		
	}

	public MovieCategory(Integer mcid, String categoryname, Set<Movie> movie) {
		super();
		this.mcid = mcid;
		this.categoryname = categoryname;
	}

	public Integer getMcid() {
		return mcid;
	}

	public void setMcid(Integer mcid) {
		this.mcid = mcid;
	}

	public String getCategoryname() {
		return categoryname;
	}

	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}
	
}
