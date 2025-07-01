const beneficioSolicitado = JSON.parse(execution.getVariable("beneficioSolicitado"));
const dataCompra = beneficioSolicitado.infoAparelho.dataCompra;
const notaFiscal = beneficioSolicitado.infoAparelho.notaFiscal ? true : false;

const [dia, mes, ano] = dataCompra.split('/');
const dataCompraConvertida = new Date(`${ano}-${mes}-${dia}`);

const dataAtual = new Date();
const limiteGarantia = new Date();
limiteGarantia.setMonth(limiteGarantia.getMonth() - 12);

const dentroDoPrazo = dataCompraConvertida >= limiteGarantia;

const elegivel = dentroDoPrazo && notaFiscal;

execution.setVariable("elegivel", elegivel);
execution.setVariable("notaFiscal", notaFiscal);
execution.setVariable("prazoGarantia", dentroDoPrazo);