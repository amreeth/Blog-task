import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    maxLength: 50,
    required: true
  },
  author: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  blog: {
    type: String,
    required: true
  },
  comments: [{
    user: mongoose.Schema.ObjectId,
    comment: String,
    date: { type: Date, default: Date.now },
  }],
  likes: [{
    user: mongoose.Schema.ObjectId,
   
  }],
  date: { type: Date, default: Date.now },

});

export default mongoose.model("Blog", blogSchema);