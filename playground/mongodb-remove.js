const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectId} = require('mongodb');

const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })


//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findByIdAndRemove('59b9a49709534189f2248b53').then((todo) => {
    console.log(todo);
});