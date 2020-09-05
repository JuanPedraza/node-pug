const express = require('express')
const app = express()
const port = process.env.PORT || 3000


// Motor de plantillas

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

// Estáticos

app.use(express.static(__dirname + "/public"));


// Rutas

app.get('/', (req,res) => {
    res.render('index', {
        title: 'Inicio',
        message: 'Hola mundo'

    })
})


app.get('/servicios', (req,res) => {
    res.render('servicios', {
        title: 'Servicios',
        message: 'Página de servicios'
    })
})


app.use((req,res, next) => {
    res.status(404).render("404", {
        title: "404",
        description: "No se ha encontrado el sitio que buscas"
    });
});



app.listen(port, () => {
    console.log(`Servidor corriendo en Localhost: ${port}`);
})