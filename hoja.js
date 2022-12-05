// INTRODUCCION A LA SINTAXIS DE LA API FETCH

//fetch(URL)

// DESPUES DEL METODO FETCH(), SE INCLUYE EL METODO DE PROMESA  .THEN();

//.then(function(){


//})

// con el metodo fetch() se obtiene una promesa, si la promesa devuelta es "resolver", 
// se ejecuta la funcion dentro del metodo then(), esa funcion el codigo para gestionar
// los datos recibidos de la Api

//.catch(function(){


//})

// la Api que llamemos mediante fetch() puede estar inactiva o pueden producirse errores, si el pasa
//se mostrara la promesa del "reject". El metodo catch se usa para gestionar "reject" el codigo
//dentro de "catch" se ejecutara si se produce un error al llamar a la Api de nuestras eleccion


// para resumir, usar la Api fetch se va a ver asi

//fetch(URL)
//.then(function(){

//})
//.catch(function(){

//})

//fetch('https://pokeapi.co/api/v2/pokemon')
//.then(Response => Response.json())
//.then(data => console.log(data))
//.then(data => {
//    data.results.forEach(pokemon =>{
//        console.log('%c' + pokemon.name, 'background: #777; color:#fff; font-size: 20px')
//    });
//});


const contenedor = document.getElementById("contenedor-tarjetas");
console.log(contenedor);

fetch("https://rickandmortyapi.com/api/character")
    .then(respuesta => respuesta.json())
    .then(data => {
        const dataApi = data.results
        console.log(dataApi)


        let apiRick = ""
        for (let i = 0; i < dataApi.length; i++) {
            apiRick = apiRick + `
        <div class = "card">
        <div class = "container-img">
        <img src= ${dataApi[i].image} alt=${dataApi[i].name}>
        </div>
        <p>
        ${dataApi[i].name}
        </p>

        </div>

        `
        }
        contenedor.innerHTML = apiRick
    })