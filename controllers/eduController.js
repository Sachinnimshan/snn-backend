import Education from "../model/education.js";
import data from "../data.js";

export const feedEducation = async (req, res) => {
  try {
    await Education.deleteMany({});
    const edudata = await Education.insertMany(data.educationData);
    res.status(200).send(edudata);
  } catch (error) {
    res.status(401).send(error);
  }
};

export const getAllEducation = async (req, res) => {
  try {
    const edudata = await Education.find({});
    const filteredData = edudata.filter((item) => item.show === true);
    res.status(200).send(filteredData);
  } catch (error) {
    res.status(401).send(error);
  }
};
