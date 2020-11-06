FROM node:12-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn 
COPY . ./

CMD ["yarn" ,"start"]