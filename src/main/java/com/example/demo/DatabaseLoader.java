package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final GeneroRepository repositoryG;
    private final DirectorRepository repositoryD;
    private final PeliculaRepository repositoryP;

	@Autowired	
    public DatabaseLoader(
            GeneroRepository repositoryG,
            DirectorRepository repositoryD,
            PeliculaRepository repositoryP) {

        this.repositoryG = repositoryG;
        this.repositoryD = repositoryD;
        this.repositoryP = repositoryP;
    }

	@Override
	public void run(String... strings) throws Exception {
		
		Genero genero = new Genero("Acción");
        this.repositoryG.save(genero);

        Director director = new Director("Christopher Nolan", 50);
        this.repositoryD.save(director);

        Pelicula pelicula = new Pelicula("Inception",director, genero,"Dreams whithin dreams",2010);
        //this.repositoryP.save(new Pelicula("Inception",director, genero,"Dreams whithin dreams",2010));
        this.repositoryP.save(pelicula);
	}	

	
}