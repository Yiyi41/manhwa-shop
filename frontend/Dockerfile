FROM node:18-alpine

RUN mkdir -p /frontend
WORKDIR /frontend

COPY package.json /frontend
COPY package-lock.json /frontend
COPY . /frontend

RUN npm install

CMD ["npm", "start"]