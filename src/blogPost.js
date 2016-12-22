const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
	name: {
		type: String,
		content: String,
		comments: [{
			type: Schema.Types.ObjectId,
			ref: 'comment'
		}]
});

const BlogPost = mongoose.model('blogpost', BlogPostSchema);

module.exports = BlogPost;