/* 2- Crie um programa que seja capaz de percorrer uma lista de números e imprimir os números pares */

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numeros.push(10);
for (let index = 0; index < numeros.length; index++) {
  if (numeros[index] % 2 === 0) {
    console.log(numeros[index]);
  }
}
