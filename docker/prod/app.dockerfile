FROM node:18

WORKDIR /home/app

COPY package*.json ./

RUN mkdir -p /home/app

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
