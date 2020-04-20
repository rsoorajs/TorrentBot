FROM alpine:3.10.2

# install ca-certificates so that HTTPS works consistently
RUN apk add --no-cache ca-certificates

RUN apk add --no-cache --update \
      git \
      bash \
      nodejs \
      npm \
      aria2

# To handle not get uid/gid error while installing a npm package
RUN npm config set unsafe-perm true

RUN npm install -g typescript

RUN mkdir /TorrentBot
RUN chmod 777 /TorrentBot
WORKDIR /TorrentBot

RUN git clone https://github.com/paduhq/TorrentBot /TorrentBot



CMD ["bash","start.sh"]
