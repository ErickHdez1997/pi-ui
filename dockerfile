# Build Stage
FROM node:22.15-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build --prod

# Production Stage
FROM nginx:alpine
COPY --from=build /app/dist/your-angular-app-name /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
