import joi from "joi";
import errorFunction from "./errorFunction.js";

const validation = joi.object({
  name: joi.string().trim(true).min(5).max(20).required(true),
  email: joi.string().email().trim().required(),
  password: joi.string().trim(true).min(6),
});

export const userValidation = async (req, res, next) => {
  const payload = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const { error } = validation.validate(payload);
  if (error) {
    res.status(401);
    return res.json(
      errorFunction(true, `Something Went wrong : ${error.message}`)
    );
  } else {
    next();
  }
};
