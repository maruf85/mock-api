const fs = require('fs');
const { faker } = require('@faker-js/faker');

function generateData() {
    const accounts = [];
    const logs = [];

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

    // Generate 50 logs
    for (let i = 0; i < 50; i++) {
        let logAction = faker.helpers.arrayElement(['created', 'updated', 'deleted']);
        let userType = faker.helpers.arrayElement(['provider', 'mds']);
        let logMessage = `${userType} ${logAction} by ${faker.name.findName()}`;
        let updatedBy = faker.name.findName();
        let updatedAt = faker.date.recent().toISOString();
        logs.push({
            log: logMessage,
            updatedBy: updatedBy,
            updatedAt: updatedAt,
        });
    }

    return { accounts, logs };
}

// Generate data
const data = generateData();

// Write data to db.json file
fs.writeFileSync('db.json', JSON.stringify(data));
