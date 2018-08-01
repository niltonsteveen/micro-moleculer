"use strict";
const DbService = require("../mixins/db.mixin");
const userEntity=require("../models/user.model");
module.exports = {
	name: "users",
  mixins: [
    DbService("users")
  ],
	/**
	 * Service settings
	 */
	settings: {
    /** Public fields */
		/*fields: ["email", "names_user", "lastnames", "document_user", "company", "password_user",
    "country", "city", "description", "state_user", "rol", "document_type"],

		entityValidator: userEntity.userSchema*/
	},

	/**
	 * Service metadata
	 */
	metadata: {

	},

	/**
	 * Service dependencies
	 */
	//dependencies: [],

	/**
	 * Actions
	 */
	actions: {
    saludar:{
      /*params:{
        nombre:{
          type:'string'
        }
      },*/
      visibility:"public",
      handler(ctx) {
        return('eee hola ombe EL NILTON');
      }
    }
  },

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {
    cleanEntities() {
      this.actions.saludar({nombre:'nilton'});
    }
	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {
    //this.cleanEntities();
	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	},

  afterConnected() {

	}
};
