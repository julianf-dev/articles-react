const mongoose = require('mongoose');
const app = require('./app');
const port = 3900;

mongoose.Promise = global.Promise;

async function startServer() {
  try {
    await new Promise((resolve, reject) => {
      mongoose.connect('mongodb://127.0.0.1:27017/api_rest_blog', {useNewUrlParser: true}, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
    console.log('La conexion a la base de datos se ha realizado bien !!!!!');
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error.message);
  }
}

startServer();