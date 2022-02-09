const { AuthModel } = require('../models');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    const { user, password } = req.body;

    if(!user || !password){
        return res.status(400).send({ message: 'Ingresar email y password'});
    }

    try {
        const emailExist = await AuthModel.verifyUser(user);

        if(emailExist){
            return res
                .status(400)
                .send({message: 'Ya existe un usuario con ese correo'});
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await AuthModel.createUser(user, hashedPassword, true);        

        return res.status(200).send({message: 'Usuario creado', user: newUser});
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error creando usuario', error: err.message})
    }
};

const login = async (req, res) => {};

module.exports = { register, login };