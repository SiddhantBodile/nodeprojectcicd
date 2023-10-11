#!/bin/bash

# Change to your application directory
cd /var/www/nodeproject/

# Install pm2 globally
npm install -g pm2

# Start your Node.js application using pm2
pm2 start app.js --name nodejs-app
