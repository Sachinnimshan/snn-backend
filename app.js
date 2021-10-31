import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRouter from './Routes/Email.js';
import userRouter from './Routes/userRoutes.js';
import projectRouter from './Routes/projectRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
const CONNECTION = process.env.DB_URL;

mongoose.connect(CONNECTION,{
  useNewUrlParser: true
})
.then(()=> console.log(`Database Connected`))
.catch((error)=> console.log(error));

app.use('/email', emailRouter);
app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter);

if(process.env.ENV === "PROD"){
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.use('/', (req,res)=>{
    res.send("Server is Ready");
});

server.listen(PORT, ()=> console.log(`Server Started at ${PORT}`));