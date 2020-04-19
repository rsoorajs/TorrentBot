 #!/bin/sh

#wajib install utk collab
sudo apt-get install nodejs-dev node-gyp libssl1.0-dev

cd TorrentBot

#wajib install utk collab
sudo apt-get install npm

sudo npm -i install -g typescript

sudo apt install aria2


sudo chmod 777 aria.sh



npm install

tsc

./aria.sh

npm start
