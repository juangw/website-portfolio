# website-portfolio
Website built with react.js and node that contains my portfolio of hobby projects

## How to start
Run the docker commands below to build and run the site:
```bash
docker build -t website-portfolio .
docker run -it -p 8080:8080 website-portfolio
```

Or if you prefer to start the project outside of a docker container you can run the command:
```bash
yarn install
yarn start
```
