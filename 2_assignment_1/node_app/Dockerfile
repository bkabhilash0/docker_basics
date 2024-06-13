FROM node:20-alpine

WORKDIR /app

COPY package.json /app

RUN npm install pnpm -g && npm install

COPY . /app

EXPOSE 3000

CMD ["node", "app.mjs"]