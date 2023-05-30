const prompt = require('prompt-sync')();
var alturas = [];
var tamanho = 0;

// Implementar a entrada de dados
for (var i = 0; i <= 9; i++) {
    tamanho = parseFloat(prompt("Digite a Altura: "))
  alturas.push(tamanho);
};
// Implementar o processamento de dados
// Fazer for dentro de for
for (let i = 0; i < alturas.length; i++){
  let count = 0;
  for (let j = 0; j < alturas.length; j++) {
    if (alturas[j] < alturas[i]) {
      count++;
    }
  }

  // Implementar a saída de dados
  console.log(`Aluno ${i}: maior que ${count} aluno(s)`);
}