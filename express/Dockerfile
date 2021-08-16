FROM node:16.6

RUN apt-get update -qq

WORKDIR /myapp

COPY ./package.json /myapp/package.json

RUN npm install

CMD ["/bin/bash"]
