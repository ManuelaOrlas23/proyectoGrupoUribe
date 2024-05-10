export async function consumirDatosApi(){

    let url="http://localhost:8080/storeapi/v1/producto"

    let peticion={
        method:"GET"
    }

    let respuesta=await fetch(url,peticion)

    let datos=await respuesta.json()

    return(datos)

}

export async function consumirDatosApiAE(){

    let url="http://localhost:8080/storeapi/v1/marca/2"

    let peticion={
        method:"GET"
    }

    let respuesta=await fetch(url,peticion)

    let datos=await respuesta.json()

    return(datos.productos)

}

export async function consumirDatosApiCH(){

    let url="http://localhost:8080/storeapi/v1/marca/3"

    let peticion={
        method:"GET"
    }

    let respuesta=await fetch(url,peticion)

    let datos=await respuesta.json()

    return(datos.productos)


}

export async function consumirDatosApiEs(){

    let url="http://localhost:8080/storeapi/v1/marca/4"

    let peticion={
        method:"GET"
    }

    let respuesta=await fetch(url,peticion)

    let datos=await respuesta.json()

    return(datos.productos)

}

export async function consumirDatosApiGs(){

    let url="http://localhost:8080/storeapi/v1/marca/5"

    let peticion={
        method:"GET"
    }

    let respuesta=await fetch(url,peticion)

    let datos=await respuesta.json()

    return(datos.productos)

}