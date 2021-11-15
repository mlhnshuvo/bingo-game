const registerValidation = (value) => {
  const error = {};
  if (!value.email) {
    error.email = "Please provide your email";
  }
  if (!value.password) {
    error.password = "Please provide your password";
  } else if (value.password.length < 6) {
    error.password = "Please provide minimum 6 character";
  } else if (value.password.length > 20) {
    error.password = "Please provide maximum 20 character";
  }
  if (!value.fullName) {
    error.agree = "Please checked agree button";
  }
  if (!value.cpf) {
    error.agree = "Please checked agree button";
  }
  if (!value.telePhone) {
    error.agree = "Please checked agree button";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

const loginValidation = (value) => {
  const error = {};
  if (!value.email) {
    error.email = "Please provide your email";
  }
  if (!value.password) {
    error.password = "Please provide your password";
  } else if (value.password.length < 6) {
    error.password = "Please provide minimum 6 character";
  } else if (value.password.length > 20) {
    error.password = "Please provide maximum 20 character";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

module.exports = {
  registerValidation,
  loginValidation,
};
