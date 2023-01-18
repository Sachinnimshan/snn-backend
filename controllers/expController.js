import Experience from "../model/experience.js";
import data from "../data.js";

export const feedExperience = async (req, res) => {
  try {
    await Experience.deleteMany({});
    const expdata = await Experience.insertMany(data.experienceData);
    res.status(200).send(expdata);
  } catch (error) {
    res.status(401).send(error);
  }
};

export const getAllExperience = async (req, res) => {
  try {
    const expdata = await Experience.find({});
    res.status(200).send(expdata);
  } catch (error) {
    res.status(401).send(error);
  }
};
