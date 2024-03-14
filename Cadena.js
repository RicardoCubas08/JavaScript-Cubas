function invertirCadena(cad) {

    let separa = cad.split("");
    let invierte = separa.reverse();
    let une = invierte.join("");
    return une;
}
 
console.log(invertirCadena("hola mundo"));