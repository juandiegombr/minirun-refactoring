FROM node:8.15.1-stretch-slim

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY . /app
