import { Router } from "express";
import{corPrimaria,frequenciaCaracter,ingresso,maiorNumero} from    "./services.js";
const server = Router();

server.get('/dia2/corPrimaria/:cor', (req,resp) =>{
    try{
        const{cor} =req.params;
        const primaria= corPrimaria(cor);
        resp.send({
            primaria:primaria
        });
    }catch(err){
        resp.send({
            erro:err.message
        })
    }
}) 

server.post('/dia2/ingressocinema', (req,resp) =>{
    try{
        const{qtdInteira, qtdMeia, diaSemana,nacionalidade} =req.body;
        const total =ingresso(qtdInteira,qtdMeia,diaSemana,nacionalidade)
        resp.send({
            total:total
        });
    }catch(err){
        resp.send({
            erro:err.message
        })
    }
}) 


server.get('/dia2/freqcaractere/:texto/:caractere', (req,resp) =>{
    try{
        const{texto,caractere} =req.body;
        const freq =frequenciaCaracter(texto,caractere)
        resp.send({
            freq:freq
        });
    }catch(err){
        resp.send({
            erro:err.message
        })
    }
}) 

server.post('/dia2/maiorNumero', (req,resp) =>{
    try{
        const numeros=req.body;
        const maior=maiorNumero(nue)
        resp.send({
         maior:maior
        });
    }catch(err){
        resp.send({
            erro:err.message
        })
    }
}) 

export default server;





