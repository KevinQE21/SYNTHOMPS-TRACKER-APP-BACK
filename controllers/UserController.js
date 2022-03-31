const { UserModel, AuthModel } = require('../models');

const registerUserInfo = async (req, res) => {
    const { email, name, lastName, bloodType, birthday, weight, height } = req.body;

    if(!email || !name || !lastName || !bloodType || !birthday || !weight || !height){
        return res.status(400).send({ message: 'Favor ingresar los datos correspondientes'});
    }

    try {
        const userInfoExist = await UserModel.verifyUserInfoRegister(email);

        if(userInfoExist){
            return res
                .status(400)
                .send({message: 'El usuario ya cuenta con informacion agregada'});
        }

        const newUserRegister = await UserModel
            .createUserInfoRegister(
                email,
                name,
                lastName,
                bloodType.toUpperCase(),
                birthday,
                height,
                weight
            );
        
        //Actualiza el hasInfoRegister
        AuthModel.updateUserAuth(email);

        return res.status(200).send({ userInfo: newUserRegister });
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error registrando informacion del usuario', error: err.message});
    }
};

const updateUserInfo = async (req, res) => {
    const { email, weight } = req.body;

    if(!email || !weight){
        return res.status(400).send({ message: 'Favor ingresar los datos correspondientes'});
    }

    try {
        const updateRegister = await UserModel
            .updateUserInfoRegister(
                email,
                weight
            );        

        return res.status(200).send({ userInfo: updateRegister });
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error actualizando la informacion del usuario', error: err.message});
    }
}

const getUserInfo = async (req, res) => {
    const { email } = req.body;

    console.log(email);

    if(!email){
        return res.status(400).send({ message: 'Favor ingresar un correo valido'});
    }

    try {
        const user = await UserModel
            .getUserInfoByEmail(
                email,
            );        

        return res.status(200).send({ userInfo: user });
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error al buscar la informacion del usuario', error: err.message});
    }
}

module.exports = { registerUserInfo, updateUserInfo, getUserInfo };