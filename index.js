import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoute from './routers/UserRoute.js';
import multer from 'multer';
const app = express();


app.use(bodyParser.json());
app.use(express.static('uploads'))

// store image
// export const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './images');
//     },
//     filename: (req, file, cb) => {
//         cb(null, new Date().toString() + '-' + file.originalname);

//     }
// });
 
// Connect to DB
mongoose.connect('mongodb://localhost:27017/tugasCRUD',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Konek database'));

app.use(cors());
app.use(express.json()); 
app.use(userRoute);
// app.use(multer({
//     storage: storage,
// }).single("image"));

// How to we start listening to server
app.listen(3001, ()=> console.log('Server is running'));

