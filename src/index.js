// import db from './db.js'
import express from 'express'
import cors from 'cors'

import UserController from './Controller/UserController.js'
import UserAdocoesController from './Controller/UserAdocaoController.js'
import PetsController from './Controller/PetController.js'
// import Crypto from 'crypto-js'

// import e from 'express'
// import Sequelize from 'sequelize'
    
    const Server = express()
        Server.use(cors())
        Server.use(express.json())


    Server.use('/user', UserController);
    Server.use('/adocoes', UserAdocoesController);
    Server.use('/pets', PetsController);


    // ATENÇÃO É necessario declarar as requisições quando for chamar o endpoint. 

        // Server.get("/pets", async(req, resp) => {
        //     try {
        //         let {
        //             DS_SEXO,f
        //             DS_PORTE,
        //             DT_NASCIMENTO,
        //             DS_ESPECIE,
        //             NM_RACA,          

        //         } = req.query

        //             let filtro = [
        //                 {
        //                     DS_SEXO,
        //                     valor: DS_SEXO
        //                 }, 
        //                 {
        //                     DS_PORTE,
        //                     valor: DS_PORTE
        //                 },
        //                 {
        //                     DT_NASCIMENTO,
        //                     valor: DT_NASCIMENTO
        //                 }, 
        //                 {
        //                     DS_ESPECIE,
        //                     valor: DS_ESPECIE
        //                 }, 
        //                 {
        //                     NM_RACA,
        //                     valor: NM_RACA
        //                 } 
        //             ]

        //                 filtro = filtro.filter( (item) => item.valor !== '')
                     
        //                     for (let index = 0; index < filtro.length; index++) {
        //                         let ob = filtro[index]
        //                         delete(ob.valor)
        //                     }
                  
        //                 // console.log(filtro)

        //         let r = await db.infob_apn_tb_pet.findAll({
        //             where: filtro
        //         })

        //         resp.send(r)

        //     } catch (e) {
        //         resp.send({erro: e.toString()})
        //     }
        // })

        
        
        // Server.post('/admin/addpet', async(req, resp) => {
        //     try{
        //         let { nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3} = req.body;

        //         let r = await db.infob_apn_tb_pet.create({
        //             NM_PET: nome,
        //             DS_ESPECIE: especie,
        //             NM_RACA: raca,
        //             DS_SEXO: sexo,
        //             DS_PESO: peso,
        //             DT_NASCIMENTO: nascimento,
        //             DS_PORTE: porte,
        //             DS_DESC: descricao,
        //             IMG_PET1: imgPet1,
        //             IMG_PET2: imgPet2,
        //             IMG_PET3: imgPet3,
        //             BT_CASTRADO: castrado,
        //             BT_VACINA_V10: vacinaV10,
        //             BT_VACINA_V8: vacinaV8,
        //             BT_VACINA_V5: vacinaV5,
        //             BT_VACINA_V4: vacinaV4,
        //             BT_VACINA_V3: vacinaV3,
        //             BT_VACINA_ANTIRRABICA: vacinaAntirrabica,
        //             DT_CADASTRO: new Date(),
        //             BT_DISPONIVEL: true
        //         })
                
        //         // if(especie === 'Canina' && vacinaV5 === true || vacinaV4 === true || vacinaV3 === true){
        //         //     resp.send({erro: "Você não pode inserir Vacinas de Gatos para Cães"})
        //         //     return 
        //         // } if(especie === 'Felina' && vacinaV8 === true || vacinaV10 === true) {
        //         //     resp.send({erro: "Você não pode inserir Vacinas de Cães para Gatos"})
        //         //     return
        //         // } if(descricao > 250 === false){
        //         //     resp.send({erro: "Números de caracteres atingido"})
        //         //     return
        //         // } if(nome === '' && especie === '' && raca === '' && sexo === '' && peso === '' && nascimento === '' 
        //         //     && porte === '' && descricao === '' && imgPet1 === '' && imgPet2 === '' && imgPet3 === '' === false){
        //         //     resp.send({erro: "Preencha todos os campos obrigatórios"})
        //         //     return
        //         // }
                

        //         resp.sendStatus(200)

        //     } catch (e) {
        //         resp.send({erro: e.toString()})
        //     }
        // })
        

        // Server.delete('/admin/:idPet', async (req, resp) => {
        //     try {
        //         let { idPet } = req.params;

        //         console.log(req.params)

        //         await db.infob_apn_tb_pet.destroy({ where: { ID_PET: idPet } })
        //         resp.sendStatus(200)
        //     }catch (e) {
        //         resp.send({erro: e.toString()})
        //     }

        // })

            
        // Server.get('/minhasAdocoes/:idUsuario', async(req, resp) => {
        //     try{
        //         let r = await db.infob_apn_tb_adocao.findAll({
        //             where: {
        //                 ID_USER: req.params.idUsuario
        //             },
        //             include: ['infob_apn_tb_pet'],
        //         }); 
        //         resp.send(r);
        //     }catch(e){
        //         resp.send({erro: e.toString})
        //     }
        // })

    // Server.delete('/minhasAdocoes/:idAdocao', async(req, resp) =>{
    //         try{
    //             let id = req.params.idAdocao;

    //             let r = await db.infob_apn_tb_adocao.destroy({where: {ID_ADOCAO: id} })
    //         resp.sendStatus(200)
    //     }catch (e) {
    //         resp.send({erro: e.toString()})
    //     } 
    // })

        // Server.get('/admin/animaisCadastrados', async(req, resp) => {

        //     try {
        //         let r = await db.infob_apn_tb_pet.findAll({
        //             where: {
        //                 BT_DISPONIVEL: true
        //             }, 
        //             order: [['ID_PET', 'desc']]
        //         })
                
        //         resp.send(r)
                
                
        //     } catch (error) {
        //         resp.send({erro: e.toString()})
        //     }

        // })

