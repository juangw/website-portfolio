FROM node:8.10

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app/
RUN yarn global add serve
RUN yarn build

EXPOSE 8080

# Command to run the app
CMD ["serve", "-s", "build", "-l", "8080"]

