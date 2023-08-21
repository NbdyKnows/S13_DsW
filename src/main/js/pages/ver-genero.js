const React = require('react');
const client = require('../client');
const { Link, useParams, } = require('react-router-dom');
const {useState} = require('react');



const PageVerGenero = (props) => {

    // const id = props.match.params.id;
    let { id } = useParams();
    const [genero, setGenero] = useState({});

    client({
        method: 'GET',
        path: '/api/generos/' + id
    }).done(response => {
        setGenero(response.entity);
        // console.log(response.entity);
    });


    return (
        <>
            <h1>Ver Genero</h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{genero.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageVerGenero;