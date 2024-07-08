const express = require('express');
const app = express();
const createPullRequest = require('./createPullRequest');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});

app.get('/home', async (req, res) => {
    res.send('Deployed Successfully');
})

app.post('/solve2var', async (req, res) => {
    const { minterms } = req.body;
    const bufferResult = await createPullRequest(2, minterms);
    res.send(bufferResult);
});

app.post('/solve3var', async (req, res) => {
    const { minterms } = req.body;
    const bufferResult = await createPullRequest(3, minterms);
    res.send(bufferResult);
});

app.post('/solve4var', async (req, res) => {
    const { minterms } = req.body;
    const bufferResult = await createPullRequest(4, minterms);
    res.send(bufferResult);
});

app.post('/solve5var', async (req, res) => {
    const { minterms } = req.body;
    const bufferResult = await createPullRequest(5, minterms);
    res.send(bufferResult);
})