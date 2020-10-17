FROM node:10

ENV NODE_PORT 3000
ENV INSTALL_PATH /usr/src/app

RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH

COPY package*.json ./

RUN npm install

COPY ./service ./service

EXPOSE $NODE_PORT

CMD ["npm", "run", "dev"]