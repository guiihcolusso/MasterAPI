const correios = require('correios-rastreamento');

async function Rastreio(codigo) {
  try {
    
    const res = await correios.sroV2.rastrearObjeto(codigo);

    const Movimentacao = res.status_list;
    const status_code = res.status_code;

    const Resultado = {Movimentacao, status_code}

    return Resultado;

  } catch (error) {

    console.error(error);
    return error;

  }
}

module.exports = Rastreio;