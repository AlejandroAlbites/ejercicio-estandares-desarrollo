//   En su proyecto ejercicio-estandares-desarrollo, van a realizar una aplicación serverless+nodejs+typescript (Ejercicio 07).
// - Solucionar el sgte problema, mediante promesas:
//     Mi amiga Kayo promete hacer una torta para mi cumpleaños en dos semanas.
//     Si todo va bien, y Kayo no se enferma, tendremos una cierta cantidad de tortas. (Las tortas son contables en este tutorial 😆).
//  De lo contrario, si Kayo se enferma, no tendremos tortas.
//     De cualquier manera, todavía vamos a tener una fiesta.
// Consideraciones:

// -Test

// -Commits

// -Solid

// -Uso de patrones

// -TDD (deseable)

const getCake = (isSick: boolean) => {
  let cakes: number;

  return new Promise((resolve, reject) => {
    if (isSick) {
      cakes = 0;
      reject(
        `Kayo esta enferma, la cantidad de tortas sera ${cakes}, pero igual habrá fiesta`
      );
    }
    cakes = 20;
    resolve(`Kayo no esta enferma, nos va preparar ${cakes} tortas`);
  });
};

export default getCake;
