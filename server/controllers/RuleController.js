/**
 * The RuleController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/RuleService');
const addRule = async (request, response) => {
  await Controller.handleRequest(request, response, service.addRule);
};

const removeRule = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeRule);
};

const rule = async (request, response) => {
  await Controller.handleRequest(request, response, service.rule);
};

const updateRule = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateRule);
};


module.exports = {
  addRule,
  removeRule,
  rule,
  updateRule,
};
