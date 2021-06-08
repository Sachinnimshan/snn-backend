import express from 'express';
import dotenv from 'dotenv';
import transporter from '../config.js';

dotenv.config();

const emailRouter  = express.Router();

emailRouter.post('/sendemail', (req, res) => {
    try {
      const mailOptions = {
        from: req.body.username, // sender address
        to: process.env.MYEmail, // list of receivers
        subject: req.body.message, // Subject line
        html: `
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.username}</li>
          <li>Email: ${req.body.email}</li>
          <li>Message: ${req.body.message}</li>
        </ul>
        `
      };
  
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later'
          });
        } else {
          res.send({
            success: true,
            message: 'Thanks for contacting us. We will get back to you shortly'
          });
        }
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Something went wrong. Try again later'
      });
    }
  });

export default emailRouter;