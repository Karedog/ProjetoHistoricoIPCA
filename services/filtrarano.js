import historicoInflacao from "../dados/dados.js";

export default function filtrarAno(valor){
    const ipcafiltrado = historicoInflacao.filter(ipca =>  Number(valor) === Number(ipca.ano))
    return ipcafiltrado
}