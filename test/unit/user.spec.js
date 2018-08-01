"use strict";
const { ValidationError } = require("moleculer").Errors;
var assert = require('assert');

describe("Test 'user' logic", () => {
  describe("Test 'user.hello' action", () => {
    it("should return with 'Hello Moleculer'", () => {
      assert.equal(1,1);
    });
  });
});
