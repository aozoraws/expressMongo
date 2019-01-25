/* indexRouter's Index */
var index = function(req,res,next){
  res.render('index',{ 
    title: "Landing Page",
    image: "admin.jpg",
    segment: req.path.split('/')
  })
};

module.exports = {
  Index: index
};
