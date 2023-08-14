const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');
const { useState } = require('react');

const PageNuevaBanda = () => {

    const [nombre, setNombre] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/bandas',
            entity: { nombre: nombre },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    }

    return (
        <>
            <h1>Nuevo Banda</h1>
            <form onSubmit={handleSubmit}>
                <label>Banda</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                <input type="submit" value="Nueva Banda" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevaBanda;