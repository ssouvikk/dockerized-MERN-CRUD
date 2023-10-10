const { User } = require('../Models');

class contactService {

    async getAll(req) {
        /* 
        const { limit, offset } = req.parameters
        let plans
        if (offset) plans = await models.Faq.findAndCountAll({ limit, offset });
        else plans = await models.Faq.findAll({ limit }); 
        */

        const users = await User.find()
        return { status: 200, data: users, message: '' }
    }

    async add(req) {
        const { name, email, mob } = req.body;
        const user = await User.create({ name, email, mob });
        return { status: 201, data: user, message: 'User is created' }
    }

    async details(req) {
        const { id } = req.params;
        const user = await User.findById(id)
        if (!user) return { status: 404, data: null, message: 'User not found' }
        return { status: 200, data: user, message: '' }
    }

    async update(req) {
        const { id } = req.params;
        const { name, email, mob } = req.body;

        const user = await User.findById(id);
        if (!user) return { status: 404, data: null, message: 'User not found' }

        user.name = name || user.name
        user.email = email || user.email
        user.mob = mob || user.mob
        await user.save()

        return { status: 200, data: user, message: '' }
    }

    async destroy(req) {
        const { id } = req.params;

        const user = await User.findOneAndDelete(id);
        if (user) return { status: 200, data: user, message: '' }
        
        return { status: 404, data: null, message: 'User not found' }
    }
}

module.exports = new contactService