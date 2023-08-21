const React = require("react");
const client = require("../client");
const { Link } = require("react-router-dom");
const { useState } = require("react");

const PageNuevoDirector = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: "POST",
            path: "/api/directores",
            entity: {
                nombre: nombre,
                edad: edad,
            },
            headers: { "Content-Type": "application/json" },
        }).done(() => {
            window.location = "/";
        });
    };

    return (
        <>
            <h1>Nuevo Director</h1>
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
                <br />
                <div>
                    <label htmlFor="edad">Edad: </label>
                    <input
                        type="number"
                        id="edad"
                        name="edad"
                        step="1"
                        onChange={(e) => setEdad(e.target.value)}
                    />
                </div>

    
                <br />
                <br />
                <input type="submit" value="Nuevo Director" />
            </form>
            <Link to="/">Volver</Link>
        </>
    );
};

module.exports = PageNuevoDirector;
