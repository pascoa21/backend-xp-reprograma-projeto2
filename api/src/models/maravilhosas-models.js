let data = require('../data/data.json')
const maravilhosas = require('../routes/maravilhosas-routes')

// selectAllData
const lista = () => {
    return data
}
//selectDataById
const listaId = (id) => {
    const identificador = parseInt(id)
    const identificado = data.find(maravilhosas => maravilhosas.id == identificador)

    return identificado
} 


//insertData
const insertData = (newData) => {
   
    const nomeExistente = data.find(maravilhosas => maravilhosas.name === newData.name)
    
    return nomeExistente

}
//updateData
const updateData = (id, upMara) =>{

    const procurar = data.find(maravilhosas=> maravilhosas.id === id)
    const idAtual = data.indexOf(procurar)
    const atualizadaComId = {id, ...upMara}

    if (idAtual >= 0){
        data.splice(idAtual, 1,atualizadaComId)
        return data
    }
    
}
//deleteData
const deleteData = (id) => {

    const encontrada = data.find(maravilhosas => maravilhosas.id === id)
    const atualizarID = data.indexOf(encontrada)
    console.log(atualizarID)

    if (atualizarID >= 0) {
        data.splice(atualizarID, 1)
        return data
    }
}

module.exports ={
    lista,
    listaId,
    insertData,
    updateData,
    deleteData

}