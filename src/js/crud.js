const urlCrud = "https://reqres.in/api/users";

const getUsuario = async(id) => {

    const respuesta = await fetch(`${urlCrud}/${id}`);
    const {data} = await respuesta.json();

    return data;
}

const crearUsuario = async(usuario) => {

    const respuesta = await fetch(urlCrud, {

        method: "POST",
        body: JSON.stringify(usuario),
        headers: {

            "Content-Type": "application/json"
        }
    });

    return await respuesta.json();
}

const actualizarUsuario = async(id, usuario) => {

    const respuesta = await fetch(`${urlCrud}/${id}`, {

        method: "PUT",
        body: JSON.stringify(usuario),
        headers: {

            "Content-Type": "application/json"
        }
    });

    return await respuesta.json();
}

const borrarUsuario = async(id) => {

    const respuesta = await fetch(`${urlCrud}/${id}`, {

        method: "DELETE"
    });

    return (respuesta.ok) ? "Borrado" : "No se pudo eliminar";
}

export{
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}