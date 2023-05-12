import {Sequelize} from 'sequelize';

//const db = new Sequelize('nombre de la base de datos', 'usuario', 'contraseña, objeto el cual indica el host y la base de datos que se esta utilizando',
const db = new Sequelize('bubfsppbrknjnvd8eeye', 'ujdagf6kfuum6tul', '10bIEVbm6k9uAkHocMmA',{
    host: 'bubfsppbrknjnvd8eeye-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    },
    port: '3306' // este es el puerto que utiliza mi base de datos, se configura aca
});

export default db;