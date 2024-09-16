import { LogError, LogAfter, LogBefore } from './annotations/index'
import { logEnabler } from "./aspects/aop";



@LogBefore()
@LogAfter()
@LogError()
class AOPDummy {

  cumprimentar(...nomes) {
    console.log(`Hello, ${nomes}!`);
  }

  erroProposital() {
    throw new Error("Eu sou um erro personalizado :D");
  }

  async minhaFuncaoAssincrona() {
    console.log("\nIniciando a função assíncrona de teste.");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("\nFunção assíncrona de teste concluída.");
  }

  executarDivisaoNatural(a, b) {
    this.minhaFuncaoAssincrona();
    console.log(`\nResultado da divisão de ${a} por ${b} = ${a / b}`);
  }

  @LogError()
  chamarFuncaoInexistente() {
    this.batataFritaComCoca();
    console.log(`A função acima não existe!`);
  }

  @LogError()
  chamarfuncaoComErroProposital() {
    this.erroProposital();
  }
}

const dummyObject = new AOPDummy();
dummyObject.cumprimentar('Tadalafilo', 'Calabreso');
dummyObject.executarDivisaoNatural(2, 0)
dummyObject.chamarFuncaoInexistente();
dummyObject.chamarfuncaoComErroProposital();