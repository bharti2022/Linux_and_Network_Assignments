FROM mysql:latest

ENV MYSQL_USER=lamp_demo
ENV MYSQL_PASSWORD=password
ENV MYSQL_DATABASE=lamp_demo
ENV MYSQL_ALLOW_EMPTY_PASSWORD=1

COPY ./sql/ /docker-entrypoint-initdb.d/


