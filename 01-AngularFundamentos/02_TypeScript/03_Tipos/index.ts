// Tipos primitivos: boolean, number, string
let boolean: boolean = false;
let string: string = 'Teste';
let number: number = 10;
let number1: number = 10.2;

// Tipos especiais: Null, Undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// Tipos abrangentes: any, void
function executaQuery(): void {
  // Query
}
let retornoView: any = 'Qualquer coisa';

// Objeto - Sem previsibilidade
let produto: object = {
  teste1: 'teste1',
  teste2: 'teste2',
};

type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: 'Tenis',
  preco: 199.99,
  unidades: 10,
};

// Arrays
let dados: string[] = ['Felipe', 'Gabriel', 'Adriana'];
let dados2: Array<string> = ['Felipe', 'Gabriel', 'Adriana'];

let infos: (string | number)[] = [10, '20'];
let info: any[] = [dados, 'ola', 20, 30];

// Tuplas
let boleto: [string, number, number] = ['Agua conta', 199.9, 323421];

// Métodos arrays -> Mesmos comandos do JS
// dados.reduce()
dados.push('Roberto'); // adiciona um elemento ao ultimo
dados.pop(); // remove o ultimo elemento

// Dates
let aniversario: Date = new Date('2022-12-01 05:00');
console.log(aniversario.toString());
