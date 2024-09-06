// // Decoratorss Exemplo 1
// function ExibirNome(target: any) {
//   console.log(target);
// }

// @ExibirNome
// class Funcionario {}

// // Exemplo 2
// function apiVersion(version: string) {
//   return (target: any) => {
//     Object.assign(target.prototype, { __version: version });
//   };
// }
// @apiVersion('1.10')
// class Api {}

// const api = new Api();
// console.log(api);

// // Attribute decorator

// function minLength(length: number) {
//   return (target: any, key: string) => {
//     console.log(target[key]);
//   };
// }

function minLength(length: number) {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => _value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(`Tamanho menor do que ${length}`);
      } else {
        _value = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Api {
  @minLength(3)
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const api = new Api('test');
console.log(api.name);
