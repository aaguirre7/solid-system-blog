const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'jmcfee'

    },
    {
        username: 'Bill',
        password: 'bgates'
    },
    {
        username: 'Elon',
        password: 'emusk'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;