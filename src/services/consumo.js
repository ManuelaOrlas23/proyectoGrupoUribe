export async function consumirDatosApi(){

    let url="http://localhost:8080/storeapi/v1/producto"

    let peticion={
        method:"GET"
    }

    let respuesta=await fetch(url,peticion)

    let datos=await respuesta.json()

    return(datos)

}