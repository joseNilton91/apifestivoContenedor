const { MongoClient } = require('mongodb');
//Cargar la configuración de la BD
const CONFIGDB = require('../Congif/dbconfig');
//objeto que contiene la conexión a la bd
const URL = `mongodb://${CONFIGDB.SERVER}:${CONFIGDB.PORT}`;

const CLIENT = new MongoClient(URL);

let database;
module.exports = {
	connect: async () => {
		try {
			await CLIENT.connect();
			console.log('Se ha establecido conexión al servidor de MONGO');
			database = CLIENT.db(CONFIGDB.DATABASE);
		} catch (error) {
			console.log(error);
		}
	},
	getDataBase: () => {
		return database;
	},
};
