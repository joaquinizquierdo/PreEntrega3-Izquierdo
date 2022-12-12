class Cancha {
    constructor (precio) {
        this.vecesUsada = 0;
        this.recaudado = 0;
        this.hora = [];
        this.valor = [precio, precio * 0.9];// Precio sin descuento (array 0) y precio con descuento (array 1)
/*         this.valorDescuento = precio * 0.9; */
    }
}

const cancha1 = new Cancha (2000);
const cancha2 = new Cancha (2500);
const cancha3 = new Cancha (3000);

let opcion;
let seguir = true;

function aplicarDescuento(cancha, precionDescuento, precioNormal) {
    let descuento = false;
    descuento = confirm('¿Se aplico el descuento?');
    if (descuento == true) {
        cancha = cancha + precionDescuento;
        console.log('Descuento aplicado');
        return cancha;
    } else {
        cancha = cancha + precioNormal;
        console.log('Descuento no aplicado');
        return cancha;      
    }
}

do {
    opcion = parseInt(prompt('Selecione una opción\n 1- Anotar cancha número 1\n 2- Anotar cancha número 2\n 3- Anotar cancha número 3\n 4- Cerrar día y mostrar informe', 'Ej: 1'));

    switch (opcion) {
        case 1:
            cancha1.vecesUsada++;
            cancha1.hora.push(prompt('¿En que horario?'));
            cancha1.recaudado = aplicarDescuento(cancha1.recaudado, cancha1.valor[1], cancha1.valor[0]);
            alert('Se jugo en la cancha 1: ' + cancha1.vecesUsada + ' veces');
            break;
        case 2:
            cancha2.vecesUsada++;
            cancha2.hora.push(prompt('¿En que horario?'));
            cancha2.recaudado = aplicarDescuento(cancha2.recaudado, cancha2.valor[1], cancha2.valor[0]);
            alert('Se jugo en la cancha 2: ' + cancha2.vecesUsada + ' veces');
            break;
        case 3:
            cancha3.vecesUsada++;
            cancha3.hora.push(prompt('¿En que horario?'));
            cancha3.recaudado = aplicarDescuento(cancha3.recaudado, cancha3.valor[1], cancha3.valor[0]);
            alert('Se jugo en la cancha 3: ' + cancha3.vecesUsada + ' veces');
            break;
        case 4:
            seguir = false;
            break;
        default:
            opcion = parseInt(prompt('Selecione una opción\n 1- Anotar cancha número 1\n 2- Anotar cancha número 2\n 3- Anotar cancha número 3\n 4- Cerrar día y mostrar informe', 'Ej: 1'))
    }
} while (seguir)

/* alert('En la cancha 1 se jugo ' + cancha1.vecesUsada + ' veces. Y se recaudo $' + cancha1.recaudado + '\n En la cancha 2 se jugo ' + cancha2.vecesUsada + ' veces. Y se recaudo $' + cancha2.recaudado  + '\n En la cancha 3 se jugo ' + cancha3.vecesUsada + ' veces. Y se recaudo $' + cancha3.recaudado); */

cancha1.hora.sort((a, b) => a - b);
cancha2.hora.sort((a, b) => a - b);
cancha3.hora.sort((a, b) => a - b);

alert('Cancha 1:\nSe jugo ' + cancha1.vecesUsada + ' veces. Y se recaudo $' + cancha1.recaudado + '\nHorarios:\n' + cancha1.hora.join('\n'));
alert('Cancha 2:\nSe jugo ' + cancha2.vecesUsada + ' veces. Y se recaudo $' + cancha2.recaudado + '\nHorarios:\n' + cancha2.hora.join('\n'));
alert('Cancha 3:\nSe jugo ' + cancha3.vecesUsada + ' veces. Y se recaudo $' + cancha3.recaudado + '\nHorarios:\n' + cancha3.hora.join('\n'));

