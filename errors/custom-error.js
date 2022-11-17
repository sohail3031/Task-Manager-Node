class CustomAPIError extends Error {
  constructor(message, statusCode) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

module.exports = { createCustomError, CustomAPIError };
