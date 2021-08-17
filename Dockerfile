#Using node image
FROM node:14.17.4
#Setting up working directory
WORKDIR /txtToJSON

#Adding source files and dbs
COPY src /txtToJSON/src/
COPY databases /txtToJSON/databases/

#Adding package files and env variables
COPY package.json package-lock.json base.txt /txtToJSON/
COPY .env /txtToJSON/

#Installing npm packages
RUN npm install

#Running index.js
CMD ["npm", "start"]