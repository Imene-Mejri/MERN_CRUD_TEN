const isEmpty = require('./isEmpty');
const validator = require('validator');

module.exports = function ValidateUser(data) {
  let errors = {};
  data.Email = !isEmpty(data.Email) ? data.Email : '';
  data.LastName = !isEmpty(data.LastName) ? data.LastName : '';
  data.FirstName = !isEmpty(data.FirstName) ? data.FirstName : '';
  data.Age = !isEmpty(data.Age) ? data.Age : '';

  if (!validator.isEmail(data.Email)) {
    errors.Email = 'Format email required ';
  }

  if (validator.isEmpty(data.LastName)) {
    errors.LastName = 'Required LastName';
  }
  if (validator.isEmpty(data.FirstName)) {
    errors.FirstName = 'Required FirstName';
  }
  if (validator.isEmpty(data.Age)) {
    errors.Age = 'Required Age';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
