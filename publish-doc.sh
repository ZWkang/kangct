#!/bin/bash

# Build style guide 
npx styleguidist build

# checkout gh-pages branch
git checkout gh-pages

# move doc file
cp ./styleguide/* ./

# all all change
git add *

# git commit 
git commit -a -m "gh-pages updated `date + '%Y-%m-%d %H:%M:%S'`"

# git pull
git pull --rebase origin gh-pages

# push to the gh-pages
git push -u origin gh-pages

# checkout back to the dev branch 
git checkout -