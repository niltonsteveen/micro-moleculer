"use strict";
const Validator = require('moleculer-json-schema-validator')
module.exports = {
	namespace: "",
	nodeID: null,

	logger: true,
	logLevel: "info",
	logFormatter: "default",

	transporter: "NATS",

	cacher: "Redis",

	serializer: "JSON",

	requestTimeout: 10 * 1000,
	requestRetry: 0,
	maxCallLevel: 100,
	heartbeatInterval: 5,
	heartbeatTimeout: 15,

	tracking: {
    enabled: true,
    shutdownTimeout: 5000,
  },

	trackContext: true,
	gracefulStopTimeout: 5 * 1000, // waiting max 5 sec

	disableBalancer: false,

	registry: {
		strategy: "RoundRobin",
		preferLocal: true
	},

	circuitBreaker: {
		enabled: false,
		maxFailures: 3,
		halfOpenTime: 10 * 1000,
		failureOnTimeout: true,
		failureOnReject: true
	},

	validation: true,
	validator: false,
	metrics: false,
	metricsRate: 1,
	statistics: false,
	internalActions: true,

	hotReload: false,

	replCommands: null,

	// Register middlewares
	middlewares: [],

	// Called after broker created.
	created(broker) {

	},

	// Called after broker starte.
	started(broker) {

	},

	// Called after broker stopped.
	stopped(broker) {

	}
};
