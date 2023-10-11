#!/bin/bash

# Change to your application directory
cd /var/www/nodeproject/

# Start your Node.js application using pm2
pm2 start app.js --name nodejs-app
