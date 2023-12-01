class ResponseStatus {
  constructor(res) {
    this.res = res;
  }
  statusMessage(statusCode, message) {
    return this.res.status(statusCode).json({
      title: message,
    });
  }
}

module.exports = {
  ResponseStatus
};
