const Spot= require('../models/Spot')
const User= require('../models/User')


module.exports = {
    async index(req,resp){
        const {id_user} = req.headers;

        const user = await User.findById(id_user);

        if(!user){
            return resp.status(400).json({error : "User doesn't exits"});
        }

        const spots = await Spot.find({user : id_user});
        return resp.json(spots);
    },
};
