#!/usr/bin/env sh


# abort on errors

set -e

# build

npm run build

# navigate intothr build output directory
 cd dist

 # if you are deploying to custom domain
 #eco 'www.example.com' > CNAME

 git init
 git checkout -b main
 git add -A
 git commit -m 'deploy'

 # if you are deploying to https://<USERNAME>.github.io
 # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

 # if you are deploying to https://<USERNAME>.github.io/<REPO>
 # git push -f git@github.com:jack4e5/Mortgage-repayment-calculator.github.io.git main:gh-pages