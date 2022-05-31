/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* /api/currentUser
* 获取当前的用户
*
* returns CurrentUser
* */
const currentUser = () => new Promise(
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
* /api/notices
*
* returns NoticeIconList
* */
const getNotices = () => new Promise(
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
  currentUser,
  getNotices,
};
