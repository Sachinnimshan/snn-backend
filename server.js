import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRouter from './Routes/Email.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const PORT = process.env.SERVER_PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));

if(process.env.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
}
app.use('/api/email', emailRouter);

app.use('/', (req,res)=>{
    res.send("Server is Ready");
});


app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));