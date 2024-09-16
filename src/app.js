import { logEnabler } from "./aspects/aop";
import { AOPDummy, AOPDummyWrapper } from "./domain";

// const dummyObject = new AOPDummy(logEnabler);
// dummyObject.cumprimentar('Tadalafilo', 'Calabreso');
// dummyObject.executarDivisaoNatural(2, 0)
// dummyObject.chamarFuncaoInexistente();
// dummyObject.chamarfuncaoComErroProposital();

const dummyWrapper = new AOPDummyWrapper(logEnabler);
dummyWrapper.cumprimentar('Batatoso', 'Ceboloso');