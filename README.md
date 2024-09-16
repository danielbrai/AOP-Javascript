# AOP com Javascript

Este repositório contém uma PoC que aborda o uso de orientação a aspecto dentro da linguagem Javascript, como um mecanismo para possibilitar a implementação de utilitários de logging, segurança, caching etc de forma mais elegante e menos intrusiva.

Existem duas branches no projeto que adotam abordagens diferentes para a proposta apresentada:

1. [Testes Decorators Vanilla](https://github.com/danielbrai/AOP-Javascript/tree/testes_decorators_vanilla): propõe a implementação sem o uso de bibliotecas externas, apenas com o uso dos decorators apresentados na abordagem proposta pelo ES6.
2. [Testes lib AspectJS](https://github.com/danielbrai/AOP-Javascript/tree/testes_lib_aspectjs): apresenta uma abordagem construído com o uso da biblioteca [AspectJS](https://aspectjs.gitlab.io) 

## Uso
1. Escolha uma das duas branches listadas anteriormente;

2. Instale as dependências do projeto:
```bash
npm install
```

3. Execute a aplicação
```bash
yarn run start
```
