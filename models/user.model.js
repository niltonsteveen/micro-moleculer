"use strict";

const userSchema = {
    email: {
      type: "email"
    },
    names_user: {
      type: "string",
      min: 3,
      max: 20
    },
    lastnames: {
      type: "string",
      min: 3,
      max: 20
    },
    document_user: {
      type: "number",
      negative:false,
      integer:true
    },
    company: {
      type: "string",
      min: 3,
      max: 100
    },
    password_user: {
      type: "string",
      min: 8,
      max: 30,
      pattern: "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/"
    },
    country: {
      type: "string",
      min: 3,
      max: 50,
      optional:true
    },
    city: {
      type: "string",
      min: 3,
      max: 50,
      optional:true
    },
    description: {
      type: "string",
      min: 3,
      max: 500,
      optional:true
    },
    state_user: {type: "boolean"},
    rol: {
      type: "number",
      integer:true,
      negative:false
    },
    document_type: {
      type: "number",
      integer:true,
      negative:false
    }
  };
/*
var phone_user= {
  number_phone:{
    type: "string",
    min: 7,
    max: 20
  },
  user_email:{
    type: "email"
  }
}*/

module.exports = userSchema;
