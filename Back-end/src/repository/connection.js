import mysql2 from 'mysql2/promise';


const con = await mysql2.createConnection({
    host: '191.234.194.31',
    database: 'dc',
    user: 'admin',
    password: '@dm!n',
})

console.log('/conexão com BD realizada');

export { con };