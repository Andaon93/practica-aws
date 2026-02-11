const request = require('supertest');
const app = require('../index'); // Al importar esto, los modelos ya se inicializan en los servicios
const sequelize = require('../config/sequelize'); // La conexión compartida

// IMPORTANTE: No usar initModels() aquí. Usamos los que ya existen en la memoria.
const Hospital = sequelize.models.hospital;

describe('Pruebas de la API REST - Entidad Hospitales', () => {

  // beforeAll: Se ejecuta una vez antes de empezar todos los tests
  beforeAll(async () => {
    // Truco para MySQL: Desactivamos el chequeo de claves foráneas para poder borrar y recrear tablas sin errores
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true });
    await sequelize.sync({ force: true });
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1', { raw: true });
  });

  // afterAll: Cerramos conexión al acabar
  afterAll(async () => {
    await sequelize.close();
  });

  test('1. GET /api/hospitales - Debería retornar status 200', async () => {
    const res = await request(app).get('/api/hospitales');
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
  });

  test('2. POST /api/hospitales - Crear hospital correctamente', async () => {
    const nuevo = { 
        nombre: "Hospital de Prueba", 
        direccion: "Calle Test", 
        presupuesto: 50000, 
        publico: true 
    };
    const res = await request(app).post('/api/hospitales').send(nuevo);
    expect(res.statusCode).toBe(201);
    // Guardamos el ID para usarlo en otros tests si fuera necesario, aunque aquí creamos uno nuevo en cada test
  });

  test('3. POST /api/hospitales - Error si falta nombre', async () => {
    const res = await request(app).post('/api/hospitales').send({ presupuesto: 10 });
    // Esperamos que falle (500 o 400) porque no tiene nombre
    expect(res.statusCode).not.toBe(201); 
  });

  test('4. GET /api/hospitales/:id - Hospital inexistente da 404', async () => {
    const res = await request(app).get('/api/hospitales/999999');
    expect(res.statusCode).toBe(404);
  });

  test('5. PUT /api/hospitales/:id - Actualizar presupuesto', async () => {
    // 1. Creamos un hospital para asegurar que existe
    const creado = await request(app).post('/api/hospitales').send({ nombre: "Para Editar", presupuesto: 100 });
    const id = creado.body.datos.id_hospital;

    // 2. Lo editamos
    const res = await request(app).put(`/api/hospitales/${id}`).send({ presupuesto: 5000 });
    expect(res.statusCode).toBe(200);
    expect(res.body.datos.presupuesto).toBe("5000.00"); // MySQL suele devolver decimales como string
  });

  test('6. DELETE /api/hospitales/:id - Borrado de hospital', async () => {
    // 1. Creamos un hospital para borrar
    const creado = await request(app).post('/api/hospitales').send({ nombre: "Para Borrar" });
    const id = creado.body.datos.id_hospital;

    // 2. Lo borramos
    const res = await request(app).delete(`/api/hospitales/${id}`);
    expect(res.statusCode).toBe(200);
    
    // 3. Verificamos que ya no existe
    const check = await request(app).get(`/api/hospitales/${id}`);
    expect(check.statusCode).toBe(404);
  });
});