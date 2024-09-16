const { AnnotationFactory } = require('@aspectjs/common');

const LogError = new AnnotationFactory('demo').create(
  function LogError() { },
);

module.exports = {
  LogError
}