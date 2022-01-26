import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/postRoutes.js';

const app = express();

app.use(express.json());

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

mongoose.connect("mongodb+srv://oyeda:oyeda@cluster0.nfskq.mongodb.net/virt-pho-album-posts", { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/", postRoutes);

app.listen(3001, () => {
    console.log('Server is currently running on port 3001')
})