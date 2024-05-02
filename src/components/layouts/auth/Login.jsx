import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const [getUsuario, setUsuario] = useState("");
    const [getContrasena, setContrasena] = useState("");
    let redireccion = useNavigate();

    const [usuario, setUsuarios] = useState([]);

    const buscarUsuario = () => {
        let estado = usuario.some((usuario) => {
            if (getUsuario === usuario.usuario 
                && getContrasena === usuario.contrasena ) 
                 {
                return true;
            }
        });
        return estado;
    }

    const iniciarSesion = () => {
        if (buscarUsuario()) {
            Swal.fire({
                title: "Bienvenido!",
                text: "Seras redireccionado a la página principal",
                icon: "success"
              });
              redireccion("/")
        }else{
            Swal.fire({
                title: "Error",
                text: "Usuario y/o Contraseña incorrectos",
                icon: "error"
              });
        }
    };
    return(
        <div className="bg-sky-100 py-10 px-7 top-35 w-full z-25 " >
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl mb-4">Iniciar Sesión</h2>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Usuario:</label>
                <input type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) =>{
                    setUsuario(e.target.value)
                }} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Contraseña:</label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="password" 
                           name=""
                           id=""
                    onChange={(e) =>{
                        setContrasena(e.target.value)
                    }} />
                    <div className="flex items-center justify-between">
                    <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={iniciarSesion} 
                    type="button">
                        Iniciar Sesión
                    </button>
                    </div>
                    <p>¿No tienes una cuenta? <Link to="/Registro" className="text-blue-500 hover:text-blue-800">Registrate Aquí</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login