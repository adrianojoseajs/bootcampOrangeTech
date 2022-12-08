/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
    do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso= peso;
        this.altura= altura;
    }
    calcularImc () {
        const IMC = this.peso / (this.altura*this.altura);
        return IMC;
    }

    verificarImc () {
        const IMC=this.calcularImc();
        console.log(IMC.toFixed(2));
        if(IMC< 18.5) {
            return 'Você está abaixo do peso';
        } else {
            if (IMC>=18.5 && IMC <25) {
                return 'Peso normal';
            } else {
                if (IMC>=25 && IMC<30) {
                    return 'Acima do peso';
                } else {
                    if (IMC>= 30 && IMC<40) {
                        return 'Você está obeso';
                    }
                    else {
                        return 'Obesidade grave';
                    }
                }
            }
        }
        }
}

const jose = new Pessoa ('José', 70,1.75);
console.log (jose);
console.log(jose.verificarImc());