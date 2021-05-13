import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRouter from './Routes/Email.js';

dotenv.config();

const PORT = process.env.SERVER_PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/email', emailRouter);

app.use('/', (req,res)=>{
    res.send("Server is Ready");
});

// verify connection configuration


app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));