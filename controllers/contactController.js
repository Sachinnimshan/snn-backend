import Contact from "../model/contact.js";
import errorFunction from "../validations/errorFunction.js";

export const postContactMessage = async (req, res) => {
  try {
    const message = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    const newmessage = await message.save();
    if (newmessage) {
      res.status(201);
      return res.json(errorFunction(false, "Your message posted"));
    } else {
      res.json(401);
      return res.json(errorFunction(true, "Something went wrong"));
    }
  } catch (error) {
    res.status(401);
    return res.json(errorFunction(true, "Something went wrong"));
  }
};
