const express = require('express');
const { faker } = require('@faker-js/faker');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Function to generate data
function generateData() {
    const accounts = [];
    for (let id = 0; id < 100; id++) {
        let accountId = faker.datatype.number({ min: 1000000 });
        let name = faker.name.findName();
        let seat = faker.datatype.number(100);
        let enterprise = faker.company.bsNoun();
        let admin = faker.name.findName();
        accounts.push({
            id,
            accountId,
            name,
            seat,
            enterprise,
            admin,
        });
    }

    return accounts;
}

// Get all accounts
app.get('/accounts', (req, res) => {
    const accounts = generateData();
    res.json(accounts);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
