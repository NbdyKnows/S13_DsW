const React = require('react');
const {useState, useEffect} = require('react');
const {useParams, Link} = require('react-router-dom');
const client = require('../client');

const PageEditarDirector = ()=>{

    const {id} = useParams();
    const [director, setDirector] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/directores/'+id,
            headers: {'Content-Type': 'application/json'}
        }).done((response)=>{
            setDirector(response.entity)
        })    
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        client({
            method: "PATCH",
            path: "/api/directores/" + id,
            headers: { "Content-Type": "application/json" },
            entity: director,
        }).done(() => (window.location = "/"));
    }

    return (
        <>
            <h1>Editar Director: {id}</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={director.nombre}
                    onChange={(e) => {
                        setDirector({ ...director, nombre: e.target.value });
                    }}
                />
                <br />
                <label>Edad</label>
                <input
                    type="number"
                    name="edad"
                    step="1"
                    value={director.edad}
                    onChange={(e) => {
                        setDirector({
                            ...director,
                            edad: e.target.value,
                        });
                    }}
                />
                <br />

                <input type="submit" value={`Editar Director ${id}`} />
            </form>
            <Link to="/">Volver</Link>
        </>
    );

}

module.exports = PageEditarDirector;