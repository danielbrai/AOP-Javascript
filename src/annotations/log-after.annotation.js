const { AnnotationFactory } = require('@aspectjs/common');

const LogAfter = new AnnotationFactory('demo').create(
  function LogAfter() { },
);

module.exports = {
  LogAfter
}