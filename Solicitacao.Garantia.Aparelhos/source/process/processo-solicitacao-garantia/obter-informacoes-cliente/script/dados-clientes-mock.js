const listaClientes = [
  {
    nome: "Alicia",
    cpf: "123.456.789-10",
    dataNascimento: "19/05/2002",
    celular: {
      ddd: "24",
      numero: "98888-8888"
    },
    infoAparelho: [
      {
        marca: "Samsung",
        modelo: "Galaxy S21",
        notaFiscal: "123.456.789",
        dataCompra: "21/12/2024"
      }
    ]
  },
  {
    nome: "Carlos",
    cpf: "987.654.321-00",
    dataNascimento: "17/05/2003",
    celular: {
      ddd: "21",
      numero: "97777-7777"
    },
    infoAparelho: [
      {
        marca: "Apple",
        modelo: "iPhone 13",
        notaFiscal: "321.654.987",
        dataCompra: "19/05/2025"
      }
    ]
  },
  {
    nome: "Fernanda",
    cpf: "111.222.333-44",
    dataNascimento: "10/02/2000",
    celular: {
      ddd: "11",
      numero: "96666-6666"
    },
    infoAparelho: [
      {
        marca: "Motorola",
        modelo: "Moto G82",
        notaFiscal: "789.456.123",
        dataCompra: "09/10/2023"
      }
    ]
  }
];

execution.setVariable("clientes", JSON.stringify(listaClientes));