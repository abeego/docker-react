FROM alpine as builder

RUN apk add --update nodejs nodejs-npm

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html