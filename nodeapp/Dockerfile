FROM node:12-alpine 

ARG ENV_NAME=development
ENV NODE_ENV=$ENV_NAME

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

USER node

RUN npm install && npm cache clean --force --loglevel=error

COPY --chown=node:node ./src ./src

CMD [ "npm", "start"]
