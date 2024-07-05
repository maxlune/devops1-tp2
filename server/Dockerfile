FROM node:16-alpine

WORKDIR /usr/devops1-tp-back

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
