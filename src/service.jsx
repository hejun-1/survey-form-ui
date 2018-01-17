import endpoint from './backend';
import $ from 'jquery';

const service = {
  validateUserId: (surveyName, userId) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `${endpoint}/surveys/${surveyName}/users/${userId}`,
        type: 'GET',
        complete: (data) => {
          if (data.statusText == 'error' || data.responseText === userId) {
            reject();
          } else {
            resolve();
          }
        }
      });
    });
  },

  submit: (store) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `${endpoint}/surveys?verifyCode=`,
        data: JSON.stringify(store),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        complete: (data) => {
          if (data.statusText == 'error') {
            reject('提交失败,请重试或者联系我们解决');
          } else if (data.responseText.indexOf('SUCCESS') != -1) {
            const messages = data.responseText.split(':');
            if (messages.length > 1) {
              resolve(messages[1]);
            } else {
              resolve();
            }
          } else if (data.responseText.indexOf('ERROR') != -1){
            const errors = data.responseText.split(':');
            if (errors.length > 1) {
              reject(errors[1]);
            } else {
              reject('提交失败,请重试或者联系我们解决');
            }
          }
        }
      });
    });
  }
};

export default service;