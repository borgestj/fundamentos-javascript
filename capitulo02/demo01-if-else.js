let frutaExistenteNoMercado = true;
let temCPUSuficiente = false;

///----
const args = process.argv;
const saldo = args[args.length - 1];
console.log(saldo);
if (isNaN(saldo)) {
  console.log("valor invalido!");
  return;
}
// 2 - null
// repare o let
let tipoDoCliente = "premium";

if (saldo < 9) {
  tipoDoCliente = "basic";
} else if (saldo >= 10 && saldo < 20) {
  tipoDoCliente = "gold";
} else {
  tipoDoCliente = null;
}

// null, undefined, vazio, 0 == false
// ! => negação, se for true, vira false
if (!tipoDoCliente) {
  tipoDoCliente = "indefinido";
}

console.log("tipoDoCliente", tipoDoCliente);

//
const operadorOu = 1 > 2 || 2 > 1;
const operadorE = 1 === 1 && 2 !== 2;
const operadorNot = !(1 == 1); // avalia primeiro como true e depois nega por conta do !

//
const idade = 18;
const resultado = idade >= 18 ? "pode dirigir" : "não pode";
console.log(resultado);
