export default function Page() {

    const num5 = 5;
    const num5texto = "5";
    const num10texto = '10';
    const variableNula = null;
    let variableIndefinida;
    const objetoVacio : {nombre?: string, edad?: number} = {};
    const arrayVacio = [];
    const objetoLleno = { nombre: "Goku", edad: 30 };
    const arrayLleno = [1, 2, 3, 4, 5];

    console.log("5 + '10' = ", num5 + num10texto); // 510


    // Comparaciones
    console.log('num5 == num5 = ', num5 == num5);
    console.log('num5 == num5texto = ', num5 == num5texto);

    console.log('num5 === num5 = ', num5 === num5); // true
    console.log('num5 === num5texto = ', num5 === num5texto); // false

    const texto1 = "Hola";
    const texto2 = "Mundo";
    console.log("Hola + Mundo:, ", texto1 + texto2); // HolaMundo

    const boleanoTrue = true;
    const boleanoFalse = false;

    // operador ternario
    const resultado = boleanoTrue ? "Es verdadero" : "Es falso";
    console.log('boleanoTrue ? "Es verdadero" : "Es falso" = ', resultado); // Es verdadero
    const resultado2 = boleanoFalse ? "Es verdadero" : "Es falso";
    console.log('boleanoFalse ? "Es verdadero" : "Es falso" = ', resultado2); // Es verdadero
    console.log('variableNula ? "Es verdadero" : "Es falso" = ', variableNula ? "Es verdadero" : "Es falso"); // Es falso
    console.log('objetoVacio = ', objetoVacio ? "El objeto está lleno" : "El objeto está vacío"); // {}
    console.log('objetoLleno = ', objetoLleno ? "El objeto está lleno" : "El objeto está vacío"); // {}

    // operador de cortocircuito
    const resultado3 = boleanoTrue && "Es verdadero";
    console.log('boleanoTrue && "Es verdadero" = ', resultado3); // Es verdadero
    const resultado4 = boleanoFalse && "Es verdadero";
    console.log('boleanoFalse && "Es verdadero" = ', resultado4); // Es verdadero
    console.log('objetoVacio && "El objeto está lleno" = ', objetoVacio && "El objeto está lleno" );  
    console.log('objetoLleno && "El objeto está lleno" = ', objetoLleno && "El objeto está lleno" ); 
    console.log('arrayVacio && "El array está lleno" = ', arrayVacio && "El array está lleno" );  
    console.log('arrayLleno && "El array está lleno" = ', arrayLleno && "El array está lleno" ); 

    // operador OR
    console.log('boleanoTrue || "No es boleano true" = ', boleanoTrue || "No es boleano true"); // true
    console.log('boleanoFalse || "No es boleanoFalse" = ', boleanoFalse || "No es boleano false"); // No es boleano false

    // operador de negación
    console.log('!boleanoTrue = ', !boleanoTrue); // 
    console.log('!boleanoFalse = ', !boleanoFalse); // 

    // operador de coalescencia nula
    console.log('boleanoTrue ?? "Es verdadero" = ', boleanoTrue ?? "Es verdadero"); // Es verdadero
    console.log('boleanoFalse ?? "Es verdadero" = ', boleanoFalse ?? "Es verdadero"); // Es verdadero
    console.log('null ?? "Es verdadero" = ', variableNula ?? "No es variableNula"); // Es verdadero
    console.log('variableIndefinida ?? "No es variableIndefinida" = ', variableIndefinida ?? "No es variableIndefinida"); // Es verdadero

    objetoVacio.nombre = "Goku";
    objetoVacio.edad = 30;

    arrayVacio = [1, 2, 3, 4, 5];
    // Objetos
    

    return (
        <div></div>
    );
}