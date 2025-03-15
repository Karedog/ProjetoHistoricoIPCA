import express from 'express'
import cors from 'cors'
import historicoInflacao from './dados/dados.js'
import filtrarAno from './services/filtrarano.js'
import filtrarId from './services/filtrarid.js'
import filtarIpca from './services/filtraripca.js'
import calcularvalor from './services/calcularvalor.js'

const app = express()


app.use(express.json())
app.use(cors())

app.get('/historicoipca', (req,res)=>{
    const ano = Number(req.query.ano)    

    if(!req.query.ano){
        return res.send(historicoInflacao)
    }
    if(isNaN(ano)){
        return res.status(400).send({'ERRO':'Paramentro incorreto'})
    }

    const ipcaAno = filtrarAno(ano)

    if(ipcaAno.length < 1){
        return res.status(404).send({'ERRO':'Paramentro não existe'})
    }
    res.send(ipcaAno)

})

app.get('/historicoipca/calculo', (req,res)=>{
    const valor = Number(req.query.valor)    
    const mesInicial = Number(req.query.mesInicial)    
    const anoInicial = Number(req.query.anoInicial)    
    const mesFinal = Number(req.query.mesFinal)    
    const anoFinal = Number(req.query.anoFinal)    

    if(!req.query.valor || !req.query.mesInicial || !req.query.anoInicial || !req.query.mesFinal || !req.query.anoFinal){
        return res.status(400).send({'ERRO':'Paramentro incorreto'})
    }
    if(isNaN(mesInicial) || isNaN(anoInicial) || isNaN(mesFinal) || isNaN(anoFinal) || (anoInicial > anoFinal)){
        return res.status(400).send({'ERRO':'Paramentro incorreto'})
    }

    const ipcaFiltrado = filtarIpca(valor, mesInicial,anoInicial,mesFinal,anoFinal)
    if(ipcaFiltrado.length < 1){
        return res.status(404).send({'ERRO':'Paramentro não existe'})
    }
    const valorTotal = calcularvalor(valor,ipcaFiltrado)

    res.send({"Valor Total": valorTotal.toFixed(2)})

})

app.get('/historicoipca/:id', (req,res)=>{
    const id = Number(req.params.id)   
    if(id){
        const ipcaFiltrado = filtrarId(id)
        if(ipcaFiltrado.length < 1){
            res.status(404).send({'ERRO':'Paramentro não existe'})
        }else{
            res.status(200).send(ipcaFiltrado)
        }
    }else{
        res.status(400).send({'ERRO':'Paramentro incorreto'})
    }
})


app.listen(8000, ()=>{
    console.log('Servidor iniciado!')
})