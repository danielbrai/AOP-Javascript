const { Aspect, on, Before, After } = require('@aspectjs/core');
const { LogAfter } = require('../annotations/log-after.annotation');
const { LogBefore } = require('../annotations/log-before.annotation');

@Aspect()
class LogBeforeAspect {
    @Before(
        on.classes.withAnnotations(LogBefore),
        on.methods.withAnnotations(LogBefore),
    )
    logAround(context) {
        console.log(`\nIniciando execução do método ${JSON.stringify(context.target.name)} com os parâmetros ${context.args}.`);
    }
}

@Aspect()
class LogAfterAspect {
    @After(
        on.classes.withAnnotations(LogAfter),
        on.methods.withAnnotations(LogAfter),
    )
    logAround(context) {
        console.log(`\nFinalizando a execução do método ${JSON.stringify(context.target.name)}.`);
    }
}
module.exports = {
    LogAfterAspect, LogBeforeAspect
}