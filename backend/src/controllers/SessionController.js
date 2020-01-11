const User = require("../models/User")

module.exports = {
    async store(req,resp){
        const email_user = req.body.email;
        let user = await User.findOne({email : email_user});

        if(!user){
            user = await User.create({email : email_user});
        }
        return resp.json(user);
    }
};
