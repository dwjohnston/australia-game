const express = require('express');
const uuid = require('uuid/v1');
const app = express();
app.use(express.json());
const port = 3001 || process.env.port;

const dbApi = require("./dbApi/interactWithTable");

const Routes = require("./routes"); 


app.get(Routes.STUDENTS, async (req, res) => {
    try {
        const result = await dbApi.getAllItems();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post(Routes.STUDENTS, async (req, res) => {
    try {
        const result = await dbApi.addItem({            
            ...req.body,
        });
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.patch(`${Routes.STUDENTS}/:id`, async (req, res) => {
    try {
        const id = req.params.id;
        const result = await dbApi.updateItem({
            ...req.body,
            id, 
        });
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete(`${Routes.STUDENTS}/:id`, async (req, res) => {
    try {
        const id = req.params.id;
        const result = await dbApi.deleteItem(id);
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => console.log(`Acme University app listening on port ${port}!`))