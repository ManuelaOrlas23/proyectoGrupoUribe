import axios from "axios";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import Swal from "sweetalert2";



const Registro = () => {
  const [getUsuarios, setUsuarios] = useState("");
  const [getApellidos, setApellidos] = useState("");
  const [getCedula, setCedula] = useState("");
  const [getDireccion, setDireccion] = useState("");
  const [getContrasenas, setContrasenas] = useState("");
  const [getCorreos, setCorreos] = useState("");
  const [getPais, setPais] = useState("");
  const [getDepartamento, setDepartamento] = useState("");
  const [getMunicipio, setMunicipio] = useState("");
  const [getCodigoPostal, setCodigoPostal] = useState("");
  const [getGenero, setGenero] = useState("");

  let redireccion = useNavigate();

  const buscarUsuario = () => {
    let estado = usuario.some((usuario) => {
      if (
        getUsuarios === usuario.usuario &&
        getContrasenas === usuario.contrasena &&
        getApellidos === usuario.apellido &&
        getCedula === usuario.cedula &&
        getDireccion === usuario.direccion &&
        getCorreos === usuario.correo &&
        getPais === usuario.pais &&
        getDepartamento === usuario.departamento &&
        getMunicipio === usuario.municipio &&
        getCodigoPostal === usuario.codigoPostal &&
        getGenero === usuario.genero
      ) {
        return true;
      }
    });
    return estado;
  };
  const agregarUsuario = async () => {
    let usuarioNuevo = {
      id: Math.round(Math.random() * 100).toFixed(0),
      usuario: getUsuarios,
      contrasena: getContrasenas,
    };
    await axios.post(usuarioNuevo);
  };

  const registrarUsuario = (e) => {
    e.preventDefault();
    if (buscarUsuario()) {
      Swal.fire({
        title: "Error",
        text: "Usuario ya existe en la base de datos",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Bienvenido!",
        text: "Seras redireccionado al login",
        icon: "success",
      });
      redireccion("/Login");
    }
  };
  return (
    <div className="bg-sky-100 py-10 px-7 top-35 w-full z-25 ">
      <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4 text-center">Registrar Usuario</h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombres:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => {
              setUsuarios(e.target.value);
            }}
          />
          <div>
            <label
              htmlFor="apellido"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Apellidos:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => {
                setApellidos(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="cedula"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Cedula:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => {
                setCedula(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="direccion"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Dirección:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => {
                setDireccion(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Correo Electronico:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => {
                setCorreos(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Contraseña:
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => {
                setContrasenas(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="genero"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Genero
            </label>
            <select name="" id="">
              <option
                value="mujer"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Mujer
              </option>
              <option
                value="hombre"
                className="block text-gray-700 text-sm font-bold mb-2"
              onChange={(e) => {
                setGenero(e.target.value);
              }}
              >
                Hombre
              </option>
              <option
                value="otro"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Otro
              </option>
            </select>
            {/* <input
              type="text"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            /> */}
          </div>
          <div>
            <label
              htmlFor="pais"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Pais:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => {
                setPais(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="departamento"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Departamento:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => {
                setDepartamento(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="municipio"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Municipio:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => {
                setMunicipio(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="codigo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Codigo Postal:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => {
                setCodigoPostal(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={(e) => registrarUsuario(e)}
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Registrar Usuario
            </button>
          </div>
          <Link to="/Login" className="text-blue-500 hover:text-blue-800">
            ¿Ya tienes una cuenta? Inicia sesión aquí
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Registro;
