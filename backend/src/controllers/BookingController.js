const User = require('../models/User');
const Spot = require('../models/Spot');
const Booking = require('../models/Booking');

module.exports = {
    async store(req,resp){
        const {approved, date} = req.body;
        const {id} = req.params;
        const {id_user} = req.headers

        const spot = await Spot.findById(id);
        const user = await User.findById(id_user);
        
        if(!spot && !user){
            return resp.status(400).json('Dados inválidos')
        }
        
        const booking = await Booking.create({
            spot : id,
            user : id_user,
            approved,
            date
        });

        await booking.populate('spot').populate('user').execPopulate();

        return resp.json(booking);
    }

}

