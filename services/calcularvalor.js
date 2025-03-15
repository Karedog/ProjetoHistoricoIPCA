export default function calcularValor(valor,array){

    const valorTotal = array.reduce((acc,ipca)=>{
        if(acc === 0){
            acc = valor *(1+(ipca.ipca/100))
        }else{
            acc = acc *(1+(ipca.ipca/100))
        }
        return acc
        
    },0)

    return valorTotal
}