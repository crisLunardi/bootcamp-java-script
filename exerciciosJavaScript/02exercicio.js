// Imprimir os números impares menores que 100.

function printNumber() {
  let n = 100;

  for (i = 1; i <= n; i += 2) {
    console.log(i);
    
  };

  if (n === 100) {
    return `Fim da contagem! Foram contados ${i - 1} números`;
  };
};

console.log(printNumber());
