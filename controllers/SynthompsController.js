const { SynthompsModel } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const getSynthomps = async (req, res) => {
    try {
        const synthompsList = await SynthompsModel.getSynthompsList();
        
        return res.status(200).send({synthomps: synthompsList});
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error', error: err.message})
    }
};

const registerUserSynhtomps = (req, res) => {
    const { synthomps } = req.body;
    
    try {
        synthomps.forEach(async synthomp => {
            const {name, email, image } = synthomp;
            
            if( !email || !name || !image ){
                return res.status(400).send({ message: 'Favor ingresar la informacion correspondiente'});
            }

            const registeredUserSynthomp = await SynthompsModel.registerUserSynthomp(email, name, image);   
        });
        
        return res.status(200).send({ message: "Sintomas agregados" });

    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error', error: err.message});
    }
    
};

const registerUserNewSynhtomp = async (req, res) => {
    const { email, name, image } = req.body;

    if( !email || !name || !image ){
        return res.status(400).send({ message: 'Favor ingresar la informacion correspondiente'});
    }

    try {
        const registeredUserSynthomp = await SynthompsModel.registerUserSynthomp(email, name, image);        

        return res.status(200).send({ userSynthomps: registeredUserSynthomp });
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error', error: err.message});
    }
};

const getUserSynthomps = async (req, res) => {
    const { email } = req.body;

    if( !email ){
        return res.status(400).send({ message: 'Favor ingresar un correo valido'});
    }

    try {
        const userSynthompsList = await SynthompsModel.getUserSynthompsList(email);        

        return res.status(200).send({ userSynthomps: userSynthompsList });
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error', error: err.message});
    }
};

const deleteUserSynthomps = async (req, res) => {
    const { id } = req.body;

    if( !id ){
        return res.status(400).send({ message: 'Favor ingresar un id valido'});
    }

    try {
        await SynthompsModel.deleteUserSynthomp(id);        

        return res.status(204).send({ message: "Sintoma Eliminado" });
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error', error: err.message});
    }
};

module.exports = { 
    getSynthomps,
    getUserSynthomps,
    registerUserNewSynhtomp,
    deleteUserSynthomps,
    registerUserSynhtomps
};