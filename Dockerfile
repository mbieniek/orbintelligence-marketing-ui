FROM node:11.4.0-alpine

EXPOSE 3000

LABEL maintainer Michael Bieniek <michaelpbieniek@gmail.com>

RUN npm install -g create-react-app \
                   create-react-native-app \
                   react-native-cli
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install -qy
ADD . /app

ENV TZ America/New_York
RUN apk --update add \
		tzdata \
	&& cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone \
	&& date

ENTRYPOINT npm start
