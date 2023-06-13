import Users from '../models/User.js';
import encrypt from 'encryptjs';


export const register = async (req, res) => {
    try {
        const { name, email, password, pin, number, address, panNumber } = req.body;

        var secretkey = 'ios';
        var plaintext = password;
        var plainPin = pin;
        var cipherText = encrypt.encrypt(plaintext, secretkey, 256);
        var cipherPin = encrypt.encrypt(plainPin, secretkey, 256);
        const user = new Users({ name, email, password: cipherText, pin: cipherPin, number, address, panNumber })
        await user.save();
        return res.send("Resgistration Succesfull.")

    } catch (error) {
        return res.send(error)
    }
}

