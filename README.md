# chat-app
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=FATEC-SJC-NoName_front-chat-app&metric=alert_status)](https://sonarcloud.io/dashboard?id=FATEC-SJC-NoName_front-chat-app)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Build docker app
```
docker build -t noname/chat-app-front .
```

### Run docker app
```
docker run -it -p 5000:5000 --rm --name chat-app-front noname/chat-app-front
```