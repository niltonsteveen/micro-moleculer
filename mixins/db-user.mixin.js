"use strict";

const DbService	= require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");

const userSchema = {
  define:{
    email: Sequelize.STRING,
    names_user: Sequelize.STRING,
    lastnames: Sequelize.STRING,
    document_user: Sequelize.INTEGER,
    password_user: Sequelize.STRING,
    country: Sequelize.STRING,
    city: Sequelize.STRING,
    description: Sequelize.STRING,
    state_user: Sequelize.BOOLEAN,
    rol: Sequelize.INTEGER,
    document_type: Sequelize.INTEGER,
    company: Sequelize.INTEGER
  },
  options:{
    email:{
      allowNull:false,
      validate:{
        isEmail:true
      }
    },
    names_user: {
      allowNull:false,
      validate:{
        len:[3,20]
      }
    },
    lastnames: {
      allowNull:false,
      validate:{
        len:[3,20]
      }
    },
    document_user: {
      allowNull:false,
      validate:{
        isInt:true
      }
    },
    password_user:{
      allowNull:false,
      validate:{
        is:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i
      }
    },
    country:{
      allowNull:true,
      validate:{
        len:[3,50]
      }
    },
    city:{
      allowNull:true,
      validate:{
        len:[3,50]
      }
    },
    description:{
      allowNull:true,
      validate:{
        len:[3,500]
      }
    },
    state_user:{
      allowNull:false
    },
    rol:{
      allowNull:false,
      validate:{
        isInt:true
      }
    },
    document_type:{
      allowNull:false,
      validate:{
        isInt:true
      }
    },
    company:{
      allowNull:false,
      validate:{
        isInt:true
      }
    }
  }
};


module.exports = function(collection) {
	return {
		name:"USER_T",
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
