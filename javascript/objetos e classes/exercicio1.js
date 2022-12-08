/* 
    1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/

const precoComb = 6.74;
distancia = 80;
class Carro {
    marca;
    cor;
    Kmpor1L;
    constructor (marca, Kmpor1L, cor) {
    this.marca= marca;
    this.Kmpor1L= Kmpor1L;
    this.cor= cor;
    }
    calcularValor (distancia,precoComb) {
        const resultado = (distancia/this.Kmpor1L)*precoComb;
        return resultado;
    }
}

const camaro = new Carro ('Chevrolet', 14.20, 'Amarelo');
console.log(camaro);
console.log ((camaro.calcularValor(80,5.16)).toFixed(2));
const opala = new Carro ('Chevrolet', 12.15, 'Preto');
console.log (opala);
console.log((opala.calcularValor(80,5.16)).toFixed(2));