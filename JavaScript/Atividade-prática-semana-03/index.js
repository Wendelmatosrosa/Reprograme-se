var par = 0
var impar = 0

for (var i = 1; i <= 20; i++) {
  var potencia = Math.pow(i, 2);
  console.log(potencia);
  if (potencia % 2 == 0) {
    par += potencia
  } else { impar += potencia }

}
console.log("A soma dos numeros quadrados pares: ", par);
console.log("A soma dos numeros quadrados ímpares: ", impar);