import historicoInflacao from "../dados/dados.js";

export default function filtrarId(id){
    const ipcaFiltradoAno = historicoInflacao.filter( ipca => id === ipca.id)
    return ipcaFiltradoAno

}