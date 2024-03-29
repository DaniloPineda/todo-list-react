FROM node:alpine
WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
EXPOSE 3000

# Start the app
CMD ["npm", "start"]