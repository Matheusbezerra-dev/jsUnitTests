const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails === 'function' ).toBe(true);
    expect(typeof productDetails('Alcool gel', 'Máscara' === 'object')).toBe('object');
    expect(productDetails.length).toBe(2);
    expect(typeof (productDetails('Alcool gel', 'Máscara')[0])).toBe('object');
    expect(typeof (productDetails('Alcool gel', 'Máscara')[1])).toBe('object');
    expect(productDetails('Alcool gel')[0]).not.toEqual(productDetails('Máscara')[1]);
    const productIdsOne = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    const productIdsTwo = productDetails('Alcool gel', 'Máscara')[1].details.productId;
    expect(productIdsOne.endsWith('123')).toBe(true);
    expect(productIdsTwo.endsWith('123')).toBe(true);
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.1
    // Teste se o retorno da função é um array.2
    // Teste se o array retornado pela função contém dois itens dentro.3
    // Teste se os dois itens dentro do array retornado pela função são objetos.4
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.5
    // Teste se os dois productIds terminam com 123.
  });
});
