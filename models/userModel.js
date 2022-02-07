import Schema from 'mongoose';
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    password: String,
    postsfromUser: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
})

const UserInstance = mongoose.model('User', userSchema);

export default UserInstance;