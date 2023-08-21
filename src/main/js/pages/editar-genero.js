const React = require('react');
const {useState, useEffect} = require('react');
const {useParams, Link} = require('react-router-dom');
const client = require('../client');

const PageEditarGenero = ()=>{

    const {id} = useParams();
    const [director, setDirector] = useState({});
    const [genero, setGenero] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/generos/'+id,
            headers: {'Content-Type': 'application/json'}
        }).done((response)=>{
            setGenero(response.entity)
        })    
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        client({
            method: "PATCH",
            path: "/api/generos/" + id,
            headers: { "Content-Type": "application/json" },
            entity: genero,
        }).done(() => (window.location = "/"));
    }

    return (
        <>
            <h1>Editar Genero: {id}</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={genero.nombre}
                    onChange={(e) => {
                        setGenero({ ...genero, nombre: e.target.value });
                    }}
                />
                <br />

                <input type="submit" value={`Editar Genero ${id}`} />
            </form>
            <Link to="/">Volver</Link>
        </>
    );

}

module.exports = PageEditarGenero;