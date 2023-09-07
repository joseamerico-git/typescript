"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Bem Vindo ao Artigo!");
//Declaração de variáveis 
let ligado = false; //--> pode ser tipado
//ou 
let ligado1 = false; //--> vai funcionar por inferência, mas isso pode causar problemas pois a variável está sujeita a receber outros valores 
let nome = "Jose";
let idade = 30;
let altura = 1.9;
//# Tipos especiais
let nulo = null; //só pode receber um nulo não permite outro valor vai ser nulo e .
let indefinido = undefined; //Ajuda a manter a estratégia específica de variáveis
//# Tipos Abrangentes
//-any  (qualquer coisa)
//-void (vazio) sem retorno retorno vazio.
let retornoView = "qualquer valor string ou numero etc..."; //qualquer coisa valor não previsivel
//# Objetos em TS
//não pode receber qualquer coisa e sim objetos entre {}
//# Objetos sem previsibilidade
//Declarando um objeto sem shape
let produto = {
    name: "Jose",
    cidade: "Assis",
    idade: 40,
};
// Definindo meu produto do tipo ProdutoLoja
let meuProduto = {
    nome: "Tênis",
    preco: 89.9,
    unidades: 5,
};
//shapando meu produto colocamos um retorno do type ProdutoLoja objeto tipado com previsibilidade
let meuProduto1 = {
    nome: "Arroz",
    preco: 15.0,
    unidades: 100,
};
// Arrays ou vetores 
//Maneiras de declarar ********************************
let dados = ["JOSE", "ALINE", "JOAQUIM"];
// OU
let dados1 = ["JOSE", "ALINE", "JOAQUIM"];
//******************************************************
// Arrays Multi types [ | ] o pipe significa ou
let infos = ["Jose", 1, 2, "Aline"]; //tomar cuidado com esses tipos de vetores talvez seria melhor criar objetos shapados para não cair em armadilhas
// Tuplas: São vetores multi types porém tem um lugar certo para cada coisa (exta ordem como foi definido)
let boleto = ["Conta de água", 199.9, 33333];
/*

* arrays métodos --> todos os métodos do JS comum.
dados.push(), .pop(), .filter() etc...

*/
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
// Funções em TS são as mesmas do js normal
//O que diferênia é que podem ser tipados os valores de entrada e de retorno
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log("Soma é " + soma);
//explícita quando passo retorno implicita quando não passo o tipo de retorno
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("José Américo"));
// Funções Multi Types --> suponhamos que você quer pegar dados do BD e você espera uma string, porém por alguma eventualidade ele retorna um null ou número etc..
// Precisamos preparar as funções para essas eventualidades
//especícicando o tipo de retorno, mais por sintaxe
// ou any --> porém perde o sentido de utilizar typescript
function callToPhone(phone) {
    return phone;
}
// A função callToPhone retorn um ou outro
console.log(callToPhone(12345678));
console.log(callToPhone("12345"));
//Funções Async --> assincronas
//implicitamente ele entende que o retorno é Promise, porém podemos passar o retorno Promise<tipo de valor especificado> tornando mais explícot, quanto mais explícito o código melhor...
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "José";
    });
}
//type --> utilizado para tipar um conjunto ou objeto
const bot = {
    id: 1,
    name: "megamen"
};
//herdando do type
const bot2 = {
    id: 0,
    name: "megamen"
};
//herdando da inteface
const bot3 = {
    id: 0,
    name: "megamen",
    sayHello() {
        return "Hello!";
    }
};
console.log(bot);
console.log(bot2);
console.log(bot3); //console.log(bot3.nome) --> não estaria acessível
//Quando utilizar interfaces (se comportam da mesma maneira, porém com algumas peculiaridades)
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
//Como utilizar a classe Pessoa
const pessoa = new Pessoa(1, "joseameircojunior");
console.log(pessoa.sayHello());
//Aprofundando types e interfaces são bem parecidos, recomenda-se trabalhar com type para tipar variáveis e interfaces para tipar objetos.
//Quando inteface e type são transpilados -> no arquivo convertido .js são identicos, porém .ts tem mais significado para o desenvolvedor porquê permite diferenciar na hora de desnvolver o código.
//Classes são formas que são criadas para ser o molde de nossos objetos.
class Personagem {
    constructor(name, forca, skill) {
        // this.name = name;
        this.forca = forca;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.forca} points`);
    }
}
const p1 = new Personagem("ciclop", 20, 4000);
p1.attack(); //já retorna um console.log pois é do tipo void
// Trabalhando com Modifiers -> modificadores de acesso
//public    -->
//private   --> a propriedade só pode ser acessada dentro da classe somente pelo construtor
//protected --> 
//ex: 
class Carro {
    constructor(id, nome, cor) {
        this.id = id;
        this.nome = nome;
        this.cor = cor;
    }
    acelerar() {
        console.log(`Carro ${this.cor} ${this.nome} está acelerando!`);
    }
}
const carro = new Carro(122, "Fusca", "vermelho");
carro.acelerar();
//carro.name --> na classe Carro não estaria disponível, pois colocamos private dentro da class
// Já o protected permite faz o mesmo, porém quem extender/herdar poderá enxergar esses atributos.
// Os data modifiers também pode ser aplicados em métodos da mesma forma
class Frutas {
    constructor(nome) {
        this.nome = nome;
        this.imprime(nome);
    }
    getNome() {
        console.log(`Fruta ${nome}`);
    }
    imprime(nome) {
        console.log(nome);
    }
}
const furta = new Frutas("Banana");
// furta.getNome() --> não funciona poerque foi declarado private
// O que influência nas classe public ou private segue a mesma lógica ex: private | protected | readonly | ? opcional | as regras de modificadores de acesso servem para atributos ou métodos 
// Isso infuência na hora de instânciar os objetos.. não acessível ou acessível dentro ou fora da classe
// Subclasses
//Magico é uma subclasse de Personagem
//Personagem super classe Magico subclasse
class Magico extends Personagem {
    constructor(name, poder, skill, magicPoints) {
        super(name, poder, skill);
        this.magicPoints = magicPoints;
    }
}
const p2 = new Magico("Mago", 9, 30, 300);
p2.skill = 2;
//Generics --> fui comprar um remédio específico (eu já tenho em mente o que eu gostaria de levar), porém o farmaceutico não tem esse, mas tem um genérico.
// Temos uma função que temos dois arrays e preciso juntar em um só
//... aceito vários arrays
function concatArray(...itens) {
    // os ... são spreads para concatenar
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5, [3]]);
const stgArray = concatArray(["felipe", "goku"], ["viega"]);
console.log(numArray);
console.log(stgArray);
