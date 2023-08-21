const React = require("react");
const client = require("../client");
const { Link } = require("react-router-dom");

class PageHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { generos: [], directores: [], peliculas: [] };
    }
    componentDidMount() {
        client({ method: "GET", path: "/api/generos" }).done((response) => {
            this.setState({ generos: response.entity._embedded.generos });
        });
        client({ method: "GET", path: "/api/directores" }).done((response) => {
            this.setState({ directores: response.entity._embedded.directores });
        });
        client({ method: "GET", path: "/api/peliculas" }).done((response) => {
            this.setState({ peliculas: response.entity._embedded.peliculas });
        });
    }
    render() {
        return (
            <>
                <h1>Demo App!</h1>

                <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ width: "calc(100% / 3)" }}>
                        <Titulo entidad="Directores" emoji="👨‍💼" />
                        <DirectorList directores={this.state.directores} />
                        <Link to="/nuevo-director">Nuevo Director</Link>
                    </div>
                    <div style={{ width: "calc(100% / 3)" }}>
                        <Titulo entidad="Generos" emoji="🎉" />
                        <GeneroList generos={this.state.generos} />
                        <Link to="/nuevo-genero">Nuevo Género</Link>
                    </div>
                    <div style={{ width: "calc(100% / 3)" }}>
                        <Titulo entidad="Peliculas" emoji="🎥" />
                        <PeliculaList peliculas={this.state.peliculas} />
                        <Link to="/nueva-pelicula">Nueva Pelicula</Link>
                    </div>
                </div>
            </>
        );
    }
}

const Titulo = (props) => {
    return (
        <>
            <hr />
            <h2>
                {props.emoji} - {props.entidad}
            </h2>
            <span>Listado completo de {props.entidad.toLowerCase()}:</span>
            <hr />
        </>
    );
};

class GeneroList extends React.Component {
    render() {
        const generos = this.props.generos.map((genero) => (
            <Genero key={genero._links.self.href} genero={genero} />
        ));
        return (
            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                    {generos}
                </tbody>
            </table>
        );
    }
}

class DirectorList extends React.Component {
    render() {
        const directores = this.props.directores.map((director) => (
            <Director key={director._links.self.href} director={director} />
        ));
        return (
            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                    {directores}
                </tbody>
            </table>
        );
    }
}

class PeliculaList extends React.Component {
    render() {
        const peliculas = this.props.peliculas.map((pelicula) => (
            <Pelicula key={pelicula._links.self.href} pelicula={pelicula} />
        ));
        return (
            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                    {peliculas}
                </tbody>
            </table>
        );
    }
}

class Genero extends React.Component {
    render() {
        const id = this.props.genero._links.self.href.split("/").slice(-1);
        return (
            <tr>
                <td>{this.props.genero.nombre}</td>
                <td>
                    <Link to={`/ver-genero/${id}`}>Ver</Link> |
                    <Link to={`/editar-genero/${id}`}>Editar</Link>
                </td>
            </tr>
        );
    }
}

class Director extends React.Component {
    render() {
        const id = this.props.director._links.self.href.split("/").slice(-1);
        return (
            <tr>
                <td>{this.props.director.nombre}</td>
                <td>
                    <Link to={`/ver-director/${id}`}>Ver</Link> |
                    <Link to={`/editar-director/${id}`}>Editar</Link>
                </td>
            </tr>
        );
    }
}

class Pelicula extends React.Component {
    render() {
        const id = this.props.pelicula._links.self.href.split("/").slice(-1);
        return (
            <tr>
                <td>{this.props.pelicula.nombre}</td>
                <td>
                    <Link to={`/ver-pelicula/${id}`}>Ver</Link>
                </td>
            </tr>
        );
    }
}

module.exports = PageHome;
