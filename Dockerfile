
FROM node

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm ci

ENV PORT=3000

EXPOSE $PORT
EXPOSE 443

CMD ["npm", "start"]