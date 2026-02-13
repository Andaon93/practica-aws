# 1. Usamos una imagen ligera de Node.js (esto es como el sistema operativo base)
FROM node:20-alpine

# 2. Creamos el directorio de trabajo dentro del contenedor (donde se guardará tu código)
WORKDIR /app

# 3. Copiamos los archivos de dependencias primero
# Esto hace que la instalación sea más rápida la próxima vez
COPY package*.json ./

# 4. Instalamos las dependencias (librerías) que necesita tu backend
RUN npm install

# 5. Copiamos el resto del código de nuestra app al contenedor
COPY . .

# 6. Exponemos el puerto que usa tu app (normalmente el 3000 o 5000)
# Míralo en tu archivo index.js o .env
EXPOSE 3000

# 7. Comando para arrancar la aplicación
CMD ["npm", "start"]# 1. Usamos una imagen ligera de Node.js (esto es como el sistema operativo base)
