let nome1 = prompt("Qual o nome do primeiro gato?"),
  Peso1 = prompt("Qual o peso dele?"),
  nome2 = prompt("Qual o nome do segundo gato?"),
  Peso2 = prompt("Qual o peso dele?"),
  nome3 = prompt("Qual o nome do terceiro gato?"),
  Peso3 = prompt("Qual o peso dele?");
let peso1 = Number(Peso1),
  peso2 = Number(Peso2),
  peso3 = Number(Peso3);
if (peso1 > peso2 && peso1 > peso3) {
  console.log("O " + nome1 + " é o gato mais pesado");
} else if (peso1 < peso2 && peso2 > peso3) {
  console.log("O " + nome2 + " é o gato mais pesado");
} else if (peso3 > peso1 && peso3 > peso2) {
  console.log("O " + nome3 + " é o gato mais pesado");
}