# MERN fullstack todo-app

App uses [MongoDB](https://github.com/mongodb/mongo), [Express](https://github.com/expressjs/express), [React](https://github.com/facebook/react) and [Node.js](https://github.com/nodejs/node)

Clone repository:
```bash
git clone https://github.com/av3000/MERN-fullstack-todo-app.git
```

## Start express server

Run express app:
```bash
cd MERN-fullstack-todo-app/api
npm i
node index.js
```

## MongoDB setup for [ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

Make sure you are executing it all in root directory
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
mkdir mongodb-data

echo 'mongod --bind_ip=$IP --dbpath=mongodb-data --nojournal --rest "$@"' > mongod
// if you get error about equal sign use the line below
echo 'mongod --dbpath mongodb-data --nojournal "$@"' > mongod

chmod a+x mongod
./mongod
```

Make sure you are back in repository folder to add mongoose library for mongodb:
```bash
npm install mongoose --save
```


visit [MongoDB](https://github.com/mongodb/mongo) repository for more details.
## Start React App

```bash
cd client/
npm i
npmstart
```