// Importando o express e o handlebars
const express = require('express');
const exphbs = require('express-handlebars');

// App
const app = express();

// Tamplate
app.engine('handlebars', exphbs({defaultLayout: 'principal'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    let pessoas = [
        {"nome": "Beltrano", "idade":30},
        {"nome": "Fulano", "idade":12},
        {"nome": "Cicrano", "idade":27}
    ]
    res.render('inicio', {gostandoDeNode:true, dados:pessoas});
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

app.listen(3030, () => {
    console.log('🚀 Funcionando!!!')
});

