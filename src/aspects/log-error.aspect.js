const { AfterThrow, AfterThrowContext, Aspect, on, Before } = require('@aspectjs/core');
const { LogError } = require('../annotations/log-error.annotation');

@Aspect()
class LogErrorAspect {
    @AfterThrow(
        on.any.withAnnotations((LogError))
    )
    logAround(context, error
    ) {
        console.error(
            `${context.target}(${context.args.join(',')}) lançou o erro [${error}].`,
        );
        // throw error;
    }
}
module.exports = {
    LogErrorAspect
}