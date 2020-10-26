const { response, request } = require('express')
const model = require('../models/maravilhosas-models')

//Nomes dos métodos para implementação:
model.lista
model.listaId
model.insertData
model.deleteData
model.updateData

const dados = model.lista()
//getMaravilhosas
const getMaravilhosas = (request, response) => {
    response.status(200).send(model.lista())
    console.log(request.url)
}

//getMaravilhosaById
const getMaravilhosasById = (request, response) => {
    const id = parseInt(request.params.id)

    if(model.listaId(id)){
    response.status(200).send(model.listaId(id))}
    else{
    response.status(400).send({Mensagem:"Id não encontrado", dados})
    }
}

//addMaravilhosa 

const addMaravilhosas = (request, response) => {
    let newData = request.body

    // if (!newName) {
    //     return data.push(newData)
    //  }


    if (newData.id && newData.name && newData.photo && newData.subtitle && newData.about && newData.phrase && newData.history &&  newData.addedBy) {
        console.log('Todos os dados foram preenchidos corretamente!')
        if (!model.insertData(newData)) {
            dados.push(newData)
            response.status(200).json(model.insertData(newData))
            console.log(dados)
         } else {
            response.status(400).send({Mensagem: "Maravilhosa já existente", dados})
         }
    } else {
        response.status(400).send({Mensagem: "Insira todos os campos para o cadastro da Maravilhosa"})
    }

    
    }

//updateMaravilhosa 
const updateMaravilhosa = (request, response) => {
    const id = parseInt(request.params.id)
    const upMara = request.body

    if (upMara.id || upMara.name || upMara.photo || upMara.subtitle || upMara.about || upMara.phrase || upMara.history || upMara.addedBy) {
        console.log('Todos os dados foram preenchidos corretamente!')
        if (model.updateData(id, upMara)) {
            //dados.push(upMara)
            response.status(200).json(model.updateData(upMara))
            console.log(dados)
         } else {
            response.status(400).send({Mensagem: "Maravilhosa já existente", dados})
         }
    } else {
        response.status(400).send({Mensagem: "Insira todos os campos para o cadastro da Maravilhosa"})
    }


}

//deleteMaravilhosa

const deleteMaravilhosa = (request, response) => {

    const ident = parseInt(request.params.id)
    if (model.deleteData(ident)){
        response.status(200).send({Message:'Impostora excluída com sucesso', dados})
    } else {
        response.status(400).send({Message:'Insira id válido para deletar impostora', dados})
    }
}

module.exports = {
    getMaravilhosas,
    getMaravilhosasById,
    addMaravilhosas,
    deleteMaravilhosa,
    updateMaravilhosa
    
}