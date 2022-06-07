// Imprima todas as tabuadas de 1 a 10.

function multiplicationTableAll(n) {
  for (i = 1; i <= 10; i++) {
    var line = `${n} x ${i} = ${n * i} `;
    console.log(line);
  };
};

    for (i = 1; i <= 10; i++) {
        multiplicationTableAll(i);
        console.log("");
    };

console.log(multiplicationTableAll(8));
