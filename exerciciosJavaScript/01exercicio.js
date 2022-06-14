// Imprimir números de 1 - 10.

function printNumber() {
  let n = 10;

  for (i = 1; i <= n; i++) {
      console.log(i);
 };

  if (n === 10) {
    return `Fim da contagem. Foram contados ${n} números!`
  };
};

console.log(printNumber());
