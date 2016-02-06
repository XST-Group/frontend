FROM readytalk/nodejs

RUN npm install -g bower gulp http-server

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install
CMD ["gulp"]

WORKDIR /usr/src/app/dist
EXPOSE 8080
CMD ["http-server"]


