console.log("Bem Vindo ao Artigo!")
//Declaração de variáveis 

let ligado: boolean = false //--> pode ser tipado
//ou 
let ligado1 = false //--> vai funcionar por inferência, mas isso pode causar problemas pois a variável está sujeita a receber outros valores 

let nome: string = "Jose";
let idade: number = 30
let altura: number = 1.9;


//# Tipos especiais

let nulo: null = null //só pode receber um nulo não permite outro valor vai ser nulo e .
let indefinido: undefined = undefined; //Ajuda a manter a estratégia específica de variáveis

//# Tipos Abrangentes
//-any  (qualquer coisa)
//-void (vazio) sem retorno retorno vazio.

let retornoView: any = "qualquer valor string ou numero etc..."//qualquer coisa valor não previsivel

//# Objetos em TS

//não pode receber qualquer coisa e sim objetos entre {}

//# Objetos sem previsibilidade
//Declarando um objeto sem shape

let produto: object = {
    name: "Jose",
    cidade: "Assis",
    idade: 40,
}

//Objetos com previsibilidade
//Objeto Shapado ou com forma específicada

//Struct perde a previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}


// Definindo meu produto do tipo ProdutoLoja
let meuProduto = {
    nome: "Tênis",
    preco: 89.9,
    unidades: 5,
}

//shapando meu produto colocamos um retorno do type ProdutoLoja objeto tipado com previsibilidade

let meuProduto1: ProdutoLoja = {
    nome: "Arroz",
    preco: 15.0,
    unidades: 100,
}

// Arrays ou vetores 

//Maneiras de declarar ********************************

let dados: string[] = ["JOSE", "ALINE", "JOAQUIM"]

// OU

let dados1: Array<string> = ["JOSE", "ALINE", "JOAQUIM"]

//******************************************************

// Arrays Multi types [ | ] o pipe significa ou

let infos: (string | number)[] = ["Jose", 1, 2, "Aline"] //tomar cuidado com esses tipos de vetores talvez seria melhor criar objetos shapados para não cair em armadilhas

// Tuplas: São vetores multi types porém tem um lugar certo para cada coisa (exta ordem como foi definido)

let boleto: [string, number, number] = ["Conta de água", 199.9, 33333]

/*

* arrays métodos --> todos os métodos do JS comum.
dados.push(), .pop(), .filter() etc...

*/

let aniversario: Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString())

// Funções em TS são as mesmas do js normal
//O que diferênia é que podem ser tipados os valores de entrada e de retorno

function addNumber(x: number, y: number): number {
    return x + y
}

let soma = addNumber(4, 7)

console.log("Soma é " + soma)
//explícita quando passo retorno implicita quando não passo o tipo de retorno
function addToHello(name: string): string {
    return `Hello ${name}`
}

console.log(addToHello("José Américo"))

// Funções Multi Types --> suponhamos que você quer pegar dados do BD e você espera uma string, porém por alguma eventualidade ele retorna um null ou número etc..

// Precisamos preparar as funções para essas eventualidades

//especícicando o tipo de retorno, mais por sintaxe
// ou any --> porém perde o sentido de utilizar typescript
function callToPhone(phone: number | string): number | string {
    return phone
}


// A função callToPhone retorn um ou outro
console.log(callToPhone(12345678))
console.log(callToPhone("12345"))


//Funções Async --> assincronas

//implicitamente ele entende que o retorno é Promise, porém podemos passar o retorno Promise<tipo de valor especificado> tornando mais explícot, quanto mais explícito o código melhor...

async function getDatabase(id: number): Promise<string> {
    return "José"
}


//Interfaces (Type x Funções)

type robot = {
    id: number, // ou id:number | string; a segunda opção a propriedade torna-se multitype
    //readonly: id:number | string; --> tornaria a propriedade somente leitura
    name: string,
}


//type --> utilizado para tipar um conjunto ou objeto
const bot: robot = {
    id: 1,
    name: "megamen"
}


//inteface --> utilizado para tipar classes interface --> contrato e quem herda tem que seguir esse contrato.
interface robot2 {
    id: number | string;
    name: string;
    sayHello(): string;


}

//herdando do type
const bot2: robot = {
    id: 0,
    name: "megamen"
}

//herdando da inteface
const bot3: robot2 = {
    id: 0,
    name: "megamen",
    sayHello(): string {
        return "Hello!"
    }
}



console.log(bot)
console.log(bot2)
console.log(bot3) //console.log(bot3.nome) --> não estaria acessível

