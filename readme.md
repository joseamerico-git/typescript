# Case com JS
```
function ligar(heroi){
    console.log("Ligando para ...: " + heroi.telefone);
}

ligar({
    nome:"Steve Jobs",
    vulgo:"Milionário",
    telefone:"11 33333333"
})

// Se remover-mos o atributo telefone [ telefone:"11 33333333"] o js compila normalmente sem demonstrar erros isso em um sistema de grande porte causaria problemas...
```

# Case com TS

```
type Hero = {
    nome:string,
    vulgo:string,
    telefone:number
}

function ligarPara(heroi:Hero):string{
    
    return "Ligando para ....:" + heroi.telefone
}

ligarPara({
    nome:"Jose",
    vulgo:"Capitão América",
    telefone:11333333
});

```

Porque eu deveria utilizar typescript para capturar erros em tempo de execução diferente do js

Como instalar 
npm install typescript -D
npm install -g typescript

# Como Executar TS
node arquivo.ts

Obs: O node não entende a parte do superset e sim js pricisamos conveter typescript para js
npx tsc --> typescript compiler
vai traduzir o typescript pra js para que possa ser executado com node

Criar um arquivo de configuração .ts para informar onde serão armazenados os códigos convertidos pelo npx tsc

## Configurações personalizadas
Problemas contexto e conversão 1 a 1 
Quando executamos npx tsc arquivo.tsc é criado um arquivo js na mesma pasta

Criar arquivo de configuração

```
npx tsc --init
```
Com isso é criado um arquivo tscofnig.json na raiz do projeto que tem um arquivo json que tem várias configurações para o funcionamento
no site [typescript-->tools](https://www.typescriptlang.org/tsconfig)
Temos uma referência de configuração

Dentro do arquivo tem algumas coisas importantes:
Configurações dos comportamentos do TS
Para trabalhar no node

"target":
"module":
"rootDir":"./src"
"outDir":"./build" //Com isso npx tsc vai buscar tsconfig e vai ver as configurações no caso rootDir na pasta src 

# Deixando prático
arquivo package.json 

![Alt text](image.png)

# Tipos

### Primitivos: boolean, number, string 
### Como declarar

let ligado:boolean = false --> pode ser tipado
ou 
let ligado = false --> vai funcionar por inferência, mas isso pode causar problemas

let nome: string ="Jose";
let idade:number =30 
let altura:number = 1.9;

# Tipos especiais

let nulo: null = null //só pode receber um nulo não permite outro valor vai ser nulo e .
let indefinido:undefined = undefined; //Ajuda a manter a estratégia específica de variáveis

# Tipos Abrangentes
-any  (qualquer coisa)
-void (vazio) sem retorno retorno vazio.

let retornoView:any = qualquer coisa valor não previsivel

# Objetos em TS

//não pode receber qualquer coisa e sim objetos entre {}

# Objetos sem previsibilidade
```
let produto:object =  {
    name:"Jose",
    cidade:"Assis",
    idade:40
}

```

# Objetos com previsibilidade
Objeto Shapado ou com forma específicada

```

Struct 
type ProdutoLoja ={
    nome:string;
    preco:number;
    unidades:number;
}

let meuProduto = ProdutoLoja{
    nome:"Tênis",
    preco:89.99,
    unidades:5,
}
```
# Array(s)

let dados:string [] = ["Jose","João","Aline"];
ou
let dados2:Array<string> = ["Jose","João","Aline"];

# Array Multi Types

let infos:(string || number) = ["Jose",1,"Bastião",5]

# Trabalhando com Tuplas (Vetor multiTypes) (porém tem um lugar certo para cada coisa) --> seguir ordem pré determinada.

let boleto:[string,number,number] = ["agua conta", 199,9,32456]

# Difrença entre ArrayMulti Types e Tupla 

Os arrays multi types aceitam vários tipos em qualquer ordem
Já as Tuplas também são multi types porém seguem a ordem de acordo com a declaração do vetor.

# Dentro dos Arrays existem os métodos derivados do js

dados.[funcao]  

# Trabalhando com Dates

let aniversario:Date = new Date("2022-12-01 05:00") 
console.log(aniversario.toString())

# Funções são iguais as do js, porém podem ser tipadas.

```                   //parametros tipados  //parametro de retorno implícito/expli
ícito
    function addNumber(x:number, y:number):number {
          return x + y 
    }

    let soma = addNumber(5,5)

```

# Situação
                 // parametro ou       
function CallToPhone(phone:number | string):number | string{ 
    return phone;
}

# Funções Async retorno (Promises)

async function getDatabase(id:number):Promise<number | string>{
    return "felipe"
}

# Interfaces parecidas com (type x interface)

type robot {
    id:number; --> poderiamos ter uma propriedade somente leitura readonly id: number | string
    name:string;
}

## Type -> 
const bot: robot = {
    id:1,
    name:"meganda",
}

## Inteface -> trabalhar com classes --> contrado que deve ser seguido fielmente caso seja implemnetada

# Quando utilizar interfaces?

Se vai definir como um constant ou variável types

Quando for com classes ou moldes
## Classes

```

```

data modifiers

private -> private name?:string
protected -> só pode ser enxergado dentro da classe e das classes/subclasses que a herdam

# O que influencia nas classes? private|protected


Os data modifiers podem ser utilizados em métodos também

readonly strenght: -> não podem ser modificados (somente leitura)

# Herança de classes
extensão de classes -> SubClasses

//Character: superclass
//Magican: subclasse

Class Magican extends Character{
    constructor(name:string,strenght:number;skill:number){
        super(string, number, skill)
        this.magicPoints = magicPoints;
    }
}

# Generics

Exemplo do remédio que eu tinha em mente para comprar e só havia genérico não é o específico 
                     spred ...
function concatArray(...item:any[]):any[]{
    return new Array().concat(...itens)
}

const numArray = concatArray[1,5],[3]





