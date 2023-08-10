FROM node:alpine

WORKDIR /site

ENV PATH /site/node_modeules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "dev"]
