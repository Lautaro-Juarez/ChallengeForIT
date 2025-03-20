export const response = (res, statusCode, data) => {
    res.status(statusCode).json({
      error: statusCode > 400 && statusCode < 600 ? true: false,
      data
    });
  };
  