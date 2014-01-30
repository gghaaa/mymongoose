var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});
var Schema = mongoose.Schema;
var blogSchema = new Schema({
  title:  String,
});

var Blog = mongoose.model('Blog', blogSchema);
Blog.find({}, function(err, result) {
	if (err) console.log('fine err');
	console.log(result);
})
