const { User } = require('../Models')

const allData = [
    { email: 'one@one.com', mob: 11111111, name: 'one' },
    { email: 'two@two.com', mob: 22222222, name: 'two' },
    { email: 'three@three.com', mob: 33333333, name: 'three' },
];

const seedData = async () => {
    try {
        console.log('Starting User seeder');
        await Promise.all(allData.map(async (singleData) => {
            await User.updateOne({ email: singleData.email }, singleData, { upsert: true });
        }))
    } catch (err) {
        console.error('Error in User seeder:', err);
    }
}

module.exports = seedData