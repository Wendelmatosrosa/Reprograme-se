const prompt = require("prompt-sync")();

// Como não foi definido se os numeros inseridos é inteiro ou com casas decimais optei por utilizar o parseInt.
// Leia os três números

var num1 = parseInt(prompt("Digite o número 1: "));
var num2 = parseInt(prompt("Digite o número 2: "));
var num3 = parseInt(prompt("Digite o número 3: "));

// Calcule a soma e a média

var soma = num1 + num2 + num3;
var media = (num1 + num2 + num3) / 3;

// Mostre na tela o valor da soma e média

console.log("A soma é: ", soma);
console.log("A média é: ", media);