// // Como podemos melhorar o esse código usando TS?

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

enum Profissao {
  atriz,
  padeiro,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}

const Maria: Pessoa = {
  nome: "maria",
  idade: 29,
  profissao: Profissao.atriz,
};

const Roberto: Pessoa = {
  nome: "Roberto",
  idade: 19,
  profissao: Profissao.padeiro,
};

const Laura: Pessoa = {
  nome: "Laura",
  idade: 32,
  profissao: Profissao.atriz,
};

const Carlos: Pessoa = {
  nome: "Carlos",
  idade: 19,
  profissao: Profissao.atriz,
};
