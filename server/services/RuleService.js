/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* /api/rule
* 新建规则
*
* returns RuleListItem
* */
const addRule = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* /api/rule
* 删除规则
*
* returns Object
* */
const removeRule = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* /api/rule
* 获取规则列表
*
* current String 当前的页码 (optional)
* pageSize String 页面的容量 (optional)
* returns RuleList
* */
const rule = ({ current, pageSize }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        current,
        pageSize,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* /api/rule
* 新建规则
*
* returns RuleListItem
* */
const updateRule = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  addRule,
  removeRule,
  rule,
  updateRule,
};
