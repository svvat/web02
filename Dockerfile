# use the latest node 
FROM node:14

#set the working directory
WORKDIR /usr/src/app
# copy from host to current location
COPY package.json ./
# execute install dependencies (from package.json) inside image 
RUN npm install

# copy source code from host
COPY . .

#expose the image's port 8080
EXPOSE 8080

# run the command within the container
CMD [ "node", "server.js" ]


