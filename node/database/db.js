import {Sequelize} from 'sequelize';

//const db = new Sequelize('nombre de la base de datos', 'usuario', 'contraseña, objeto el cual indica el host y la base de datos que se esta utilizando',
const db = new Sequelize('u507398501_PymeWave', 'u507398501_PymesWaves', 'Contraseña.123*',{
    host: 'sql892.main-hosting.eu',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    },
    port: '%' // este es el puerto que utiliza mi base de datos, se configura aca
});

export default db;