const receptorSignificativos = document.getElementById(`receptorSignificativos`);

export const getInfoFromApiSignificativos = (index) => {

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
        const div = `<div class="card cardPersonaje shadowBlue">
                      <div class="card-body cuerpoCardSignificativos">
                        <p class="circuloCeleste"></p>
                         <div id="mostrarSignificativos${index}">
                           <h4 id="nombre${index}">${datos.name}</h4>
                           <p id="estatura${index}">Estatura: ${datos.height} cm. Peso: ${datos.mass} kg.</p>
                         </div>
                      </div>`;

        receptorSignificativos.innerHTML += div;
};
