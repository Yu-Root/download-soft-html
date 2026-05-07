FROM docker.m.daocloud.io/node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm config set registry https://registry.npmmirror.com && \
    npm install

COPY . .

RUN npm run build

FROM docker.m.daocloud.io/nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000

RUN sed -i 's/listen       80;/listen       3000;/' /etc/nginx/conf.d/default.conf && \
    ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

CMD ["sh", "-c", "echo 'Server started successfully!' && echo 'Access URL: http://localhost:3000' && nginx -g 'daemon off;'"]
