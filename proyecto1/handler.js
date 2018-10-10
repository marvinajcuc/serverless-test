'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hola mundo en lamda con nodejs!',
      input: event,
    }),
  };

};
