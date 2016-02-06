FROM readytalk/nodejs

RUN npm install -g bower gulp http-server

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install
CMD ["ls"]
CMD ["gulp"]

EXPOSE 8080
CMD ["http-server"]


