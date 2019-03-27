FROM php:7.2.16-cli-alpine3.9

WORKDIR /app

RUN apk add curl
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY composer.json composer.lock /app/
RUN composer install --no-scripts --no-progress --no-suggest --no-autoloader

COPY . .

# Generate vendor/autoload.php
RUN composer install --no-scripts --no-progress --no-suggest
