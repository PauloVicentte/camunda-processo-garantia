const beneficioSolicitado = JSON.parse(S(execution.getVariable('beneficioSolicitado')));

function preenchido(valor) {
  return valor !== null && valor !== undefined && valor !== "";
}

const dadosValidos =
  preenchido(beneficioSolicitado.Nome) &&
  preenchido(beneficioSolicitado.Cpf) &&
  preenchido(beneficioSolicitado.DataNascimento) &&
  preenchido(beneficioSolicitado.Celular) &&
  preenchido(beneficioSolicitado.infoAparelho?.Marca) &&
  preenchido(beneficioSolicitado.infoAparelho?.Modelo) &&
  preenchido(beneficioSolicitado.infoAparelho?.NotaFiscal) &&
  preenchido(beneficioSolicitado.infoAparelho?.DataCompra) &&
  preenchido(beneficioSolicitado.infoAparelho?.TipoDefeito) &&
  preenchido(beneficioSolicitado.infoAparelho?.Descricao);

execution.setVariable('dadosValidos', dadosValidos);