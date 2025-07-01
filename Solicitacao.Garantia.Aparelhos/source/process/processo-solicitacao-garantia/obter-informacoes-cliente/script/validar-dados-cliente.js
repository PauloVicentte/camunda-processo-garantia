const beneficioSolicitado = JSON.parse(S(execution.getVariable('beneficioSolicitado')));
const clientes = JSON.parse(execution.getVariable("clientes"));

function compararCampos(clientes, valor) {
  return (
    clientes.nome === valor.nome &&
    clientes.cpf === valor.cpf &&
    clientes.dataNascimento === valor.dataNascimento &&
    clientes.celular?.ddd === valor.celular?.ddd &&
    clientes.celular?.numero === valor.celular?.numero
  );
}

const clienteValido = clientes.some(cliente => compararCampos(cliente, beneficioSolicitado));

execution.setVariable('clienteValido', clienteValido);
