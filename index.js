const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes');

app.get('/', (req, res) => {
    res.send('Welcome');
});


app.listen(port, () => {
    console.log(`Server started on ${port}`);
});


app.use(express.json());

routerApi(app);