//Quando utilizar interfaces (se comportam da mesma maneira, porém com algumas peculiaridades)

class Pessoa implements robot2 {
    id: string | number;
    name: string;
    constructor(id: string | number, name: string) {
        this.id = id;
        this.name = name;

    }
    sayHello(): string {
        return `Hello ${this.name}`
    }
}

//Como utilizar a classe Pessoa

const pessoa = new Pessoa(1, "joseameircojunior");
console.log(pessoa.sayHello())


//Aprofundando types e interfaces são bem parecidos, recomenda-se trabalhar com type para tipar variáveis e interfaces para tipar objetos.

//Quando inteface e type são transpilados -> no arquivo convertido .js são identicos, porém .ts tem mais significado para o desenvolvedor porquê permite diferenciar na hora de desnvolver o código.

//Classes são formas que são criadas para ser o molde de nossos objetos.


class Personagem {
    name?: string; // name?: string; [?] significa opcional
    forca: number;
    skill: number;
    constructor(name:string,forca: number, skill: number) {
        // this.name = name;
        this.forca = forca;
        this.skill = skill;

    }

    attack(): void {
        console.log(`Attack with ${this.forca} points`);
    }

}

const p1 = new Personagem("ciclop",20, 4000);
p1.attack() //já retorna um console.log pois é do tipo void

// Trabalhando com Modifiers -> modificadores de acesso

//public    -->
//private   --> a propriedade só pode ser acessada dentro da classe somente pelo construtor
//protected --> 

//ex: 

class Carro {
    id: number;
    private nome: string;
    cor: string;

    constructor(id:number,nome:string,cor:string){
        this.id =id;
        this.nome = nome;
        this.cor = cor;
    }

    acelerar():void{
        console.log(`Carro ${this.cor} ${this.nome} está acelerando!`)
    }
}

const carro = new Carro(122,"Fusca","vermelho")
carro.acelerar();
//carro.name --> na classe Carro não estaria disponível, pois colocamos private dentro da class
// Já o protected permite faz o mesmo, porém quem extender/herdar poderá enxergar esses atributos.

// Os data modifiers também pode ser aplicados em métodos da mesma forma

class Frutas {
    nome:string
    
    
    
    constructor(nome:string){
        this.nome = nome;
        this.imprime(nome);
    }

    private getNome():void{
        console.log( `Fruta ${nome}`)
    }
    
    imprime(nome:string):void{
        console.log(nome)
    }
   
}

const furta = new Frutas("Banana");
// furta.getNome() --> não funciona poerque foi declarado private


// O que influência nas classe public ou private segue a mesma lógica ex: private | protected | readonly | ? opcional | as regras de modificadores de acesso servem para atributos ou métodos 
// Isso infuência na hora de instânciar os objetos.. não acessível ou acessível dentro ou fora da classe

// Subclasses


//Magico é uma subclasse de Personagem
//Personagem super classe Magico subclasse
class Magico extends Personagem{
   
    magicPoints: number;
   
    constructor(name:string,poder: number,skill: number,magicPoints:number) {
        super(name,poder,skill);
        this.magicPoints = magicPoints;
    }
    
}

const p2 = new Magico("Mago",9,30,300);
p2.skill =2;

//Generics --> fui comprar um remédio específico (eu já tenho em mente o que eu gostaria de levar), porém o farmaceutico não tem esse, mas tem um genérico.

// Temos uma função que temos dois arrays e preciso juntar em um só
                     //... aceito vários arrays
function concatArray (...itens: any[]):any[]{

                                // os ... são spreads para concatenar
    return new Array().concat(...itens);
    
}
const numArray = concatArray([1,5,[3]])
const stgArray = concatArray(["felipe", "goku"],["viega"])



console.log(numArray)
console.log(stgArray) 
// tudo funcionando só que quebramos uma régra permite adicionar string no array de numeros    numArray.push("saitama") 
// caso eu queira especificar qual tipo de parametro eu quero que seja retornado.

//Resolução para a função que retorna any -> específicar o tipo que eu quero 

                     //generics (em aberto o que vai ser passado) utilizamos o <T> dinâmico para especificar o retorno 
function concatArray1<T> (...itens: any[]):any[]{

    // os ... são spreads para concatenar
return new Array().concat(...itens);

}
                              //<number[]> como o <T> foi específicado na função especificar na hora de chamar a função.
const numArray1 = concatArray1<number[]>([1,6],[7]); 
const strArray1 = concatArray1<string[]>(["jose"],["maria"])

console.log(numArray1)
console.log(strArray1)











