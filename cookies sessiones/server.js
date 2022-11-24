const express = require('express');
const cookieSession = require('cookie-session');
const app = express();

app.use(cookieSession({
    name :'session',
    keys :['kja553565fklfjsjf5454f5s6f','dfds5522fdfasf8d211ffs45f45f']
}));
app.get('/',function(req,res){
    req.session.visits = req.session.visits || 0;
    req.session.visits =req.session.visits+1;
    res.send(`${req.session.visits} visita(s)`);
});
app.listen(3000);