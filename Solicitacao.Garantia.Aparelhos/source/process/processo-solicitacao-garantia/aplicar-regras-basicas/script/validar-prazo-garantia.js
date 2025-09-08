const beneficioSolicitado = JSON.parse(execution.getVariable("beneficioSolicitado"));
const dataCompra = beneficioSolicitado.infoAparelho.dataCompra;
const notaFiscal = !!beneficioSolicitado.infoAparelho.notaFiscal;
let dataCompraConvertida;

if (dataCompra.includes('/')) {
  const [dia, mes, ano] = dataCompra.split('/');
  dataCompraConvertida = new Date(+ano, +mes - 1, +dia);
}
else if (dataCompra.includes('-')) {
  const [ano, mes, dia] = dataCompra.split('-');
  dataCompraConvertida = new Date(+ano, +mes - 1, +dia);
}

const dataAtual = new Date();

const diffMeses = 
  (dataAtual.getFullYear() - dataCompraConvertida.getFullYear()) * 12 +
  (dataAtual.getMonth() - dataCompraConvertida.getMonth());

const dentroDoPrazo = diffMeses < 12 || 
  (diffMeses === 12 && dataAtual.getDate() <= dataCompraConvertida.getDate());

const elegivel = dentroDoPrazo && notaFiscal;

execution.setVariable("elegivel", elegivel);
execution.setVariable("notaFiscal", notaFiscal);
execution.setVariable("prazoGarantia", dentroDoPrazo);
