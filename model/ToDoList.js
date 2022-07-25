const Sequelize = require('sequelize')
const sequelize = require('../util/database.js')

const ToDoList = sequelize.define('todolist',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey: true
    },
    task: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = ToDoList;