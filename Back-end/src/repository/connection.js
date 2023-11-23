import mysql2 from 'mysql2/promise';


const con = await mysql2.createConnection({
    host: '4.201.80.48',
    database: 'dc',
    user: 'admin',
    password: '@dm!n',
})

console.log('/conexão com BD realizada');

export { con };