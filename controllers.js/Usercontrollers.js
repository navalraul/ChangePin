import Users from "../models/User.js";


export const register = async (req, res) => {
    try{
        const { Name, Email, Password, Pin, Number, Address, Pancard} = req.body;
        if (!Name) return req.send("User Name is required!");
        if (!Email) return req.send("User Email is required!");
        if (!Password) return req.send("User Password is required!");
        if (!Pin) return req.send("User Pin is required!");
        if (!Number) return req.send("User Number is required!");
        if (!Address) return req.send("User Address is required!");
        if (!Pancard) return req.send("User Pancard is required!");

        const response = await Users.find({ Email: Email}).exec();
        if(response.length) {
            return res.send("Email already present");
        }
        const user = new Users({
            Name: Name,
            Email: Email,
            Password: Password,
            Pin: Pin,
            Number: Number,
            Address: Address,
            Pancard: Pancard
        });
        await user.save();
        return res.send("Register successful!")
    }catch (err){
        return res.send(err);
    }
}