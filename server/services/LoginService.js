/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* /api/login/captcha
* 发送验证码
*
* phone String 手机号 (optional)
* returns FakeCaptcha
* */
const getFakeCaptcha = ({ phone }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        phone,
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
* /api/login/account
* 登录接口
*
* loginParams LoginParams  (optional)
* returns LoginResult
* */
const login = ({ loginParams }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        loginParams,
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
* /api/login/outLogin
* 登录接口
*
* returns Object
* */
const outLogin = () => new Promise(
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
  getFakeCaptcha,
  login,
  outLogin,
};
