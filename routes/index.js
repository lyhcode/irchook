
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.post = function(req, res) {
    res.send('hello');
};