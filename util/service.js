const Sequelize = require('sequelize')
const { Op } = require('sequelize')
const sequelize = require('./database.js')
const ToDoList = require('../model/ToDoList.js')

const DataStore = {
    init: async () => {
        try {
            await sequelize.authenticate();
            console.log("DB connected")
            sequelize.sync().then((result) => {
                //return ToDoList.create({ task: "Testing DB" })
                // console.log(result)s
            })
            // .then((result)=>{
            //     console.log(result)
            // })

        } catch (e) {
            console.log("Error connection DB", e)
        }
    },

    readToDoList: async () => {
        return await ToDoList.findAll();
    },

    addToDo: async (item) => {
       const result = await ToDoList.create(item)
       return result
    },
    deleteToDo: async (id) => {
        // const item = this.findToDo(id)
        // if(item instanceof ToDoList){
        const result = await ToDoList.destroy({
            where: {
                id: id
            }
        })
        return result
        // }
    },
    readToDo: async (id) => {
        const item = await ToDoList.findAll({
            where: {
                id: id
            }
        });
        return item[0]
    },
    findToDo: async (search) => {
        const items = await ToDoList.findAll({
            where: {
                task: Op.contains
            }
        });
        return items;
    },
    updateToDo: async (item, id) => {
        const result = await ToDoList.update(item, {
            where: { id: id }
        })
        return result;
    },
}

module.exports = DataStore;