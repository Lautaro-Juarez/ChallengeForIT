import { ClientError } from "../utils/errors.js";
import { response } from "../utils/response.js";

const errorHandler = (err, req, res, next) => {

  if (err instanceof ClientError) {
    return response(res, 404, [{errorMessage : err.message}]);
  }
  console.log(err);
  
  return response(res, 500, "Error interno del servidor");
};

export default errorHandler;