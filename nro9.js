console.log("Ejercicio Nro 9");

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const nroRandom = () => {
  let x;
  let pase = false;
  let intentos = 0;
  do {
    x = Math.floor(Math.random() * 1000);
    intentos++;
    if (x >= 501) {
      if (x <= 600) {
        pase = true;
      }
    }
  } while (!pase);
  console.log(
    `El número aleatoreo es ${x} y me tomó ${intentos} intentos encontrarlo`
  );
};

nroRandom();
