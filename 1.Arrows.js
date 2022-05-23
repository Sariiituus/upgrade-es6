/* Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros. */

const newArrow = (a = 10, b = 5) => {
    console.log(a+b);
}

// 1.1 Ejecuta esta función sin pasar ningún parametro
newArrow();


// 1.2 Ejecuta esta función pasando un solo parametro
newArrow(3);


// 1.3 Ejecuta esta función pasando dos parametros
newArrow(8,4);