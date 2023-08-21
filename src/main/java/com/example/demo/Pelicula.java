package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Pelicula {

	private @Id @GeneratedValue Long id;

	private String nombre;

	@ManyToOne()
	@JoinColumn(name = "id_director")
	private Director director;

	@ManyToOne()
	@JoinColumn(name = "id_genero")
	private Genero genero;

	private String descripcion;

	private int anio;

	public Pelicula() {}

	public Pelicula (String nombre, Director director, Genero genero, String descripcion, int anio) {
		this.nombre = nombre;
		this.genero = genero;
		this.director = director;
		this.descripcion = descripcion;
		this.anio = anio;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Genero getGenero() {
		return genero;
	}

	public void setGenero(Genero genero) {
		this.genero = genero;
	}

	public Director getDirector() {
		return director;
	}

	public void setDirector(Director director) {
		this.director = director;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public int getAnio() {
		return anio;
	}

	public void setAnio(int anio) {
		this.anio = anio;
	}
}
