const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

<<<<<<< HEAD
if(process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
}
else {
=======
if(process.env.JAWSDB_URL){
  sequelize= new Sequelize(process.env.JAWSDB_URL);
}
else{
>>>>>>> 9ce7c6e26150d05f1937b13fb56758eb1c289e93
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;
