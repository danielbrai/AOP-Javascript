import { LogError, LogAfter, LogBefore } from '../annotations/index'


function cumprimentar(...nomes) {
  console.log(`Hello, ${nomes}!`);
}

function erroProposital() {
  throw new Error("Eu sou um erro personalizado :D");
}

async function minhaFuncaoAssincrona() {
  console.log("\nIniciando a função assíncrona de teste.");
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("\nFunção assíncrona de teste concluída.");
}

function executarDivisaoNatural(a, b) {
  this.minhaFuncaoAssincrona();
  console.log(`\nResultado da divisão de ${a} por ${b} = ${a / b}`);
}

function chamarFuncaoInexistente() {
  this.batataFritaComCoca();
  console.log(`A função acima não existe!`);
}

function chamarfuncaoComErroProposital() {
  this.erroProposital();
}


export class AOPDummyWrapper {
  constructor(enabler) {
    this.enabler = enabler;
  }
  
  @LogBefore()
  @LogAfter()
  @LogError()
  cumprimentar(...nomes) {
    cumprimentar(nomes);
  }
  
}
