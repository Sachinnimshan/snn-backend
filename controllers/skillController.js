import Skill from "../model/skill.js";
import data from "../data.js";

export const feedSkills = async (req, res) => {
  try {
    await Skill.deleteMany({});
    const skills = await Skill.insertMany(data.skillData);
    res.status(200).send(skills);
  } catch (error) {
    res.status(401).send(error);
  }
};

export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.status(200).send(skills);
  } catch (error) {
    res.status(401).send(error);
  }
};
