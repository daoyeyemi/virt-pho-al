const userSchema = mongoose.Schema({
    first_name: String,
    second_name: String,
    username: String,
    password: String,
    postsfromUser: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
})

const UserInstance = mongoose.model('User', userSchema);

export default UserInstance;