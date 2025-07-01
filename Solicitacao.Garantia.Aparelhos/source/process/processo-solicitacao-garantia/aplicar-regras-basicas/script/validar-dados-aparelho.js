const beneficioSolicitado = JSON.parse(S(execution.getVariable('beneficioSolicitado')));
const clientes = JSON.parse(execution.getVariable("clientes"));

const clienteEncontrado = clientes.find(cliente =>
  cliente.nome === beneficioSolicitado.nome &&
  cliente.cpf === beneficioSolicitado.cpf
);

let aparelhoValido = false;

if (clienteEncontrado) {
  aparelhoValido = clienteEncontrado.aparelhos.some(aparelho =>
    compararAparelho(aparelho, beneficioSolicitado.infoAparelho)
  );
}

function compararAparelho(aparelho, infoAparelho) {
  return (
    aparelho.notaFiscal === infoAparelho.notaFiscal &&
    aparelho.dataCompra === infoAparelho.dataCompra
  );
}

execution.setVariable('aparelhoElegivel', aparelhoValido);