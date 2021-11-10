class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario() {
        return(`El nombre del propietario es ${this.nombre}, su dirección es ${this.direccion} y su teléfono es ${this.telefono}.`)
    }
};
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }

};
class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota() {
        return this._nombreMascota;
    }
    set nombreMascota(newPetName) {
        this._nombreMascota = newPetName;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad;
    }
};

let form = document.querySelector('form');

let retorno = (mascota) => {
    return `<li>${mascota.datosPropietario()}</li><li> Su mascota es un ${mascota.tipo} y su nombre es ${mascota.nombreMascota} y la enfermedad es ${mascota.enfermedad}</li>`
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

let nombre = document.getElementById('propietario').value;
let telefono = document.getElementById('telefono').value;
let direccion = document.getElementById('direccion').value;
let nombreMascota = document.getElementById('nombreMascota').value;
let tipo = document.getElementById('tipo').value;
let enfermedad = document.getElementById('enfermedad').value;

let mascota = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
    resultado.innerHTML = retorno(mascota);
});
