const { Category } = require('../Models')

const allData = [
    { name: 'One', slug: 'ONE' },
    { name: 'Two', slug: 'TWO' },
    { name: 'Three', slug: 'THREE' },
];

const seedData = async () => {
    try {
        console.log('Starting Category seeder');
        await Promise.all(allData.map(async (singleData) => {
            await Category.updateOne({ slug: singleData.slug }, singleData, { upsert: true });
        }))
    } catch (err) {
        console.error('Error in Category seeder:', err);
    }
}

module.exports = seedData