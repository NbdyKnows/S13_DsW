package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "musicos", path = "musicos")
public interface BandaRepository extends CrudRepository<Banda, Long> {

}