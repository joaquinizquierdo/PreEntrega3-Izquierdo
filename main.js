let usuario = '';
usuario = localStorage.getItem('nombre');
console.log(usuario);

let nombre = document.getElementById('nombreOperador');
nombre.innerText = 'Operador ' + usuario;

if (usuario == '') {
    usuario = prompt('Ingresar nombre del operador');
    localStorage.setItem('nombre', usuario);
    nombre.innerText = 'Operador ' + usuario;
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

    Toastify ({
        text: "Reserva guardada",
        duration: 1200,
        style: {
            background: '#515151'
        }
    }).showToast();
}

//Boton de descuento

let descuentoDato = false;
const descuento = document.getElementById ("btnDescuento");
descuento.addEventListener ("click", aplicarDescuento);

function aplicarDescuento () {
    if (descuentoDato === false) {
        descuentoDato = true;
        descuento.innerText = 'Cancelar descuento';
        Toastify ({
            text: "Descuento aplicado",
            duration: 1000,
            style: {
                background: '#515151'
            }
        }).showToast();
    } else {
        descuentoDato = false;
        descuento.innerText = 'Aplicar descuento';
        Toastify ({
            text: "Descuento removido",
            duration: 1000,
            style: {
                background: '#515151'
            }
        }).showToast();
    }
}

//Clima

const getWeatherByCity = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=buenos aires&appid=e90599a9e72a1d9d12374c927799735b`)
    const data = await response.json()
    showWeather(data)
};

getWeatherByCity()

const showWeather = (data) => {
const temp = getCelsius(data.main.temp)
const div = document.createElement('div')

div.innerHTML = `
    <h4>
        ${data.name}: ${temp}°, ${data.weather[0].main}
    </h4>

`
clima.innerHTML = ''
clima.appendChild(div)
};

const getCelsius = (kelvin) => {
return Math.floor(kelvin - 273)
};