const receptorPrincipales = document.getElementById(`receptorPrincipales`);

export const getInfoFromApiPrincipales = (index) => {

        fetch(`https://swapi.dev/api/people/${index}/`)
                .then(response => response.json())
                .then(datos => {

                        insertarPersonaje(index, datos);

                })
                .catch(() => {
                        console.log(error);

                });

};

const insertarPersonaje = (index, datos) => {
        const div = `<div class="card cardPersonaje shadowRed">
                      <div class="card-body cuerpoCardPrincipales">
                        <p class="circuloRojo"></p>
                         <div id="mostrarPrincipal${index}">
                           <h4 id="nombre${index}">${datos.name}</h4>
                           <p id="estatura${index}">Estatura: ${datos.height} cm. Peso: ${datos.mass} kg.</p>
                         </div>
                      </div>`;

        receptorPrincipales.innerHTML += div;
};
