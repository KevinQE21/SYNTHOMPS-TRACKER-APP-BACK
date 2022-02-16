const { UserModel, AuthModel } = require('../models');

const register = async (req, res) => {
    const { email, name, lastName, bloodType, birthday, weight } = req.body;

    if(!email || !name || !lastName || !bloodType || !birthday || !weight){
        return res.status(400).send({ message: 'Favor ingresar los datos correspondientes'});
    }

    try {
        const userInfoExist = await UserModel.verifyRegister(email);

        if(userInfoExist){
            return res
                .status(400)
                .send({message: 'El usuario ya cuenta con informacion agregada'});
        }

        const newUserRegister = await UserModel
            .createRegister(
                email,
                name,
                lastName,
                bloodType,
                birthday,
                weight
            );
        
        //Actualiza el hasInfoRegister
        AuthModel.updateUserAuth(email);

        return res.status(200).send({message: 'Registro Ingresado', userInfo: newUserRegister});
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error registrando informacion del usuario', error: err.message})
    }
};

const updateRegister = async (req, res) => {
    const { email, weight } = req.body;

    if(!email || !weight){
        return res.status(400).send({ message: 'Favor ingresar los datos correspondientes'});
    }

    try {
        const updateRegister = await UserModel
            .updateRegister(
                email,
                weight
            );        

        return res.status(200).send({message: 'Registro Actualizado', userInfo: updateRegister});
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error actualizando la informacion del usuario', error: err.message})
    }
}

module.exports = { register, updateRegister };