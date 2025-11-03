const beneficioSolicitado = JSON.parse(S(execution.getVariable('beneficioSolicitado')));
const clientes = JSON.parse(execution.getVariable("clientes"));

function compararCampos(clientes, valor) {
  return (
    clientes.nome === valor.Nome &&
    clientes.cpf === valor.Cpf &&
    clientes.dataNascimento === valor.DataNascimento &&
    clientes.celular === valor.Celular
  );
}

const clienteValido = clientes.some(cliente => compararCampos(cliente, beneficioSolicitado));

execution.setVariable('clienteValido', clienteValido);
