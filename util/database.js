const Sequelize = require('sequelize');

const sequelize = new Sequelize('todo', 'test', 'password',{
    dialect: 'sqlite',
    storage: './util/todoList.sqlite',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;