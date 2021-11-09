//declaracion de las variables
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let mascota = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
    resultado.innerHTML = retorno(mascota);
    let form = document.querySelector('form');
    let retorno = (mascota) => {
    return `<li>${mascota.datosPropietario()}</li><li> Su mascota es un ${mascota.tipo} y su nombre es ${mascota.nombreMascota} y la enfermedad es ${mascota.enfermedad}</li>`
}
});


