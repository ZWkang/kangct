#!/bin/bash

# Build style guide 
npx styleguidist build

# checkout gh-pages branch
git checkout gh-pages

# move doc file
cp -r ./styleguide/* ./

# all all change
git add index.html
git add build

# git commit 
git commit -m "gh-pages updated `date +'%Y-%m-%d %H:%M:%S'`"

# git pull
git pull --rebase origin gh-pages

# push to the gh-pages
git push -u origin gh-pages

# checkout back to the dev branch 
git checkout -