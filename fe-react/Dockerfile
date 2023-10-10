FROM node:18.18.0-alpine3.18


WORKDIR /app
COPY package*.json .
RUN npm i

EXPOSE 3000
CMD [ "npm", "start" ]