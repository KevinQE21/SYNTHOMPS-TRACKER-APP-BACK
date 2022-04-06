const { SynthompsTrackModel } = require('../models');

const getTrackSynthomps = async (req, res) => {
    const { email } = req.query;

    try {

        if( !email ){
            return res.status(400).send({ message: 'Favor ingresar la informacion correspondiente'});
        }

        const synthompsList = await SynthompsTrackModel.getTrackSynthompsList(email);
        
        return res.status(200).send({trackList: synthompsList});
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error', error: err.message})
    }
};

const registerTrackSynhtomps = async (req, res) => {
    const { email, intensity, comments, date, synthomp  } = req.body;
    
    try {
        if( !email || !intensity || !comments || !date || !synthomp ){
            return res.status(400).send({ message: 'Favor ingresar la informacion correspondiente'});
        }

        const registeredUserSynthomp = await SynthompsTrackModel.registerTrackSynthomp(email, intensity, comments, date, synthomp);   
        
        return res.status(200).send({ message: "Sintomas agregados" });

    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error', error: err.message});
    }
    
};

const deleteTrackSynthomps = async (req, res) => {
    const { id } = req.query;

    if( !id ){
        return res.status(400).send({ message: 'Favor ingresar un id valido'});
    }

    try {
        await SynthompsTrackModel.deleteTrackSynthomp(id);        

        return res.status(204).send({ message: "Sintoma Eliminado" });
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error', error: err.message});
    }
};

module.exports = { 
    getTrackSynthomps,
    registerTrackSynhtomps,
    deleteTrackSynthomps,
};