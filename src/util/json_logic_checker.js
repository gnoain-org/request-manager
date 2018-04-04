const R = require('ramda');
const jsonLogic = require('json-logic-js');

const conditionsMap = {
  success: {
    '<=': [200, { var: 'status' }, 299]
  },
  client_error: {
    '<=': [400, { var: 'status' }, 499]
  },
  server_error: {
    '<=': [500, { var: 'status' }, 599]
  }
};

const validateLogic = (condition, source) => {
  const logic = R.propOr(R.defaultTo({}, condition), condition, conditionsMap);
  return jsonLogic.apply(logic, source);
};

module.exports = { validateLogic };
