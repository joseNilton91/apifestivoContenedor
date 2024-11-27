# Usas una imagen de Node.js como base 
FROM node:18
# Crear carpeta para la aplicación 
WORKDIR /app 
# Instalar dependencias 
# Se usa un comodín para garantizar que ambos package.json Y package-lock.json sean copiados 
COPY package*.json ./ 
RUN npm install
# Si se está construyendo para ambiente de producción 
# RUN npm ci --only=production 
# copiar el código fuente de la aplicación completo 
COPY . .
#Exponer el Puerto donde correrá la aplicación 
EXPOSE 3030
#Comando para ejecutar la aplicación 
CMD [ "node", "app.js" ]