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

let dados: string[] = ["JOSE","ALINE","JOAQUIM"]

// OU

let dados1:Array<string> = ["JOSE","ALINE","JOAQUIM"]

//******************************************************

// Arrays Multi types [ | ] o pipe significa ou

let infos:(string| number)[] = ["Jose",1,2,"Aline"] //tomar cuidado com esses tipos de vetores talvez seria melhor criar objetos shapados para não cair em armadilhas








