const React = require("react");
const client = require("../client");
const { Link, useParams } = require("react-router-dom");
const { useState, useEffect } = require("react");

const PageVerPelicula = (props) => {
    // const id = props.match.params.id;
    let { id } = useParams();
    const [pelicula, setPelicula] = useState([]);

    useEffect(() => {
        url_peli = "/api/peliculas/" + id;

        client({
            method: "GET",
            path: url_peli + "/peli",
        }).done((response) => setPelicula(response.entity));
    }, []);

    return (
        <>
            <h1>Ver Pelicula</h1>
            {pelicula.length > 0 && (
                <table>
                    <tbody>
                        <tr>
                            <th>Nombre: </th>
                            <td>{pelicula[0].NOMBRE}</td>
                        </tr>
                        <tr>
                            <th>Director: </th>
                            <td>{pelicula[0].DIRECTOR}</td>
                        </tr>
                        <tr>
                            <th>Genero: </th>
                            <td>{pelicula[0].GENERO}</td>
                        </tr>
                        <tr>
                            <th>Año de estreno: </th>
                            <td>{pelicula[0].ANIO}</td>
                        </tr>
                        <tr>
                            <th>Descripción: </th>
                            <td>{pelicula[0].DESCRIPCION}</td>
                        </tr>
                    </tbody>
                </table>
            )}

            <Link to="/">Volver</Link>
        </>
    );
};

module.exports = PageVerPelicula;
