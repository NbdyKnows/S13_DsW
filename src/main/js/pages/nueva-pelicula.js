const React = require("react");
const { useState, useEffect } = require("react");
const { Link, useParams } = require("react-router-dom");
const client = require("../client");

const PageNuevaPelicula = () => {
    const [nombre, setNombre] = useState("");

    const [generos, setGeneros] = useState([]);
    const [directores, setDirectores] = useState([]);
    const [idGenero, setIdGenero] = useState("");
    const [idDirector, setIdDirector] = useState("");

    const [descripcion, setDescripcion] = useState("");
    const [anio, setAnio] = useState("");

    const handleSubmit = (evento) => {
        evento.preventDefault();
        client({
            method: "POST",
            path: "/api/peliculas",
            entity: {
                nombre: nombre,
                genero: "http://localhost:8080/api/generos/" + idGenero,
                director:
                    "http://localhost:8080/api/instrumentos/" + idDirector,
                descripcion: descripcion,
                anio: anio,
            },
            headers: { "Content-Type": "application/json" },
        }).done(() => {
            window.location = "/";
        });
    };

    useEffect(() => {
        client({
            method: "GET",
            path: "/api/generos",
        }).done((response) => {
            let generos2 = [];
            response.entity._embedded.generos.map((genero) => {
                generos2.push({
                    value: genero._links.self.href.split("/").slice(-1),
                    label: genero.nombre,
                });
            });
            setGeneros(generos2);
        });
        client({
            method: "GET",
            path: "/api/directores",
        }).done((response) => {
            let directores2 = [];
            response.entity._embedded.directores.map((director) => {
                directores2.push({
                    value: director._links.self.href.split("/").slice(-1),
                    label: director.nombre,
                });
            });
            setDirectores(directores2);
        });
    }, []);

    return (
        <>
            <h1>Nueva Pelicula</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre: </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <label htmlFor="director">Director</label>
                <select
                    name="director"
                    id="director"
                    onChange={(e) => {
                        setIdDirector(e.target.value);
                    }}
                >
                    <option>Seleccione:</option>
                    {directores.map((director) => {
                        return (
                            <option key={director.value} value={director.value}>
                                {director.label}
                            </option>
                        );
                    })}
                </select>
                <br />
                <label>Genero</label>
                <select
                    name="Genero"
                    id="Genero"
                    onChange={(e) => {
                        setIdGenero(e.target.value);
                    }}
                >
                    <option>Seleccione:</option>
                    {generos.map((genero) => {
                        return (
                            <option key={genero.value} value={genero.value}>
                                {genero.label}
                            </option>
                        );
                    })}
                </select>
                <br />
                <div>
                    <label htmlFor="descripcion">Descripcion: </label>
                    <input
                        type="text"
                        id="descripcion"
                        name="descripcion"
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="anio">Año: </label>
                    <input
                        type="number"
                        id="anio"
                        name="anio"
                        step="1"
                        onChange={(e) => setAnio(e.target.value)}
                    />
                </div>

                <input type="submit" value="Nueva Pelicula" />
            </form>
            <Link to="/">Volver</Link>
        </>
    );
};

module.exports = PageNuevaPelicula;
