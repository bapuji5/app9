FROM node:18
# Working dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
# Copy files from Build
COPY package*.json ./
# Install Files
RUN npm install
EXPOSE 3000
CMD [ "node", "index.js" ]