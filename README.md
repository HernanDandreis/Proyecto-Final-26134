# Proyecto-Final-26134
## Entrega Proyecto Final NODEJS - TalentoTech | Comision 26134

API REST desarrollada con Node.js y Express para la gestión de productos de un ecommerce. El proyecto implementa operaciones CRUD completas, persistencia en Firebase Firestore y borrado lógico de registros y logs de actividad.

## Características

- Crear productos
- Obtener listado de productos
- Obtener producto por ID
- Actualizar productos
- Borrado lógico (mediante un flag de "active")
- Borrado fisico
- Integración con Firebase Firestore
- Validación de datos
- Manejo centralizado de errores

## Tecnologías

- Node.js
- Express.js
- Firebase Firestore
- JavaScript ES Modules

## Instalación

### Clonar repositorio

```bash
git clone https://github.com/HernanDandreis/Proyecto-Final-26134.git
cd Proyecto-Final-26134
```

### Instalar dependencias

```bash
npm install
```

### Configurar variables de entorno

Crear un archivo `.env`:

```env
PORT=3000
```

Y agregar las credenciales de Firebase según corresponda.

## Ejecución

```bash
npm start
```

## Endpoints

### Obtener todos los productos

```http
GET /api/products
```

### Obtener producto por ID

```http
GET /api/products/:id
```

### Crear producto

```http
POST /api/products
```

Body:

```json
{
  "title": STR,
  "price": INT,
  "description": STR,
  "active": BOOL,
  "stock": INT
}
```

### Actualizar producto

```http
PUT /api/products/:id
```

### Borrado fisico

```http
DELETE /api/products/:id
```

### Borrado logico

```http
PUT /api/products/:id/status
```

## Estructura del proyecto

```text
## Estructura del Proyecto

├── src/
│   ├── config/          # Configuración general de la aplicación
│   ├── controllers/     # Controladores que gestionan las peticiones HTTP
│   ├── factories/       # Factorías para la creación e inicialización de servicios
│   ├── logs/            # Archivos y configuración de logs
│   ├── middleware/      # Middlewares personalizados de Express
│   ├── models/          # Modelos de datos
│   │   ├── Auth.model.js
│   │   └── Product.model.js
│   ├── routes/          # Definición de rutas de la API
│   ├── seeders/         # Scripts para carga inicial de datos
│   └── services/        # Lógica de negocio y acceso a datos
│
├── index.js             # Punto de entrada de la aplicación
```

## Arquitectura

El proyecto sigue una arquitectura por capas:

- **Routes:** reciben las solicitudes HTTP y las derivan al controlador correspondiente.
- **Controllers:** validan la petición y coordinan la lógica de negocio.
- **Services:** contienen la lógica principal de la aplicación.
- **Models:** representan las entidades y operaciones sobre los datos.
- **Middleware:** ejecutan validaciones y tareas transversales antes o después de cada petición.
- **Config:** centraliza configuraciones y conexiones externas.
- **Factories:** permiten desacoplar la creación de dependencias.
- **Seeders:** facilitan la carga de datos iniciales para pruebas o desarrollo.

## Dependencias utilizadas

```bash
    fakerjs
    body-parser,
    cors,
    dotenv,
    express,
    firebase,
    jsonwebtoken
```


## Scripts

```bash
npm run seed:prodcuts
```
- **Crea 5 productos en la base de datos**

## Autor
Desarrollado por Hernán D'Andreis como proyecto final del curso de Backend con NODEJS - TalentoTech | Comision 26134.
