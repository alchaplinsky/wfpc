FROM ruby:3.0

RUN apt-get update -qq

WORKDIR /myapp

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

RUN bundle install

CMD ["/bin/bash"]
