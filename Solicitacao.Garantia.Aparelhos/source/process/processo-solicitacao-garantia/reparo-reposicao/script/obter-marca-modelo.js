const beneficioSolicitado = JSON.parse(execution.getVariable("beneficioSolicitado") || "{}");
const clientes = execution.getVariable("clientes");
const estoque = execution.getVariable("estoqueAparelhos");

if (!clientes || !estoque) {
  execution.setVariable("envioSucesso", false);
  execution.setVariable("mensagemEnvio", "Dados de clientes ou estoque não disponíveis.");
} else {
  const clientes = JSON.parse(clientes);
  const estoque = JSON.parse(estoque);
  const estoqueLista = estoque.listaAparelhos || [];

  const clienteEncontrado = clientes.find(cliente =>
    cliente.nome === beneficioSolicitado.nome &&
    cliente.cpf === beneficioSolicitado.cpf
  );

  if (!clienteEncontrado) {
    execution.setVariable("envioSucesso", false);
    execution.setVariable("mensagemEnvio", "Cliente não encontrado.");
  } else {
    const aparelho = clienteEncontrado.infoAparelho?.[0];

    if (!aparelho || !aparelho.marca || !aparelho.modelo) {
      execution.setVariable("envioSucesso", false);
      execution.setVariable("mensagemEnvio", "Informações do aparelho não encontradas para o cliente.");
    } else {
      const modeloEncontrado = estoqueLista.find(item =>
        item.marca === aparelho.marca && item.modelo === aparelho.modelo
      );

      if (modeloEncontrado) {
        execution.setVariable("envioSucesso", true);
        execution.setVariable("mensagemEnvio", "Novo aparelho enviado: " + aparelho.marca + " " + aparelho.modelo);
      } else {
        const hoje = new Date();
        const novaData = new Date(hoje.setDate(hoje.getDate() + 7));
        const novaDataFormatada = novaData.toISOString().split("T")[0];

        execution.setVariable("envioSucesso", false);
        execution.setVariable("mensagemEnvio", "Aparelho em falta. Nova data de envio será agendada.");
        execution.setVariable("novaDataEnvio", novaDataFormatada);
      }
    }
  }
}
