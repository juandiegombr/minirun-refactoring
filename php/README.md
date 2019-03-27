# Checkout.php

## Requisitos

Para poder trabajar sobre este ejercicio te basta con tener instalado `docker`. Si prefieres la instalación en local, necesitarás `php` y `composer`.

## Como usar con docker

En la carpeta `docker` hay varios scripts, cada uno sirve para una fase distinta del ejercicio.

### docker/console

Sirve para entrar a una consola interactiva de Ruby para poder ejecutar código:

```terminal
$ docker/console
Sending build context to Docker daemon  66.05kB
Step 1/8 : FROM php:7.2.16-cli-alpine3.9
 ---> dfc1490370a6
Step 2/8 : WORKDIR /app
 ---> Using cache
 ---> d512446c6664
Step 3/8 : RUN apk add curl
 ---> Using cache
 ---> a1dca1935fd6
Step 4/8 : RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
 ---> Using cache
 ---> 86900baca039
Step 5/8 : COPY composer.json composer.lock /app/
 ---> Using cache
 ---> 35113704e6f5
Step 6/8 : RUN composer install --no-scripts --no-progress --no-suggest --no-autoloader
 ---> Using cache
 ---> 49d1f1718da8
Step 7/8 : COPY . .
 ---> Using cache
 ---> 89b10f14233b
Step 8/8 : RUN composer install --no-scripts --no-progress --no-suggest
 ---> Using cache
 ---> ff9bf5da1e05
Successfully built ff9bf5da1e05
Successfully tagged checkout:latest

This command opens a php interactive shell. To run your code:
    $checkout = new Checkout\Checkout(new Checkout\PricingRules());
To quit, run:
    exit

Interactive shell

php >
```

### docker/run

Sirve para ejecutar un programa de command line que hemos preparado para hacer pruebas manuales del Checkout. Puedes introducir una cadena con los articulos y te devuelve el precio final:

```terminal
$ docker/run
Sending build context to Docker daemon  66.05kB
Step 1/8 : FROM php:7.2.16-cli-alpine3.9
 ---> dfc1490370a6
Step 2/8 : WORKDIR /app
 ---> Using cache
 ---> d512446c6664
Step 3/8 : RUN apk add curl
 ---> Using cache
 ---> a1dca1935fd6
Step 4/8 : RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
 ---> Using cache
 ---> 86900baca039
Step 5/8 : COPY composer.json composer.lock /app/
 ---> Using cache
 ---> 35113704e6f5
Step 6/8 : RUN composer install --no-scripts --no-progress --no-suggest --no-autoloader
 ---> Using cache
 ---> 49d1f1718da8
Step 7/8 : COPY . .
 ---> Using cache
 ---> 89b10f14233b
Step 8/8 : RUN composer install --no-scripts --no-progress --no-suggest
 ---> Using cache
 ---> ff9bf5da1e05
Successfully built ff9bf5da1e05
Successfully tagged checkout:latest
Puts items to buy: ABC
Total price: 100
```

### docker/test

Sirve para lanzar todos los test de `PHPUnit`. Pero... ¿donde están los tests?

```terminal
$ docker/test
Sending build context to Docker daemon  69.12kB
Step 1/8 : FROM php:7.2.16-cli-alpine3.9
 ---> dfc1490370a6
Step 2/8 : WORKDIR /app
 ---> Using cache
 ---> d512446c6664
Step 3/8 : RUN apk add curl
 ---> Using cache
 ---> a1dca1935fd6
Step 4/8 : RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
 ---> Using cache
 ---> 86900baca039
Step 5/8 : COPY composer.json composer.lock /app/
 ---> Using cache
 ---> 35113704e6f5
Step 6/8 : RUN composer install --no-scripts --no-progress --no-suggest --no-autoloader
 ---> Using cache
 ---> 49d1f1718da8
Step 7/8 : COPY . .
 ---> Using cache
 ---> 33f7838e8865
Step 8/8 : RUN composer install --no-scripts --no-progress --no-suggest
 ---> Using cache
 ---> 9e5c93a8d7b6
Successfully built 9e5c93a8d7b6
Successfully tagged checkout:latest
PHPUnit 8.0.6 by Sebastian Bergmann and contributors.

.                                                                   1 / 1 (100%)

Time: 18 ms, Memory: 4.00 MB

OK (1 test, 1 assertion)
```

## Como usar en el entorno local

### Preparación

Ejecuta en tu terminal:

```terminal
$ composer install
Do not run Composer as root/super user! See https://getcomposer.org/root for details
Loading composer repositories with package information
Installing dependencies (including require-dev) from lock file
Nothing to install or update
Generating autoload files
```

Esto instalará `PHPUnit`, para que puedas lanzar los tests.

### Lanzar los test

```terminal
$ bin/phpunit test
PHPUnit 8.0.6 by Sebastian Bergmann and contributors.

.                                                                   1 / 1 (100%)

Time: 26 ms, Memory: 4.00 MB

OK (1 test, 1 assertion)
```

### Ejecutar el programa de command line

```terminal
$ php src/cli.php
Puts items to buy: ABC
Total price: 100
```
