// verificar se um número é primo...

let numero = 2
let ehPrimo = `Sim, o número ${numero} é primo!`

if (numero === 1) {
  ehPrimo = `Não, o número ${numero} não é primo!`
} else if (numero === 2) {
  ehPrimo = `Sim, o número ${numero} é primo!`
} else {
   for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
       ehPrimo = `Não, o número ${numero} não é primo!`
    }
  }
}
console.log(ehPrimo)