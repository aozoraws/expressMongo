//Define a schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
  title:  {
    type: String,
    required: [true, 'Please provide the Title of the book.']
  },
  author:  {
    type: String,
    required: [true, 'Please provide Author of the book.']
  },
  description:   {
    type: String,
    required: [true, 'Please provide a fitting Description for the book.']
  }
});

// Compile model from schema
var dataModel = mongoose.model('dataModel', dataSchema );

var awesome_instance = new dataModel({
  title: 'ass s',
  author: 'Timothy of Utah',
  description: 'shit book', 
});

// Save the new model instance, passing a callback
awesome_instance.save(function (err,result) {

  console.log(result);
});

dataModel.find({ 'title': 'Cagliostro' }, 'title', function (err, athletes) {
  if (err) return handleError(err);
  console.log(athletes);
  // 'athletes' contains the list of athletes that match the criteria.
})

// module.exports = {
//   dataModel: dataModel
// };