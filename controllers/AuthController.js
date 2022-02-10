const { AuthModel } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const register = async (req, res) => {
    const { user, password, isDoctor } = req.body;

    if(!user || !password){
        return res.status(400).send({ message: 'Ingresar correo y password'});
    }

    try {
        const emailExist = await AuthModel.verifyUser(user);

        if(emailExist){
            return res
                .status(400)
                .send({message: 'Ya existe un usuario con ese correo'});
        }

        //Crea un hasheo para la password
        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = await AuthModel.createUser(user, hashedPassword, isDoctor == null ? false : isDoctor);        

        return res.status(200).send({message: 'Usuario creado', user: newUser});
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error creando usuario', error: err.message})
    }
};

const login = async (req, res) => {
    const {user, password} = req.body;

    if(!user || !password){
        return res.status(400).send({ message: 'Ingresar correo y password'});
    }

    try {
        const verifyUser = await AuthModel.verifyUser(user);

        if(!verifyUser){
            return res
                .status(400)
                .send({message: 'No existe un usuario con ese correo'});
        }

        //Valida que las passwords sean las mismas
        const validPassword = bcrypt.compare(password, verifyUser.password);
        
        if (!validPassword) {
            return res.status(400).send({ message: 'Passwords no coinciden' });
        }
        
        //Genera el payload para el jwt
        const payload = {
            id: user.name
        };

        //Crea el jwt 
        const token = jwt.sign(payload, "SECRET", { expiresIn: '30m'});

        return res.status(200).send({message: 'Hola desde Login', token});

    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error al hacer login', error: err.message})
    }

};

module.exports = { register, login };