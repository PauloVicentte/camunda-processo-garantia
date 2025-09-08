const listaClientes = [
  {
    nome: "Antonio Silva",
    cpf: "123.456.789-00",
    dataNascimento: "15/05/1990",
    celular: '(11) 99999-1111',
    genero: 'Masculino',
    infoAparelho: [
      {
        marca: "Samsung",
        modelo: "Galaxy S21",
        notaFiscal: "123456789",
        dataCompra: "2024/12/21"
      }
    ]
  },
  {
    nome: 'Maria Souza',
    dataNascimento: '22/03/1985',
    cpf: '987.654.321-00',
    celular: '(21) 98888-2222',
    genero: 'Feminino',
    infoAparelho: [
      {
        marca: "Apple",
        modelo: "iPhone 13",
        notaFiscal: "321654987",
        dataCompra: "2025/05/19"
      }
    ]
  }
];

execution.setVariable("clientes", JSON.stringify(listaClientes));