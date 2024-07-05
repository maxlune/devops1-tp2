FROM node:16-alpine

WORKDIR /usr/devops1-tp

COPY package*.json .

RUN npm i

COPY . .

CMD ["npm", "start"]