import joi from "joi";
import errorFunction from "./errorFunction.js";

const validation = joi.object({
  name: joi.string().min(5).trim(true).required(),
  email: joi.string().email().trim(true).required(),
  message: joi.string().min(10).required(),
});

export const contactValidation = async (req, res, next) => {
  const payload = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
  const { error } = validation.validate(payload);
  if (error) {
    res.status(401);
    return res.json(
      errorFunction(true, `Something went wrong ${error.message}`)
    );
  } else {
    next();
  }
};
