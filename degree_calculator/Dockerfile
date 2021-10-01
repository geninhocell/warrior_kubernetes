FROM node:14.17.6 as builder

ARG STAGE=development

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY src ./src
COPY public ./public
COPY tsconfig.json ./tsconfig.json

RUN yarn build:${STAGE}

#####################################################

FROM nginx:1.21.3-alpine

COPY --from=builder /usr/app/build ./usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

