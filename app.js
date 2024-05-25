const cors = require('cors')

const express = require ('express');
const morgan = require('morgan');
const path = require('path');

const app = express()
app.use(cors())

/**Configuraciones */
app.set ('port', process.env.PORT || 3001);

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/sobre-nosotros')));
app.get('/sobre-nosotros', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/sobre-nosotros', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/nuestros-servicios')));
app.get('/nuestros-servicios', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/nuestros-servicios', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/nuestros-servicios')));
app.get('/nuestros-servicios/:servicios', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/nuestros-servicios', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/nuestro-portafolio')));
app.get('/nuestro-portafolio', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/nuestro-portafolio', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/nuestro-blog')));
app.get('/nuestro-blog', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/nuestro-blog', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/contactanos')));
app.get('/contactanos', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/contactanos', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/mi-cuenta/login')));
app.get('/mi-cuenta/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/mi-cuenta/login', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/mi-cuenta/olvide-contraseña')));
app.get('/mi-cuenta/olvide-contraseña', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/mi-cuenta/olvide-contraseña', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/mi-cuenta/cambiar-password')));
app.get('/mi-cuenta/cambiar-password/:usuario', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/mi-cuenta/cambiar-password', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/mi-cuenta/revisar-correo')));
app.get('/mi-cuenta/revisar-correo', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/mi-cuenta/revisar-correo', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/cambio-password/exitoso')));
app.get('/cambio-password/exitoso/:usuario/:usuario', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/cambio-password/exitoso', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/mi-cuenta/registro')));
app.get('/mi-cuenta/registro', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/mi-cuenta/registro', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/mi-cuenta/registro/exitoso')));
app.get('/mi-cuenta/registro/exitoso', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/mi-cuenta/registro/exitoso', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/nuestra-tienda')));
app.get('/nuestra-tienda', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/nuestra-tienda', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/carrito-compras')));
app.get('/carrito-compras', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/carrito-compras', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/producto')));
app.get('/producto/:producto/:sku', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/producto', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/suscripcion')));
app.get('/suscripcion', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/suscripcion', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/cotizacion')));
app.get('/cotizacion', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/cotizacion', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/cotizacion/servicio')));
app.get('/cotizacion/servicio/:servicio', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/cotizacion/servicio', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/cotizacion/resumen')));
app.get('/cotizacion/resumen', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/cotizacion/resumen', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/cotizacion/enviada')));
app.get('/cotizacion/enviada', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/cotizacion/enviada', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/cotizacion/detalles')));
app.get('/cotizacion/detalles/:id_cotizacion/:nro_cotizacion', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/cotizacion/detalles', 'index'));
});

//Iniciar el servidor
app.listen (app.get('port'), () => {
    console.log ('Server en puerto ', app.get ('port'))
})
