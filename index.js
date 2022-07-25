const app = require('./util/express.js')
const DataStore = require('./util/service.js')

// const app = express()
// app.use(express.json());
//app.use(express.urlencoded());

app.get('/', async (req, res) => {
    res.send({ text: 'Welcome to Machines' })
})

app.get('/todoList', async (req, res) => {
    DataStore.init();
    const todoList = await DataStore.readToDoList()
    res.send(todoList);
})

app.post('/todoList', async (req, res) => {
    const toDoItem = req.body
    console.log(req.body)
    const item = await DataStore.addToDo(toDoItem)
    if (item.length > 0)
        res.sendStatus(201)
    else
        res.sendStatus(500)

})

app.delete('/todoList/:id', async (req, res) => {
    const { id } = req.params;
    const result = await DataStore.deleteToDo(id);
    if (result > 0)
        res.sendStatus(200)
    else
        res.sendStatus(500)
})

app.put('/todoList/:id', async (req, res) => {
    const { id } = req.params;
    const item = req.body
    const result = await DataStore.updateToDo(item, id);
    if (result.length === 1)
        res.sendStatus(200)
    else
        res.sendStatus(500)
})

app.get('/todoList/:id', async (req, res) => {
    const { id } = req.params;
    if (isFinite(id)) {
        const todo = await DataStore.readToDo(parseInt(id, 10));
        res.send(todo);
    } else {
        res.sendStatus(400)
    }

})