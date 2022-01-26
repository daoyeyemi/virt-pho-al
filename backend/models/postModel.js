import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    file: String,
    created: {
        type: Date,
        default: new Date()
    }
})

const PostInstance = mongoose.model('Post', postSchema);

export default PostInstance;