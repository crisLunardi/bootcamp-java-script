// Imprimir a tabuada do número oito (8).

function multiplicationTable() {
  for (i = 0; i <= 10; i++) {
    console.log(`${i} x ${i * 8}`);

    if (i === 10) {
      return `Fim da tabuada do oito`;
    };
  };
};

console.log(multiplicationTable());
