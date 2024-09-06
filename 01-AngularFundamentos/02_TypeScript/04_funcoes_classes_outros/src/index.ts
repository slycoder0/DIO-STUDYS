/*
 * Funcões
 */
function addNumber(x: number, y: number): number {
  return x + y;
}
let soma: number = addNumber(4, 7);
console.log(soma);

function addToHello(name: string) {
  return `Hello ${name}`;
}
console.log(addToHello('Gabriel'));

/*
 * Funcões Multi tipos
 */

function CallToPhone(phone: number | string) {
  return phone;
}
console.log(CallToPhone('113133111'));
console.log(CallToPhone(113133111));

/*
 * Funções Assicronas
 */

async function getDataBase(id: number): Promise<string> {
  return 'felipe';
}

/*
 * Interffaces (type x interface)
 */

//type
type robot = {
  readonly id: number | string;
  name: string;
};
const bot1: robot = {
  id: 1,
  name: 'megaman',
};
// interface
interface robot2 {
  readonly id: number | string;
  name: string;
  sayHello(): string;
}
const bot2: robot2 = {
  id: 1,
  name: 'megaman',
  sayHello: function (): string {
    throw new Error('Function not implemented.');
  },
};

console.log((bot1.name = 'cutman'));
console.log(bot2);

// Caso de uso
class Pessoa implements robot2 {
  id: string | number;
  name: string;
  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return `Hello i'm ${this.name}`;
  }
}

const p = new Pessoa(1, 'Gabriel');
console.log(p.sayHello());

/*
 * Classes
 */
class Character {
  name?: string;
  stregth: number;
  skill: number;
  constructor(stregth: number, skill: number) {
    this.stregth = stregth;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack with ${this.stregth} points`);
  }
}
const c1 = new Character(10, 98);
console.log(c1);
c1.attack();

/*
 * Classes - Modificadores de acesso / data modifiers
 * - public, private, protected
 */

class Pessoa2 {
  private name?: string;
  public age: number;
  protected altura: number;

  constructor(name: string, age: number, altura: number) {
    this.age = age;
    this.altura = altura;
  }
  public dizOla(name: string): void {
    console.log(`Olá meu nome é: ${name}`);
  }
}
const p2 = new Pessoa2('Gabriel', 21, 190);
p2.age = 21;
p2.dizOla('Gabriel');

/*
 * SubClasses
 */

class Jogador {
  public name: string;
  public level: number;
  public stregth: number;

  constructor(name: string, level: number, stregth: number) {
    this.name = name;
    this.level = level;
    this.stregth = stregth;
  }
}
// Jogador : Superclass
// Profissional: Subclass
class Profissional extends Jogador {
  rank: number;

  constructor(name: string, level: number, stregth: number, rank: number) {
    super(name, level, stregth);
    this.rank = rank;
  }
}
const proPlayer = new Profissional('Gabriel', 100, 60, 100);
console.log(proPlayer.rank);

/*
 * Generics
 */

// Sem Generics
function concatArray(...itens: any[]): any[] {
  return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(['Gabriel', 'Ventura'], ['Gabriel']);
console.log(numArray);
console.log(stgArray);

numArray.push('string1');
stgArray.push(10);

// Com Generics
function concatArray2<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}
const numArray2 = concatArray2<number[]>([1, 5], [3]);
const stgArray2 = concatArray2<string[]>(['Gabriel', 'Ventura'], ['Gabriel']);
console.log(numArray);
console.log(stgArray);
