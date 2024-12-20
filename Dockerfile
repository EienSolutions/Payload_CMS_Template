FROM node:20.14-alpine as base

RUN apk add --no-cache tzdata

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN yarn install
RUN yarn build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js
ENV TZ=America/Mexico_City

WORKDIR /home/node/app
COPY package*.json  ./
COPY yarn.lock ./
COPY global-bundle.pem ./

RUN yarn install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 1337

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:1337/ || exit 1

CMD ["node", "dist/server.js"]
