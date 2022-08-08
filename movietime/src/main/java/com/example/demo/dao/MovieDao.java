package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entity.Movie;

@RepositoryRestResource(path="movie")
public interface MovieDao extends JpaRepository<Movie, Integer> {

}
