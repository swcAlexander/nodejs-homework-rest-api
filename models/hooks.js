export const handlleSaveError = (error, data, next) => {
  error.status = 400;
  next();
};

export const runValidateAtupdate = function (next) {
  this.options.runValidators = true;
  next();
};
