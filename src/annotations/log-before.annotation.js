const { AnnotationFactory } = require('@aspectjs/common');

const LogBefore = new AnnotationFactory('demo').create(
  function LogBefore() { },
);

module.exports = {
  LogBefore
}