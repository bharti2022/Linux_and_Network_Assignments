FROM node:10-slim

WORKDIR /app

# have nodemon available for local dev use (file watching)
RUN npm install -g nodemon
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install && npm ls
RUN mv /app/node_modules /node_modules
#COPY package*.json ./

ADD . /app

COPY . .

ENV PORT 80

EXPOSE 80

CMD ["node", "server.js"]
