FROM node:18

WORKDIR /home/app

COPY package*.json ./

RUN mkdir -p /home/app
RUN npm i -g nodemon

COPY . .

EXPOSE 3000

CMD ["nodemon", "-L", "index.js"]
