FROM node:18-alpine

RUN mkdir -p /backend
WORKDIR /backend

COPY package.json /backend

COPY . /backend

RUN npm install

CMD ["npm", "start"]