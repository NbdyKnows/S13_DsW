const React = require('react');
const client = require('../client');
const { Link, useParams, } = require('react-router-dom');
const {useState} = require('react');



const PageVerDirector = (props) => {

    // const id = props.match.params.id;
    let { id } = useParams();
    const [director, setDirector] = useState({});

    client({
        method: 'GET',
        path: '/api/directores/' + id
    }).done(response => {
        setDirector(response.entity);
        // console.log(response.entity);
    });


    return (
        <>
            <h1>Ver Director</h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{director.nombre}</td>
                </tr>
                <tr>
                    <th>Edad</th>
                    <td>{director.edad}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageVerDirector;