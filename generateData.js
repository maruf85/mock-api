const fs = require('fs');
const { faker } = require('@faker-js/faker');

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

    return { accounts };
}

// Generate data
const data = generateData();

// Write data to db.json file
fs.writeFileSync('db.json', JSON.stringify(data));
