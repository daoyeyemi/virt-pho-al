import Post from "../models/postModel.js";
import express from '../../frontend/node_modules/@types/express';
const router = express.Router();

// we're using this to post user input into mongodb database
router.post("/create", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const file = req.body.file;

    console.log(title);
    console.log(description);
    console.log(file);

    const newPost = new Post({
        title, 
        description, 
        file
    });

    newPost.save();
})

// retrieve data and place back into ui
router.get("/posts", async (req, res) => {
    await Post.find().then(posts => res.json(posts));
})

export default router;