// app.put('/pet/:idpet',async(req, resp) =>  {   
//       try {

//         let { nome, especie, raca, sexo, peso, nascimento, porte, descricao, imgPet1, imgPet2, imgPet3, castrado, vacinaV10, vacinaV8, vacinaAntirrabica, vacinaV5, vacinaV4, vacinaV3, cadastro, disponivel } = req.body; 
              
//         let r = await db.infob_apn_tb_pet.update({
//             NM_PET: nome,
//             DS_ESPECIE: especie,
//             NM_RACA: raca,
//             DS_SEXO: sexo,
//             DS_PESO: peso,
//             DT_NASCIMENTO: nascimento,
//             DS_PORTE: porte,
//             DS_DESC: descricao,
//             IMG_PET1: imgPet1,
//             IMG_PET2: imgPet2,
//             IMG_PET3: imgPet3,
//             BT_CASTRADO: castrado,
//             BT_VACINA_V10: vacinaV10,
//             BT_VACINA_V8: vacinaV8,
//             BT_VACINA_V5: vacinaV5,
//             BT_VACINA_V4: vacinaV4,
//             BT_VACINA_V3: vacinaV3,
//             BT_VACINA_ANTIRRABICA: vacinaAntirrabica,
//             DT_CADASTRO: cadastro,
//             BT_DISPONIVEL: disponivel
//         },{where:{
//             ID_PET:req.params.idpet
//         }}
             
//         )


//         resp.send(r)

          
//       } catch (e) {
//           resp.send({erro:e.toString()})
          
//       }
    

// })
     

// app.post ('/pet/:idPet/:idUser',async(req, resp) => {

//     try {
//         let {nomeCompleto, nascimento, rg, telefone, cep, endereco, numero, complemento, bairro} = req.body

//         let r = await db.infob_apn_tb_adocao.create({

//             ID_USER:req.params.idUser,
//             ID_PET:req.params.idPet,
//             NM_NOME_COMPLETO:nomeCompleto,
//             DT_NASCIMENTO:nascimento,
//             DS_RG:rg,
//             DS_TELEFONE:telefone,
//             DS_CEP:cep,
//             DS_ENDERECO:endereco,
//             DS_NUMERO:numero,
//             DS_COMPLEMENTO:complemento,
//             DS_BAIRRO:bairro,
//             DT_SOLICITACAO:new Date(),
//             BT_ADOCAO_CONCLUIDA:false
//         })

//         resp.sendStatus(200)
        
//     } catch (e) {
//         resp.send({erro:e.toString()})

//     } 

// })




Server.listen(process.env.PORT,
                x => console.log(`- Server up at Port:${process.env.PORT}`))