# Checkout.js

## Requisitos

Para poder trabajar sobre este ejercicio te basta con tener instalado `docker`. Si prefieres la instalación en local, necesitarás `node` y `npm`.

## Como usar con docker

En la carpeta `docker` hay varios scripts, cada uno sirve para una fase distinta del ejercicio.

### docker/console

Sirve para entrar a una consola interactiva de Ruby para poder ejecutar código:

```terminal
$ docker/console
Sending build context to Docker daemon  189.4kB
Step 1/5 : FROM node:8.15.1-stretch-slim
 ---> 832d53887052
Step 2/5 : WORKDIR /app
 ---> Using cache
 ---> 515b5582c1d6
Step 3/5 : COPY package.json package-lock.json /app/
 ---> Using cache
 ---> 4708d8ac79ce
Step 4/5 : RUN npm install
 ---> Using cache
 ---> 1c425395f55c
Step 5/5 : COPY . /app
 ---> fbaad001da8e
Successfully built fbaad001da8e
Successfully tagged minirun-refactoring-js:latest

This command opens a node console. To load your code run:
    .load src/Checkout.js
To quit, run:
    .exit

>
```

### docker/run

Sirve para ejecutar un programa de command line que hemos preparado para hacer pruebas manuales del Checkout. Puedes introducir una cadena con los articulos y te devuelve el precio final:

```terminal
$ docker/run
Sending build context to Docker daemon  185.3kB
Step 1/5 : FROM node:8.15.1-stretch-slim
 ---> 832d53887052
Step 2/5 : WORKDIR /app
 ---> Using cache
 ---> 515b5582c1d6
Step 3/5 : COPY package.json package-lock.json /app/
 ---> Using cache
 ---> 4708d8ac79ce
Step 4/5 : RUN npm install
 ---> Using cache
 ---> 1c425395f55c
Step 5/5 : COPY . /app
 ---> 6dea1e803a92
Successfully built 6dea1e803a92
Successfully tagged minirun-refactoring-js:latest
Puts items to buy:
prompt: items:  ABC
Total price: 100
```

### docker/test

Sirve para lanzar todos los test de `Jest`. Pero... ¿donde están los tests?

```terminal
$ docker/test
Sending build context to Docker daemon  189.4kB
Step 1/5 : FROM node:8.15.1-stretch-slim
 ---> 832d53887052
Step 2/5 : WORKDIR /app
 ---> Using cache
 ---> 515b5582c1d6
Step 3/5 : COPY package.json package-lock.json /app/
 ---> Using cache
 ---> 4708d8ac79ce
Step 4/5 : RUN npm install
 ---> Using cache
 ---> 1c425395f55c
Step 5/5 : COPY . /app
 ---> 00aacb7cfea7
Successfully built 00aacb7cfea7
Successfully tagged minirun-refactoring-js:latest

> minirun-refactoring-js@0.0.1 test /app
> jest --passWithNoTests

 PASS  test/jest.spec.js
  Jest
    ✓ works (4ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.511s
Ran all test suites.
```

## Como usar en el entorno local

### Preparación

Ejecuta en tu terminal:

```terminal
$ npm install
npm WARN minirun-refactoring-js@0.0.1 No license field.

audited 476699 packages in 5.747s
found 0 vulnerabilities
```

Esto instalará `Jest`, para que puedas lanzar los tests.

### Lanzar los test

```terminal
$ npm run test

> minirun-refactoring-js@0.0.1 test /app
> jest --passWithNoTests

 PASS  test/jest.spec.js
  Jest
    ✓ works (5ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.483s
Ran all test suites.
```

### Ejecutar el programa de command line

```terminal
$ node src/cli.js
Puts items to buy:
prompt: items:  ABC
Total price: undefined
```
