package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entity.Ticket;

@RepositoryRestResource(path="ticket")

public interface TicketDao extends JpaRepository<Ticket, Integer> {

}
