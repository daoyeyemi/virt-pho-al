import Post from "../models/postModel.js";
import User from "../models/userModel.js";
import express from 'express';
const router = express.Router();

router.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const returningUser = new User({
        username, 
        password
    })

    returningUser.save();
})

router.post("/signup", (req, res) => {
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const username = req.body.username
    const password = req.body.password

    const newUser = new User({
        first_name,
        last_name,
        username,
        password
    })

    newUser.save();
})

// // we're using this to post user input into mongodb database
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

// router.get("/edit/:id", async (req, res) => {
//     await Post.findById(req.params.id)
//         .then(data => res.json(data))
// });

// router.delete("/edit/:id", async (req, res) => {
//     await Post.deleteOne({
//         _id: req.params.id
//     })
// })

// router.put("/edit/:id", async (req, res) => {
//     // let post = await Post.findById(req.params.id);

//     let post = req.body;

//     // const editedPost = new Post(post);

//     await Post.updateOne({
//         _id: req.params.id
//     }, post)

//     // editedPost.save();
// })

// retrieve data and place back into ui
// router.get("/posts", async (req, res) => {
//     await User.find()
//         .then(user => res.json(user));
// })

export default router;