//Entrada
//  stock de silos (maiz) 1, 2 y 3
//  cantidad de maiz recibida (3k toneladas)

//Proceso
//  verificar si los silos se encuentran en optimas condiciones (V)
//  verificar si hay irregularidades en la recepcion del grano (V)
//  controlar calidad de los granos y descargar en el silo correspondiente (V)
//  verificar si hay irregularidades en el almacenamiento  (V)
//  sumar stock descargado en silo correspondiente (V)

//Salida
//  ver Stock del silo (V)
//  Informar Stock a los empleados de la cooperativa (V)
//  Informar al supervisor si hubo un problema en la recepcion o el almacenamiento (V)

/* Importante!
antes de la recepcion verificar que el silo se encuentre en condiciones optimas
verificar limpieza
verificar ventilacion

si hay irregularidades:
recepcion --> informar de inmediato al superior
almacenamiento --> informar de imediato al superior

verificar calidad de los granos
silo 1: esta ok
silo 2: cuerpos extranios
silo 3: humedad
*/

function siloOptimo() {
  let limpieza = prompt("La limpieza del silo es adecuada?\n1.Si\n2.No");
  let ventilacion = prompt("La ventilacion del silo es adecuada?\n1.Si\n2.No");

  if (limpieza == 1 && ventilacion == 1) {
    return true;
  }
  return false;
}

function recepcionOptima() {
  let irregularidad = prompt(
    "Hubo alguna irregularidad en la recepcion del grano?\n1.Si\n2.No"
  );

  if (irregularidad == 1) {
    return false;
  }

  return true;
}

function calidadGranos() {
  let calidad = prompt(
    "Ingrese la calidad del grano recibido para luego almacenarlo\n1.Limpio\n2.Cuerpos extraños\n3.Humedo"
  );
  alert(`El maiz se almacenara en el silo ${calidad}`);
  return parseInt(calidad);
}

function alamacenamientoOptimo() {
  let irregularidad = prompt(
    "Hubo alguna irregularidad en el almacenamiento del grano?\n1.Si\n2.No"
  );
  if (irregularidad == 1) {
    return false;
  }
  return true;
}

function mostrarStock(stockSilo1, stockSilo2, stockSilo3) {
  alert(`Stock de los silos
    Silo 1: ${stockSilo1} toneladas
    Silo 2: ${stockSilo2} toneladas
    Silo 3: ${stockSilo3} toneladas
    `);
}

function informarStock() {
  alert(
    `Los empleados de la cooperativa han sido informados del stock actualizado`
  );
}

function informarIrregularidad(recepcionOk, almacenamientoOk) {
  if (!recepcionOk && !almacenamientoOk) {
    alert(
      `El supervisor sera informado que hubo irregularidades en la recepcion y el almacenamieto del grano`
    );
  } else if (!recepcionOk && almacenamientoOk) {
    alert(
      "El supervisor sera informado que hubo irregularidades en la recepcion del grano"
    );
  } else if (recepcionOk && !almacenamientoOk) {
    alert(
      "El supervisor sera informado que hubo irregularidades en el almacenamiento del grano"
    );
  }
}

// Entradas
let stockSilo1 = 0; //granos de maiz en estado optimo
let stockSilo2 = 0; //granos de maiz con cuerpos extranios
let stockSilo3 = 0; //granos de maiz con humedad
let granosRecibidos = 3000; //toneladas de granos de maiz recibidas (no descargadas aun)

// Proceso
if (siloOptimo()) {
  alert("El silo esta Ok");
}

let calidad = calidadGranos();
let recepcionOk = recepcionOptima();
let almacenamientoOk = alamacenamientoOptimo();

switch (calidad) {
  case 1:
    stockSilo1 += granosRecibidos;
    break;
  case 2:
    stockSilo2 += granosRecibidos;
    break;
  case 3:
    stockSilo3 += granosRecibidos;
    break;
}

// Salidas
mostrarStock(stockSilo1, stockSilo2, stockSilo3);
informarStock();
informarIrregularidad(recepcionOk, almacenamientoOk);
