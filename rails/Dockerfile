FROM ruby:3.0

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

WORKDIR /myapp

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

RUN bundle install
RUN rm -f /myapp/tmp/pids/server.pid

CMD ["rails", "server", "-b", "0.0.0.0"]
