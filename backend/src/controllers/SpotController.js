const Spot = require('../models/Spot');
const User = require('../models/User');
module.exports = {
    async store(req, resp) {
        const {company, price , techs} = req.body;
        const {filename} = req.file; 
        const {id_user} = req.headers;
        console.log(company);
        console.log();

        const user = await User.findById(id_user);
        if(!user){
            return resp.status(400).json({error: "User doesn't exits"});
        };
        const spot = await Spot.create({
            company,
            price,
            techs : techs.split(',').map(tech => tech.trim()),
            thumbnail : filename,
            user : id_user
        });
        console.log(spot);

        return resp.json(spot);
    },
    async index(req, resp){

        const {filter} = req.query;
        spots = await Spot.find({techs : filter});
        return resp.json(spots)
    }
};