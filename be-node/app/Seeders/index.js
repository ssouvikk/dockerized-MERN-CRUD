const mongoose = require('mongoose');
const { DB_URL } = require('../../Config');

const allSeeders = {
    UserSeeder: require('./User.Seeder'),
    CategorySeeder: require('./Category.Seeder'),
}

mongoose.connect(DB_URL)
    .then(() => runAll())
    .catch(err => console.log(err))


const runAll = async () => {
    for (const singleSeeder of Object.values(allSeeders)) {
        await singleSeeder()
    }
    await mongoose.connection.close();
    console.log('Seeder run successfully')
}