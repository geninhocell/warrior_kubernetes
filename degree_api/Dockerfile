FROM node:14.17.6-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY src ./src

EXPOSE 3332

CMD   ["yarn", "start"]

