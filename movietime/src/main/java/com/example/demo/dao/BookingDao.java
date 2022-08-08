package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.example.demo.entity.Booking;

@RepositoryRestResource(path="booking")
public interface BookingDao extends JpaRepository<Booking, Integer> {

}
