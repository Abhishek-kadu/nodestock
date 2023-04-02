const express = require('express');
const app = express();
const path =require('path');
const exphbs =require('express-handlebars');

//defining ports
const PORT = process.env.PORT || 5000;

//set handlebar midlewear
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
//app.set('views', './views');
//set handlebar routing and passing stuff in variable here
app.get('/', (req, res) => {
    res.render('home',{
        stuff:"This is stuff"

    });
});


//set static(public) folder now we tell the app where it is
app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT,()=>console.log('Server listening on port' + PORT));

