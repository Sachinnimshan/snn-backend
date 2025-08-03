import IndustryProjects from "../model/industryProject.js";
import data from "../data.js";

export const feedIndustryProjects = async (req, res) => {
  try {
    await IndustryProjects.deleteMany({});
    const projects = await IndustryProjects.insertMany(data.industryProjects);
    res.status(200).send(projects);
  } catch (error) {
    res.status(401).send(error);
  }
};

export const getAllIndustryProjects = async (req, res) => {
  try {
    const projects = await IndustryProjects.find({});
    res.status(200).send(projects);
  } catch (error) {
    res.status(401).send(error);
  }
};
