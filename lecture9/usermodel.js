const mongoodse = require('mongoose');
mongoodse.connect("mongodb://127.0.0.1:27017/mongopractice");
const userSchema = mongoodse.Schema({
    name: String,
    username: String,
    email: String
})    

module.exports = mongoodse.model("user", userSchema);
