FROM node:18.18.0-alpine3.18


WORKDIR /app
COPY package*.json .
RUN npm i

EXPOSE 5000
CMD [ "npm", "run", "dev"]