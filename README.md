# lottery-project

## Deploy the project locally in dev environment

In order to deploy successfully this project, it requires to to follow this steps:

1. Navigate to the directory of this file.
2. Execute the following commands:

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

3. Access to http://localhost:8080 through a web browser to reach the application.

## Deploy the project locally in Production environment

To simulate a deployment on a production environment, it requires to follow this steps:

1. Navigate to the directory of this file.
2. Execute the following commands:

```bash
# build for production with minification
npm run build

# test the production build locally
npm run serve
```

3. Access to http://localhost:8080 through a web browser to reach the application.

## Execute the tests

To execute the tests that are already created, it requires to follow this steps:

1. Navigate to the directory of this file.
2. Execute the following commands:

```bash
# install dependencies
npm install

# run tests with jest and enzyme
npm run test
```

## Deploy a container for this project with Docker

To use Docker to deploy this project, it requires to follow this steps:

1. Navigate to the directory of this file.
2. Execute the following commands:

```bash
# build docker image for this project following the Dockerfile.prod
docker build -f Dockerfile.prod -t lottery-project:latest .

# deploy the application as a Docker container
docker run -it -p 80:80 lottery-project:latest
```

3. Access to http://localhost through a web browser to reach the application.

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
