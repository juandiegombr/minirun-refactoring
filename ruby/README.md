# Checkout.rb

## Requisitos

Para poder ejecutar este ejercicion te basta con tener instalado `docker`. Si prefieres la instalación en local, necesitarás `ruby`, `gem` y tener instalada la gema `bundler`.

## Como usar con docker

En la carpeta `docker` hay varios scripts, cada uno sirve para una fase distinta del ejercicio.

### docker/console

Sirve para entrar a una consola interactiva de Ruby para poder ejecutar código:

```terminal
$ docker/console
Sending build context to Docker daemon  18.94kB
Step 1/5 : FROM ruby:2.5-alpine3.9
 ---> 2137ee54c21a
Step 2/5 : WORKDIR /app
 ---> Using cache
 ---> ec37d10f13ae
Step 3/5 : COPY Gemfile Gemfile.lock /app/
 ---> Using cache
 ---> 82c8e0ded6e7
Step 4/5 : RUN bundle install
 ---> Using cache
 ---> 31ae90cfe968
Step 5/5 : COPY . /app
 ---> b646f29ecca0
Successfully built b646f29ecca0
Successfully tagged minirun-refactoring-ruby:latest

This command opens a irb console. To load your code run:
    require_relative 'lib/checkout'
To quit, run:
    exit

irb(main):001:0>
```

### docker/run

Sirve para ejecutar un programa de command line que hemos preparado para hacer pruebas manuales del Checkout. Puedes introducir una cadena con los articulos y te devuelve el precio final:

```terminal
$ docker/run
Sending build context to Docker daemon  19.97kB
Step 1/5 : FROM ruby:2.5-alpine3.9
 ---> 2137ee54c21a
Step 2/5 : WORKDIR /app
 ---> Using cache
 ---> ec37d10f13ae
Step 3/5 : COPY Gemfile Gemfile.lock /app/
 ---> Using cache
 ---> 82c8e0ded6e7
Step 4/5 : RUN bundle install
 ---> Using cache
 ---> 31ae90cfe968
Step 5/5 : COPY . /app
 ---> ab28e9554811
Successfully built ab28e9554811
Successfully tagged minirun-refactoring-ruby:latest
Puts items to buy: ABC
Total price: 100
```

### docker/test

Sirve para lanzar todos los test de `RSpec`. Pero... ¿donde están los tests?

```terminal
$ docker/test
Sending build context to Docker daemon  20.48kB
Step 1/5 : FROM ruby:2.5-alpine3.9
 ---> 2137ee54c21a
Step 2/5 : WORKDIR /app
 ---> Using cache
 ---> ec37d10f13ae
Step 3/5 : COPY Gemfile Gemfile.lock /app/
 ---> Using cache
 ---> 82c8e0ded6e7
Step 4/5 : RUN bundle install
 ---> Using cache
 ---> 31ae90cfe968
Step 5/5 : COPY . /app
 ---> bb50ffe68085
Successfully built bb50ffe68085
Successfully tagged minirun-refactoring-ruby:latest

Randomized with seed 23796

RSpec
  works

Finished in 0.0014 seconds (files took 0.08238 seconds to load)
1 example, 0 failures

Randomized with seed 23796
```

## Como usar en el entorno local

### Preparación

Ejecuta en tu terminal:

```terminal
$ bundle install --path vendor/bundle
Fetching gem metadata from https://rubygems.org/..........
Using bundler 1.17.3
Fetching diff-lcs 1.3
Installing diff-lcs 1.3
Fetching rspec-support 3.8.0
Installing rspec-support 3.8.0
Fetching rspec-core 3.8.0
Installing rspec-core 3.8.0
Fetching rspec-expectations 3.8.2
Installing rspec-expectations 3.8.2
Fetching rspec-mocks 3.8.0
Installing rspec-mocks 3.8.0
Fetching rspec 3.8.0
Installing rspec 3.8.0
Bundle complete! 1 Gemfile dependency, 7 gems now installed.
Bundled gems are installed into `./vendor/bundle`
```

Esto instalará `RSpec`, para que puedas lanzar los tests.

### Lanzar los test

```terminal
$ bundle exec rspec

Randomized with seed 40068

RSpec
  works

Finished in 0.0012 seconds (files took 0.06887 seconds to load)
1 example, 0 failures

Randomized with seed 40068
```

### Ejecutar el programa de command line

```terminal
$ ruby lib/cli.rb
Puts items to buy: ABC
Total price: 100
```
