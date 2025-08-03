import Certification from "../model/certification.js";
import data from "../data.js";

export const feedCertifications = async (req, res) => {
  try {
    await Certification.deleteMany({});
    const certifications = await Certification.insertMany(data.certifications);
    res.status(200).send(certifications);
  } catch (error) {
    res.status(401).send(error);
  }
};

export const getAllCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find({});
    res.status(200).send(certifications);
  } catch (error) {
    res.status(401).send(error);
  }
};
