const beneficioSolicitado = JSON.parse(S(execution.getVariable('beneficioSolicitado')));

function preenchido(valor) {
  return valor !== null && valor !== undefined && valor !== "";
}

const dadosValidos =
  preenchido(beneficioSolicitado.nome) &&
  preenchido(beneficioSolicitado.cpf) &&
  preenchido(beneficioSolicitado.dataNascimento) &&
  preenchido(beneficioSolicitado.celular) &&
  preenchido(beneficioSolicitado.infoAparelho?.marca) &&
  preenchido(beneficioSolicitado.infoAparelho?.modelo) &&
  preenchido(beneficioSolicitado.infoAparelho?.notaFiscal) &&
  preenchido(beneficioSolicitado.infoAparelho?.dataCompra) &&
  preenchido(beneficioSolicitado.infoAparelho?.tipoDefeito) &&
  preenchido(beneficioSolicitado.infoAparelho?.descricao);

execution.setVariable('dadosValidos', dadosValidos);