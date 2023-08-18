const React = require("react");
const client = require("../client");
const { Link } = require("react-router-dom");
const { useState } = require("react");

const PageNuevoInstrumento = () => {
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: "POST",
            path: "/api/instrumentos",
            entity: {
                nombre: nombre,
                categoria: categoria,
                descripcion: descripcion,
            },
            headers: { "Content-Type": "application/json" },
        }).done(() => {
            window.location = "/";
        });
    };

    return (
        <>
            <h1>Nuevo Instrumento</h1>
            <form onSubmit={handleSubmit}>
                <div className="textbox">
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        onChange={(e) => setNombre(e.target.value)}
                        autocomplete="off"
                        required
                    />
                    <label htmlFor="nombre">Nombre</label>
                </div>
                <br />
                <div className="textbox">
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"
                        onChange={(e) => setCategoria(e.target.value)}
                        autocomplete="off"
                        required
                    />
                    <label htmlFor="categoria">Categoría</label>
                </div>

                <br />
                <div className="textbox">
                    <input
                        cols={30}
                        id="descripcion"
                        name="descripcion"
                        onChange={(e) => setDescripcion(e.target.value)}
                        autocomplete="off"
                        required
                    />
                    <label htmlFor="descripcion">Descripcion</label>
                </div>
                <br />
                <br />
                <input class="boton" type="submit" value="Nuevo Instrumento" />
            </form>
            <Link to="/">Volver</Link>
        </>
    );
};

module.exports = PageNuevoInstrumento;
