package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entity.MovieCategory;

@RepositoryRestResource(path="moviecategory")
public interface MovieCategoryDao extends JpaRepository<MovieCategory, Integer> {

}
