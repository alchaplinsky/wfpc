FROM python:3.8-alpine
RUN apk --update add bash nano

COPY ./requirements.txt /myapp/requirements.txt

WORKDIR /myapp

RUN pip3 install -r requirements.txt
ENV FLASK_APP=myapp

ENTRYPOINT waitress-serve --port=5000 --call myapp:create_app
