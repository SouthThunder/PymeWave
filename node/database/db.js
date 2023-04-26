import {Sequelize} from 'sequelize';

//const db = new Sequelize('nombre de la base de datos', 'usuario', 'contraseña, objeto el cual indica el host y la base de datos que se esta utilizando',
const db = new Sequelize('pymewave', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    },
    port: '3307' // este es el puerto que utiliza mi base de datos, se configura aca
});

export default db;