const distanciaTotal = 100;
const velocidadeCarro = 110;
const velocidadeCaminhao = 80;

// tempo que o carro leva para chegar ao ponto de cruzamento
const tempoCarro = distanciaTotal / velocidadeCarro;

// tempo que o caminhão leva para chegar ao ponto de cruzamento (considerando os pedágios)
const tempoCaminhao = (distanciaTotal / velocidadeCaminhao) + (2 * 5 / 60);

if (tempoCarro < tempoCaminhao) {
  console.log("O carro estará mais próximo da cidade de Ribeirão Preto");
} else {
  console.log("O caminhão estará mais próximo da cidade de Ribeirão Preto");
}