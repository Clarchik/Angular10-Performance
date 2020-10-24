FROM node:12.13.0 as Builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:1.15.8-alpine
COPY --from=Builder /usr/src/app/dist/Angular10-TaskList /usr/share/nginx/html
