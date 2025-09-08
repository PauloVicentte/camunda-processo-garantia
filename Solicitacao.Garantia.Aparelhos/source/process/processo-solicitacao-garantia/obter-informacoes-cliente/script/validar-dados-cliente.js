const beneficioSolicitado = JSON.parse(S(execution.getVariable('beneficioSolicitado')));
const clientes = JSON.parse(execution.getVariable("clientes"));

function compararCampos(clientes, valor) {
  return (
    clientes.nome === valor.nome &&
    clientes.cpf === valor.cpf &&
    clientes.dataNascimento === valor.dataNascimento &&
    clientes.celular === valor.celular
  );
}

const clienteValido = clientes.some(cliente => compararCampos(cliente, beneficioSolicitado));

execution.setVariable('clienteValido', clienteValido);
