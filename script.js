const express = require('express')
const app = express()


app.set("view engine","ejs");

// app.use(function(req,res,next){
// console.log('middleware working');
//     next();
// });

app.get('/', function (req, res) {
  res.render('index')
});



// app.get('/profile/:username', function (req, res) {
//     res.send(`Hello from ${req.params.username} `);
//   });
app.get('/menu', function (req, res) {
  res.render('menu')
})


app.listen(3000)