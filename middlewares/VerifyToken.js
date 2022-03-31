const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const verifyToken = (req, res, next) => {
    
    console.log(req.body);

    if (!req.headers['authorization']) {
        return res.status(400).send({ message: 'Debes iniciar sesión' });
    }

    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(400).send({ message: 'Token de autorización no existe' });
    }

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
        return res
            .status(400)
            .send({ message: 'Token de autorización inválido' });
        }
        
        req.token = decoded;
        next();
    });
};

module.exports = verifyToken;