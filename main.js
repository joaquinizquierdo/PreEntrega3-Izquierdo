let usuario = '';
usuario = localStorage.getItem('nombre');
console.log(usuario);

let nombre = document.getElementById('nombreOperador');

if (usuario == '') {
    usuario = prompt('Ingresar nombre del operador');
    localStorage.setItem('nombre', usuario);
    nombre.innerText = 'Operador' + usuario;
}

const limpiar = document.getElementById ("btnBorrar");
limpiar.addEventListener ("click", limpiarStorage);

function limpiarStorage () {
    localStorage.setItem ('nombre', '');
    usuario = prompt('Ingresar nombre del operador');
    localStorage.setItem('nombre', usuario);
    nombre.innerText = 'Operador ' + usuario;
}

class Cancha {
    constructor (precio) {
        this.vecesUsada = 0;
        this.recaudado = 0;
        this.hora = [];
        this.horaDato;
        this.valor = [precio, precio * 0.9];// Precio sin descuento (array 0) y precio con descuento (array 1)
        this.guardar;
    }
    guardarValores () {
        this.vecesUsada++;
        if (descuentoDato === true) {
            this.recaudado = this.recaudado + this.valor[1];
            descuentoDato = false; //Reseteo el valor
            descuento.innerText = 'Aplicar descuento'; //Reseteo el boton
        } else {
            this.recaudado = this.recaudado + this.valor[0];
        }
        this.hora.push(this.horaDato.value);
        this.hora.sort((a,b) => a - b);
    }
}

const cancha1 = new Cancha (2000);

cancha1.guardar = document.getElementById("btnGuardar");
cancha1.guardar.addEventListener("click", guardarReserva);

cancha1.horaDato = document.getElementById("horario");

function guardarReserva () {
    cancha1.guardarValores ();

    const veces = document.getElementById ('vecesCancha');
    veces.innerText = 'Veces usada: ' + cancha1.vecesUsada;

    const total = document.getElementById ('totalCancha');
    total.innerText = 'Recaudado: $' + cancha1.recaudado;

    const horarios = document.getElementById ('horariosCancha');
    horarios.innerText = 'Horarios: ' + cancha1.hora.join(', ');
}

//Boton de descuento

let descuentoDato = false;
const descuento = document.getElementById ("btnDescuento");
descuento.addEventListener ("click", aplicarDescuento);

function aplicarDescuento () {
    if (descuentoDato === false) {
        descuentoDato = true;
        console.log('Descuento aplicado');
        descuento.innerText = 'Cancelar descuento';
    } else {
        descuentoDato = false;
        console.log('Descuento removido');
        descuento.innerText = 'Aplicar descuento';
    }
}