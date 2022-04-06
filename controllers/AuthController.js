const { AuthModel } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const register = async (req, res) => {
    const { email, password, isDoctor, hasRegisterInfo } = req.body;

    if(!email || !password){
        return res.status(400).send({ message: 'Ingresar correo y password'});
    }

    try {
        const emailExist = await AuthModel.verifyUser(email);

        if(emailExist){
            return res
                .status(400)
                .send({message: 'Ya existe un usuario con ese correo'});
        }

        //Crea un hasheo para la password
        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = await AuthModel
            .createUser(
                email,
                hashedPassword,
                isDoctor == null ? false : isDoctor,
                hasRegisterInfo== null ? false : isDoctor
            );        

        return res.status(200).send({message: 'Usuario creado', user: newUser});
    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error creando usuario', error: err.message})
    }
};

const login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).send({ message: 'Ingresar correo y password'});
    }

    try {
        const userIsVerify = await AuthModel.verifyUser(email);

        if(!userIsVerify){
            return res
                .status(400)
                .send({message: 'No existe un usuario con ese correo'});
        }

        const user = await AuthModel.getUserByEmail(email);

        //Valida que las passwords sean las mismas
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).send({ message: 'Passwords no coinciden' });
        }
        
        //Genera el payload para el jwt
        const payload = {
            id: user.email
        };

        //Crea el jwt 
        const token = jwt.sign(payload, SECRET, { expiresIn: '30m'});

        return res.status(200).send({message: 'Hola desde Login', token});

    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error al hacer login', error: err.message})
    }

};

const getUserAuth = async (req, res) => {
    const {email} = req.query;

    console.log(req.params)

    if(!email){
        return res.status(400).send({ message: 'Favor ingresar un correo valido'});
    }

    try {
        const userIsVerify = await AuthModel.verifyUser(email);

        if(!userIsVerify){
            return res
                .status(400)
                .send({message: 'No existe un usuario con ese correo'});
        }

        const user = await AuthModel.getUserByEmail(email);

        return res.status(200).send({ user });

    } catch (err) {
        return res  
            .status(400)
            .send({message: 'Error al hacer login', error: err.message})
    }
}

module.exports = { register, login, getUserAuth };