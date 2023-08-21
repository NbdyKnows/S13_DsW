package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(path="/api/bandas/{id}/formacion")
	public @ResponseBody List<Map<String, Object>> formacion(@PathVariable Integer id){
		String sql = "SELECT integrante.id as ID, musico.nombre as MUSICO, instrumento.nombre as INSTRUMENTO FROM integrante JOIN musico ON integrante.id_musico = musico.id JOIN instrumento ON integrante.id_instrumento = instrumento.id WHERE id_banda = ?";
		List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;
	}

	@GetMapping(path="/api/peliculas/{id}/peli")
	public @ResponseBody List<Map<String, Object>> peli(@PathVariable Integer id){
		String sql = "SELECT pelicula.nombre as NOMBRE, director.nombre as DIRECTOR, genero.nombre as GENERO, pelicula.anio as ANIO, pelicula.descripcion as DESCRIPCION FROM pelicula JOIN director ON pelicula.id_director= director.id JOIN genero ON pelicula.id_genero = genero.id WHERE pelicula.id = ?";
		List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;
	}

}