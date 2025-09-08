const beneficioSolicitado = JSON.parse(execution.getVariable("beneficioSolicitado") || "{}");
const clientesStr = execution.getVariable("clientes");

if (!clientesStr) {
  execution.setVariable("mensagemEnvio", "Dados de clientes não disponíveis.");
} else {
  const listaClientes = JSON.parse(clientesStr);

  const clienteEncontrado = listaClientes.find(cliente =>
    cliente.nome === beneficioSolicitado.nome &&
    cliente.cpf === beneficioSolicitado.cpf
  );

  const aparelho = clienteEncontrado?.infoAparelho?.[0];

  if (!aparelho || !aparelho.marca || !aparelho.modelo) {
    execution.setVariable("mensagemEnvio", "Informações do aparelho não encontradas para o cliente.");
  } else {
    execution.setVariable("mensagemEnvio", "Novo aparelho enviado: " + aparelho.marca + " " + aparelho.modelo);
  }
}
