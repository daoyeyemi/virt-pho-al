import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/postRoutes.js';

const app = express();
// const PORT = process.env.PORT || 3001;
const PORT = 3001;

app.use(express.json());

app.use(bodyParser.json({ limit: '100mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))
app.use(cors());

// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://oyeda:oyeda@cluster0.nfskq.mongodb.net/virt-pho-album-posts", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb+srv://oyeda:oyeda@cluster0.nfskq.mongodb.net/photo-journal", { useNewUrlParser: true, useUnifiedTopology: true });

// app.use(express.static('frontend/build'));

app.use("/", postRoutes);

app.listen(PORT, () => {
    console.log('Server is currently running on port ' + PORT)
})