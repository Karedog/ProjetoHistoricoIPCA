import historicoInflacao from "../dados/dados.js";

export default function filtarIpca(valor, mesInicial,anoInicial,mesFinal,anoFinal){

    const dataInicial = new Date(anoInicial,mesInicial,1)
    const dataFinal = new Date(anoFinal,mesFinal,1)

    const ipcaFiltrado = historicoInflacao.filter( nome =>{ 

        const dataIpca = new Date(nome.ano,nome.mes,1)

        if(dataIpca >= dataInicial && dataIpca <= dataFinal){
            return true
        }

        return false
    })

    return ipcaFiltrado
    
}
