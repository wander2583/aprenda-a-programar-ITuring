let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

let taxaBrasil = 1.12
let taxaIntenacional = 1.2

if (produtoA.internacional == true) {
  console.log('O produto, ' + produtoA.nome + ' tem o valor total de: R$' + produtoA.valor * taxaIntenacional)
}
else {
  console.log('O produto, ' + produtoA.nome + ' tem o valor total de: R$' + produtoA.valor * taxaBrasil)
}


if (produtoB.internacional == true) {
  console.log('O produto, ' + produtoB.nome + ' tem o valor total de: R$' + produtoB.valor * taxaIntenacional)
}
else {
  console.log('O produto, ' + produtoB.nome + ' tem o valor total de: R$' + produtoB.valor * taxaBrasil)
}


if (produtoC.internacional == true) { 
  console.log('O produto, ' + produtoC.nome + ' tem o valor total de: R$' + produtoC.valor * taxaIntenacional)
}
else {
  console.log('O produto, ' + produtoC.nome + ' tem o valor total de: R$' + produtoC.valor * taxaBrasil)
}

