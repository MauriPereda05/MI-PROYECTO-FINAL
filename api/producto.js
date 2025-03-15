// api/productos.js
import jsonServer from 'json-server';
import path from 'path';

export default function handler(req, res) {
  
  const server = jsonServer.create();

  
  const dbPath = path.join(process.cwd(), 'db.json');
  server.db = new jsonServer.lowdb(new jsonServer.FileSync(dbPath));

  // Usar middleware predeterminado
  server.use(jsonServer.defaults());

  // Agregar la ruta para los productos
  server.use('/productos', server.router(dbPath));

  // Iniciar el servidor
  server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
  });
}
