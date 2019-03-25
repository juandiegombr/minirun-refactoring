FROM ruby:2.5-alpine3.9

WORKDIR /app

COPY Gemfile Gemfile.lock /app/
RUN bundle install

COPY . /app
