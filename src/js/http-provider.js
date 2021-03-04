const jokeUrl = "https://api.chucknorris.io/jokes/random";
const Datos = "https://reqres.in/api/users?page=2";

//Cloudinary
const cloudPreset = "ov5tnzzh";
const cloudUrl = "https://api.cloudinary.com/v1_1/hramrez2240/upload";

const obtenerChiste = async() => {

    try{
        const respuesta = await fetch(jokeUrl);

        if(!respuesta.ok){
            return alert("No se pudo realizar la petición");
        }

        const {icon_url, id, value} = await respuesta.json();

        return {icon_url, id, value};

    } catch(err){
        
        throw err;
    }
}

const obtenerDatos = async() => {

    try{

        const respuesta = await fetch(Datos);
        const {data} = await respuesta.json();
        
        return data;

    } catch(err){

        throw err;
    }
}

//archivoSubir tipo file
const subirImagen = async(archivoSubir) => {

    const formData = new FormData();
    formData.append("upload_preset", cloudPreset);
    formData.append("file", archivoSubir);

    try{

        const respuesta = await fetch(cloudUrl, {

            method: "POST",
            body: formData
        });

        if(respuesta.ok){

            const cloudrespuesta = await respuesta.json();
            return cloudrespuesta.secure_url;

        } else{

            throw await respuesta.json();
        }
    } catch(err){

        throw err;
    }
}

export {
    obtenerChiste,
    obtenerDatos,
    subirImagen
}

// fetch(jokeUrl).then(respuesta => {

//     respuesta.json().then(({id, value}) => { //Desestructuración
//         console.log(id);
//         console.log(value);
//     });
// });

//Forma fácil usando promesas en cadenas
// fetch(jokeUrl)
//     .then(respuesta => respuesta.json())
//     .then(({id, value}) => {
//         console.log(id);
//         console.log(value);
//     });