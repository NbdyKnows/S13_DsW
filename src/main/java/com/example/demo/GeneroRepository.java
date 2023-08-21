package com.example.demo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "generos", path = "generos")
public interface GeneroRepository extends CrudRepository<Genero, Long> {
    
}
