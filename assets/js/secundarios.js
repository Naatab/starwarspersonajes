const receptorSecundarios = document.getElementById(`receptorSecundarios`);

export const getInfoFromApiSecundarios = (index) => {

        fetch(`https://swapi.dev/api/people/${index}/`)
        .then(response => response.json())
        .then(datos => {

                insertarPersonaje(index, datos);

        })
        .catch(() => {
                console.log(error);

        });

};

const insertarPersonaje =(index, datos) => {
        const div = `<div class="card cardPersonaje shadowGreen">
                      <div class="card-body cuerpoCardSecundarios">
                        <p class="circuloVerde"></p>
                         <div id="mostrarSecundario${index}">
                           <h4 id="nombre${index}">${datos.name}</h4>
                           <p id="estatura${index}">Estatura: ${datos.height} cm. Peso: ${datos.mass} kg.</p>
                         </div>
                      </div>`;

        receptorSecundarios.innerHTML += div;
};
