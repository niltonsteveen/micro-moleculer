"use strict";
const DbService	= require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");

const phoneSchema={
  define:{
    number_phone: Sequelize.STRING,
    user_email: Sequelize.STRING
  },
  options:{
    number_phone:{
      
    },
    user_email:{

    }
  }
}

module.exports = function(collection) {
	return {
		name:"PHONE_USER",
		mixins: [DbService],
		adapter: new SqlAdapter('user_microservice','postgres','root',{
      host:'localhost',
      dialect: 'postgres',
      port: 5432,
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
    }),
		model: userSchema
	};
};
