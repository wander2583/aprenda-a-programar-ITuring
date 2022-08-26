//Exibir os números impares até chegar a n...
let i = 0
let n = 66

console.log("Números impares menores que " + n )

while (i <= n) {
  let ehImpar = i % 2 != 0;
    if (ehImpar) {
      console.log(`${i}`)
    }
    i++;
}