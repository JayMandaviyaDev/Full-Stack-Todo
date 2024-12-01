const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
  }, { timestamps: true });

  module.exports = mongoose.model('Todo', todoSchema);