function logFlow(target, key, descriptor) {

  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {
    console.log(`\nIniciando a execução do método [${key}] com a lista de parâmetros [${args}]`);

    try {
      const result = originalMethod.apply(this, args);
      console.log(`Finalizando a execução do método ${key}...`);
      return result;
    } catch (e) {
      console.log('Deu ruim... ' + e)
    }
  };

  return descriptor;
}

class AOPDummy {

  @logFlow
  cumprimentar(...nomes) {
    console.log(`Hello, ${nomes}!`);
  }

  erroProposital() {
    throw new Error("Eu sou um erro personalizado :D");
  }

  @logFlow
  executarDivisaoNatural(a, b) {
    this.erroProposital();
    console.log(`Resultado da divisão de ${a} por ${b}= ${a / b}`);
  }

  @logFlow
  chamarFuncaoInexistente() {
    this.batataComCebola();
    console.log(`A função acima não existe!`);
  }
}

const dummyObject = new AOPDummy();
dummyObject.cumprimentar('Tadalafilo', 'Calabreso');
dummyObject.executarDivisaoNatural(2, 0)
dummyObject.chamarFuncaoInexistente();