// Calculando o fatorial de 10;

function factorialNumber() {
  var number = 10;

  for (i = 1; i <= 10; i++) {
    console.log((number *= i));
  };
};

console.log(factorialNumber());
